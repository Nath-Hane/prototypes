(() => {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const dots = Array.from(document.querySelectorAll(".dot-btn"));
  const counterEl = document.getElementById("slideCounter");
  const progressFill = document.getElementById("progressFill");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const fullscreenBtn = document.getElementById("fullscreenBtn");

  const TOTAL_SLIDES = slides.length;
  let currentSlide = 0;
  let isTransitioning = false;
  let iframeLoaded = false;

  const CURRENCY_RATES = {
    NTD: { symbol: "NT$", rate: 1, decimals: 0 },
    USD: { symbol: "$", rate: 0.031, decimals: 2 },
    EUR: { symbol: "€", rate: 0.029, decimals: 2 }
  };

  const PROTOTYPES = {
    landing: {
      url: "../prototypes/index.html",
      mobile: false
    },
    guide: {
      url: "../prototypes/guide.html?program=heritage",
      mobile: true
    }
  };

  const engineState = {
    startTime: "14:30",
    rainy: false,
    currency: "NTD"
  };

  function formatMoney(ntdAmount, currencyCode) {
    const cfg = CURRENCY_RATES[currencyCode] || CURRENCY_RATES.NTD;
    const converted = ntdAmount * cfg.rate;
    return `${cfg.symbol}${converted.toFixed(cfg.decimals)}`;
  }

  function addMinutesToTime(hhmm, offsetMinutes) {
    const [h, m] = hhmm.split(":").map(Number);
    const total = h * 60 + m + offsetMinutes;
    const nh = Math.floor(total / 60) % 24;
    const nm = total % 60;
    return `${String(nh).padStart(2, "0")}:${String(nm).padStart(2, "0")}`;
  }

  function renderSlide3Engine() {
    const container = document.getElementById("timelinePreview");
    const conflictAlert = document.getElementById("conflictAlert");
    const program = window.TAIWANDERER_PROGRAMS?.heritage;
    if (!container || !program) return;

    const previewStops = program.stops.slice(0, 2);
    let cumulativeMin = 0;

    container.innerHTML = previewStops
      .map((stop) => {
        const arrival = addMinutesToTime(engineState.startTime, cumulativeMin);
        cumulativeMin += stop.durationMin + (stop.transitFromPrev?.durationMin || 0);
        const totalNtd = (stop.costs || []).reduce((sum, c) => sum + c.ntd, 0);
        const activeInfo = engineState.rainy && stop.planB ? stop.planB : stop;
        const badgeText = engineState.rainy && stop.planB ? `☔ ${stop.planB.badge}` : `Stop 0${stop.number}`;

        return `
          <article class="stop-card">
            <div class="stop-meta">
              <span>${arrival} • ${badgeText}</span>
              <span>Est. ${totalNtd === 0 ? "Free" : formatMoney(totalNtd, engineState.currency)}</span>
            </div>
            <h3 class="stop-title">${activeInfo.name}</h3>
            <p class="stop-summary">${activeInfo.summary}</p>
          </article>
        `;
      })
      .join("");

    if (conflictAlert) {
      conflictAlert.classList.toggle("is-visible", engineState.startTime === "18:30");
    }
  }

  function renderSlide4Flashcards() {
    const grid = document.getElementById("flashcardsGrid");
    const program = window.TAIWANDERER_PROGRAMS?.heritage;
    if (!grid || !program) return;

    const cards = [
      program.globalPhrases[0],
      program.stops[0].flashcards[0],
      program.stops[0].flashcards[1]
    ].filter(Boolean);

    grid.innerHTML = cards
      .map(
        (card, idx) => `
          <button class="flashcard-tile anim-item" type="button" data-fc-index="${idx}">
            <span class="chaos-tag">${card.category}</span>
            <div class="fc-tc font-tc">${card.tc}</div>
            <div class="fc-pinyin">${card.pinyin}</div>
            <div class="fc-en">${card.english}</div>
          </button>
        `
      )
      .join("");

    grid.querySelectorAll(".flashcard-tile").forEach((btn) => {
      btn.addEventListener("click", () => {
        const card = cards[Number(btn.dataset.fcIndex)];
        if (card) openFlashcardModal(card);
      });
    });
  }

  function openFlashcardModal(card) {
    const modal = document.getElementById("fcModal");
    if (!modal) return;
    document.getElementById("fcModalTitle").textContent = card.title;
    document.getElementById("fcModalTc").textContent = card.tc;
    document.getElementById("fcModalPinyin").textContent = card.pinyin;
    document.getElementById("fcModalEn").textContent = card.english;
    document.getElementById("fcModalCtx").textContent = card.context;
    modal.classList.add("is-open");
    gsap.fromTo(".fc-modal-card", { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.25, ease: "power2.out" });
  }

  function closeFlashcardModal() {
    const modal = document.getElementById("fcModal");
    if (modal) modal.classList.remove("is-open");
  }

  function setActivePrototype(key) {
    const cfg = PROTOTYPES[key];
    const iframe = document.getElementById("protoIframe");
    const frame = document.getElementById("deviceFrame");
    const external = document.getElementById("openProtoExternal");
    if (!cfg || !iframe || !frame || !external) return;

    iframe.src = cfg.url;
    external.href = cfg.url;
    frame.classList.toggle("is-mobile", cfg.mobile);

    document.querySelectorAll(".proto-tab").forEach((tab) => {
      tab.classList.toggle("is-active", tab.dataset.proto === key);
    });
  }

  function animateSlideIn(slideEl) {
    const items = slideEl.querySelectorAll(".anim-item");
    gsap.fromTo(
      items,
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: "power2.out", clearProps: "transform" }
    );
  }

  function updateChrome(index) {
    counterEl.textContent = `${String(index + 1).padStart(2, "0")} / ${String(TOTAL_SLIDES).padStart(2, "0")}`;
    gsap.to(progressFill, {
      width: `${((index + 1) / TOTAL_SLIDES) * 100}%`,
      duration: 0.35,
      ease: "power2.out"
    });
    dots.forEach((dot, i) => dot.classList.toggle("is-active", i === index));
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === TOTAL_SLIDES - 1;
  }

  function goToSlide(targetIndex) {
    if (targetIndex < 0 || targetIndex >= TOTAL_SLIDES || targetIndex === currentSlide || isTransitioning) {
      return;
    }

    isTransitioning = true;
    const outgoing = slides[currentSlide];
    const incoming = slides[targetIndex];
    const direction = targetIndex > currentSlide ? 1 : -1;
    currentSlide = targetIndex;

    updateChrome(currentSlide);

    if (currentSlide === 4 && !iframeLoaded) {
      iframeLoaded = true;
      setActivePrototype("landing");
    }

    gsap.to(outgoing, {
      opacity: 0,
      x: -40 * direction,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        outgoing.classList.remove("is-active");
        gsap.set(outgoing, { clearProps: "x" });
      }
    });

    incoming.classList.add("is-active");
    gsap.fromTo(
      incoming,
      { opacity: 0, x: 40 * direction },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        ease: "power2.out",
        clearProps: "x",
        onComplete: () => {
          isTransitioning = false;
        }
      }
    );

    animateSlideIn(incoming);
  }

  function bindControls() {
    prevBtn.addEventListener("click", () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener("click", () => goToSlide(currentSlide + 1));

    dots.forEach((dot) => {
      dot.addEventListener("click", () => goToSlide(Number(dot.dataset.goto)));
    });

    fullscreenBtn.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    document.addEventListener("keydown", (e) => {
      const modalOpen = document.getElementById("fcModal")?.classList.contains("is-open");
      if (e.key === "Escape" && modalOpen) {
        closeFlashcardModal();
        return;
      }
      if (["ArrowRight", " ", "PageDown"].includes(e.key)) {
        e.preventDefault();
        goToSlide(currentSlide + 1);
      } else if (["ArrowLeft", "PageUp"].includes(e.key)) {
        e.preventDefault();
        goToSlide(currentSlide - 1);
      } else if (e.key.toLowerCase() === "f") {
        fullscreenBtn.click();
      }
    });

    document.querySelectorAll("[data-start]").forEach((btn) => {
      btn.addEventListener("click", () => {
        engineState.startTime = btn.dataset.start;
        document.querySelectorAll("[data-start]").forEach((b) => b.classList.toggle("is-selected", b === btn));
        renderSlide3Engine();
      });
    });

    document.querySelectorAll("[data-curr]").forEach((btn) => {
      btn.addEventListener("click", () => {
        engineState.currency = btn.dataset.curr;
        document.querySelectorAll("[data-curr]").forEach((b) => b.classList.toggle("is-selected", b === btn));
        renderSlide3Engine();
      });
    });

    const rainyToggle = document.getElementById("rainyToggle");
    rainyToggle?.addEventListener("click", () => {
      engineState.rainy = !engineState.rainy;
      rainyToggle.classList.toggle("is-rainy", engineState.rainy);
      rainyToggle.setAttribute("aria-pressed", String(engineState.rainy));
      document.getElementById("rainyLabel").textContent = engineState.rainy ? "☔ Rainy-Day Plan B" : "☀️ Normal Route";
      renderSlide3Engine();
    });

    document.getElementById("fcModalClose")?.addEventListener("click", closeFlashcardModal);
    document.getElementById("fcModal")?.addEventListener("click", (e) => {
      if (e.target.id === "fcModal") closeFlashcardModal();
    });

    document.querySelectorAll(".proto-tab").forEach((tab) => {
      tab.addEventListener("click", () => setActivePrototype(tab.dataset.proto));
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderSlide3Engine();
    renderSlide4Flashcards();
    bindControls();
    updateChrome(0);
    animateSlideIn(slides[0]);
  });
})();

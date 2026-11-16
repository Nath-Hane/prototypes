/**
 * Taiwanderer — Structured Field Program Data
 * Schema designed to power all MVP & Marketplace itineraries without template duplication.
 */
window.TAIWANDERER_PROGRAMS = {
  heritage: {
    id: "heritage",
    title: "Heritage & Street Food Safari",
    subtitle: "Dadaocheng & Ningxia Night Market",
    zone: "Datong District • Greater Taipei",
    recommendedStart: "14:30",
    idealWindowLabel: "Best started between 14:00 and 15:30",
    durationLabel: "~4.5 hrs",
    walkingDistance: "3.2 km (Flat, easy)",
    difficulty: "Easy • Stroller & beginner friendly",
    lastVerified: "November 2026",
    planBSummary: "Outdoor pier & open-air night market lanes are swapped for sheltered Qilou arcades, indoor heritage rooms, and seated legacy diners. Transit & budget updated automatically.",
    budgetTip: "Withdraw small NTD bills before arriving at Dihua St / Ningxia Night Market.",
    curator: {
      name: "Claire Lin",
      role: "Taipei Local Food Researcher",
      badge: "Field-Verified"
    },
    prepChecklist: [
      {
        id: "cash",
        title: "Bring small NTD bills (100 & 500 NTD) + coins",
        detail: "Ningxia Night Market stalls and historic herbal shops are 95% cash-only. Break 1,000 NTD notes at a 7-Eleven before starting."
      },
      {
        id: "easycard",
        title: "Top up EasyCard (~100 NTD minimum)",
        detail: "Covers MRT rides into Beimen and out of Shuanglian, plus convenience store drinks."
      },
      {
        id: "tissues",
        title: "Pack pocket tissues & hand sanitizer",
        detail: "Night market food stalls rarely provide napkins or handwashing stations."
      },
      {
        id: "appetite",
        title: "Pace your lunch before 14:30",
        detail: "You will sample 4–5 rich snacks between 17:30 and 19:00."
      }
    ],
    globalPhrases: [
      {
        id: "phrase-nocoriander",
        category: "phrase",
        title: "No Coriander Please",
        tc: "請不要加香菜",
        pinyin: "Qǐng bùyào jiā xiāngcài",
        english: "Please do not add cilantro / coriander.",
        context: "Essential for oyster omelette, gua bao, and peanut ice cream rolls."
      },
      {
        id: "phrase-notspicy",
        category: "phrase",
        title: "No Chili / Not Spicy",
        tc: "不要辣，謝謝",
        pinyin: "Bùyào là, xièxie",
        english: "Not spicy, thank you.",
        context: "Use when ordering braised dishes or savory snacks."
      },
      {
        id: "phrase-takeaway",
        category: "phrase",
        title: "To Go / Takeaway",
        tc: "我要外帶",
        pinyin: "Wǒ yào wàidài",
        english: "I'd like this to go (takeaway).",
        context: "Many stalls have separate lines for dine-in (內用) vs takeaway (外帶)."
      },
      {
        id: "phrase-restroom",
        category: "phrase",
        title: "Where is the restroom?",
        tc: "請問洗手間在哪裡？",
        pinyin: "Qǐngwèn xǐshǒujiān zài nǎlǐ?",
        english: "Excuse me, where is the restroom?",
        context: "Best clean public restrooms: Yongle Market 2F, Visitor Center, MRT stations."
      }
    ],
    stops: [
      {
        id: "stop-1",
        number: 1,
        name: "MRT Beimen (Exit 3) → Dihua St South",
        tcName: "捷運北門站 3號出口 • 迪化街一段",
        addressTc: "台北市大同區迪化街一段21號 (永樂市場周邊)",
        lat: 25.0545,
        lng: 121.5096,
        entryCoords: "25.0545,121.5096",
        transitFromPrev: {
          mode: "MRT",
          line: "MRT Green Line (G13 Beimen)",
          exit: "Exit 3 (塔城街方向)",
          durationMin: 8,
          instruction: "Exit MRT Beimen via Exit 3. Walk straight north on Tacheng St for 6–8 mins; it turns directly into historic Dihua Street.",
          distanceText: "550 m walk from Exit 3"
        },
        durationMin: 45,
        opensAt: "09:30",
        closesAt: "18:00",
        closedDays: [],
        badges: [
          { label: "Cash & Card mix", type: "neutral" },
          { label: "Public WC @ Yongle 2F", type: "info" }
        ],
        summary: "Walk through Taipei's oldest merchant street: Baroque brick facades, dried mushroom & traditional Chinese medicine apothecaries, and Yongle Fabric Market.",
        executionTips: [
          "Skip the tourist souvenir booths at the very start; the authentic herbal dispensaries begin past Lane 14.",
          "Step inside Yongle Market (永樂市場) 1F for fresh traditional snacks or 2F for textile ateliers and clean restrooms."
        ],
        costs: [
          { label: "MRT arrival (avg. Taipei ride)", ntd: 25, payment: "EasyCard", category: "Transit" },
          { label: "Optional dried fruit / herbal snack", ntd: 120, payment: "Cash", category: "Food" }
        ],
        flashcards: [
          {
            id: "fc-1-taxi",
            category: "place",
            title: "Taxi / Direction to Dihua St",
            tc: "請載我到迪化街一段（永樂市場）",
            pinyin: "Qǐng zài wǒ dào Díhuà Jiē Yīduàn (Yǒnglè Shìchǎng)",
            english: "Please take me to Dihua Street Sec. 1 (Yongle Market).",
            context: "Show to taxi/Uber driver if skipping the MRT walk."
          },
          {
            id: "fc-1-sample",
            category: "food",
            title: "Ask what is their signature item",
            tc: "請問你們最招牌的是什麼？",
            pinyin: "Qǐngwèn nǐmen zuì zhāopái de shì shénme?",
            english: "Excuse me, what is your signature / most popular item?",
            context: "Great for traditional pastry or herbal tea shops on Dihua St."
          }
        ],
        planB: {
          badge: "Covered Qilou Arcades",
          name: "Yongle Indoor Market & Qilou Arcade Walk",
          tcName: "永樂市場室內布市 & 迪化街騎樓",
          lat: 25.0545,
          lng: 121.5096,
          entryCoords: "25.0545,121.5096",
          summary: "Stay 100% sheltered under Dihua Street's historic covered arcades (騎樓) and explore inside Yongle Market (2F–3F textile hall) and adjacent indoor craft shops.",
          executionTips: [
            "Stick to the west sidewalk arcades—almost completely continuous roof cover from Nanjing W. Rd to Minsheng W. Rd.",
            "Note: Yongle 2F fabric stalls are quieter/closed on Sundays, but 1F ground food stalls remain open."
          ]
        }
      },
      {
        id: "stop-2",
        number: 2,
        name: "Taipei Xia-Hai City God Temple",
        tcName: "台北霞海城隍廟",
        addressTc: "台北市大同區迪化街一段61號",
        lat: 25.0556,
        lng: 121.5095,
        entryCoords: "25.0556,121.5095",
        transitFromPrev: {
          mode: "Walk",
          line: "Dihua St Sec. 1",
          exit: "Same block north",
          durationMin: 2,
          instruction: "Walk 120m north past Yongle Plaza on the right-hand side of Dihua Street.",
          distanceText: "120 m walk"
        },
        durationMin: 25,
        opensAt: "07:00",
        closesAt: "19:30",
        closedDays: [],
        badges: [
          { label: "Free Entry", type: "success" },
          { label: "Cash Only (Offerings)", type: "warning" }
        ],
        summary: "Compact, intensely atmospheric 1859 temple famous across Asia for Yue Lao (the Matchmaker God) and local neighborhood guardians.",
        executionTips: [
          "Free to enter and observe respectfully—keep photos outside the main incense burner area.",
          "Look for the complimentary sweet red-date tea (平安茶) served near the temple entrance."
        ],
        costs: [
          { label: "Temple entry", ntd: 0, payment: "Free", category: "Tickets" }
        ],
        flashcards: [
          {
            id: "fc-2-tea",
            category: "food",
            title: "Ask if complimentary blessing tea is available",
            tc: "請問這個平安茶可以喝嗎？謝謝",
            pinyin: "Qǐngwèn zhège píng'ān chá kěyǐ hē ma? Xièxie",
            english: "May I have a cup of this blessing tea? Thank you.",
            context: "Usually self-serve in small paper cups right outside."
          }
        ],
        planB: {
          badge: "Sheltered Courtyard",
          name: "Xia-Hai Temple (Covered Canopy)",
          tcName: "台北霞海城隍廟（有遮雨棚）",
          lat: 25.0556,
          lng: 121.5095,
          entryCoords: "25.0556,121.5095",
          summary: "The temple's front courtyard is covered by a permanent rain canopy—no route adjustment needed.",
          executionTips: [
            "Shake out umbrellas at the side rack before stepping onto the temple threshold."
          ]
        }
      },
      {
        id: "stop-3",
        number: 3,
        name: "WangTea Charcoal Roastery (Est. 1890)",
        tcName: "有記名茶 WangTea",
        addressTc: "台北市大同區重慶北路二段64巷26號",
        lat: 25.0558,
        lng: 121.5130,
        entryCoords: "25.0558,121.5130",
        transitFromPrev: {
          mode: "Walk",
          line: "Alley cut-through via Guisui / Minsheng",
          exit: "Lane 64, Chongqing N. Rd",
          durationMin: 6,
          instruction: "Turn right onto Lane 72 or Minsheng W. Rd, cross Yanping N. Rd, and enter Lane 64 off Chongqing N. Rd.",
          distanceText: "420 m walk"
        },
        durationMin: 45,
        opensAt: "09:00",
        closesAt: "18:30",
        closedDays: [0],
        closedNote: "Closed on Sundays — substitute with ASW Tea House on Dihua St (迪化街一段34號2F) on Sundays.",
        badges: [
          { label: "Indoor • AC", type: "info" },
          { label: "Closed Sundays", type: "danger" }
        ],
        summary: "Step inside a 135-year-old working tea factory with traditional charcoal roasting pits (焙茶間) and taste authentic Wenshan Baozhong or Tieguanyin.",
        executionTips: [
          "Walk straight through the front shop to see the sunken charcoal roasting baskets in the back room.",
          "Their 2F modern tea bar (WangTea Lab) serves cold-brew nitrogen oolong if you prefer something chilled."
        ],
        costs: [
          { label: "Artisan tea tasting / cold-brew", ntd: 220, payment: "Card / Cash", category: "Food" }
        ],
        flashcards: [
          {
            id: "fc-3-taxi",
            category: "place",
            title: "Address: WangTea Roastery",
            tc: "有記名茶 — 台北市重慶北路二段64巷26號",
            pinyin: "Yǒujì Míngchá — Chóngqìng Běilù Èrduàn 64 Xiàng 26 Hào",
            english: "WangTea Roastery — Lane 64, Sec 2, Chongqing N. Rd.",
            context: "Show to driver or ask a local if you miss the lane entrance."
          },
          {
            id: "fc-3-oolong",
            category: "food",
            title: "Order Roasted Tieguanyin / Baozhong",
            tc: "請問可以點一杯文山包種茶或鐵觀音嗎？",
            pinyin: "Qǐngwèn kěyǐ diǎn yī bēi Wénshān Bāozhǒng chá huò Tiěguānyīn ma?",
            english: "Could I order a cup of Wenshan Baozhong or Tieguanyin tea?",
            expectedNtd: 220,
            context: "Ask for hot traditional brew or cold nitro oolong."
          }
        ],
        planB: {
          badge: "100% Indoor",
          name: "WangTea Roastery (Full Indoor Refuge)",
          tcName: "有記名茶（全室內製茶空間）",
          lat: 25.0558,
          lng: 121.5130,
          entryCoords: "25.0558,121.5130",
          summary: "Stay indoors for an unhurried tea session while watching the rain outside the historic courtyard. (If Sunday: go to ASW Tea House 2F on Dihua St instead.)",
          executionTips: [
            "Great spot to dry off and charge your phone before heading toward dinner."
          ]
        }
      },
      {
        id: "stop-4",
        number: 4,
        name: "Dadaocheng Wharf (Pier 5 Sunset)",
        tcName: "大稻埕碼頭（五號水門貨櫃市集）",
        addressTc: "台北市大同區民生西路底五號水門",
        lat: 25.0566,
        lng: 121.5071,
        entryCoords: "25.0566,121.5071",
        transitFromPrev: {
          mode: "Walk",
          line: "Minsheng West Rd west toward Tamsui River",
          exit: "Floodgate No. 5 (五號水門)",
          durationMin: 9,
          instruction: "Walk west down Minsheng W. Rd, cross Dihua St and Huanhe N. Rd at the pedestrian crossing straight through Floodgate No. 5.",
          distanceText: "680 m walk"
        },
        durationMin: 45,
        opensAt: "16:00",
        closesAt: "22:00",
        closedDays: [],
        openNote: "Container bars open at 16:00 Mon–Fri (12:00 Sat–Sun). Riverfront park itself is open 24/7.",
        badges: [
          { label: "Outdoor Sunset", type: "info" },
          { label: "Opens 16:00 Weekdays", type: "warning" }
        ],
        summary: "Golden hour along the Tamsui River: watch planes descend over the mountains with a craft Taiwanese beer or passionfruit tea from the pier containers.",
        executionTips: [
          "Do NOT eat a full meal here—keep it to 1 drink so you arrive hungry at Ningxia Night Market.",
          "Head up to the 2nd-floor container deck for unobstructed river views."
        ],
        costs: [
          { label: "Craft drink / fresh juice at pier", ntd: 160, payment: "Cash / LINE Pay", category: "Food" }
        ],
        flashcards: [
          {
            id: "fc-4-taxi",
            category: "place",
            title: "Address: Dadaocheng Pier 5",
            tc: "請載我到大稻埕碼頭五號水門",
            pinyin: "Qǐng zài wǒ dào Dàdàochéng Mǎtóu Wǔhào Shuǐmén",
            english: "Please take me to Dadaocheng Wharf, Floodgate No. 5.",
            context: "Taxi drop-off point right outside the floodgate."
          }
        ],
        planB: {
          badge: "Rainy Day Swap • Indoor",
          name: "Dadaocheng Visitor Center & Heritage Shophouses",
          tcName: "大稻埕遊客中心 & 迪化街復古室內展館",
          lat: 25.0551,
          lng: 121.5096,
          entryCoords: "25.0551,121.5096",
          transitFromPrev: {
            mode: "Walk",
            line: "Minsheng West Rd → Dihua St",
            exit: "No. 44 Dihua St Sec. 1",
            durationMin: 5,
            instruction: "Skip the exposed riverside pier. Walk back to Dihua St No. 44 under covered arcades to visit the restored 1920s Visitor Center.",
            distanceText: "360 m covered walk"
          },
          durationMin: 35,
          opensAt: "09:00",
          closesAt: "18:00",
          summary: "Replace the exposed riverside wharf with the beautifully restored 3-story heritage Visitor Center (free entry, vintage pharmacy & café rooms) + dry gallery browse.",
          executionTips: [
            "Free luggage lockers and clean restrooms inside.",
            "If arriving after 18:00, swap directly to a nearby covered coffee shop like OrigINN Space (南京西路247號)."
          ],
          costs: [
            { label: "Visitor Center entry", ntd: 0, payment: "Free", category: "Tickets" }
          ],
          flashcards: [
            {
              id: "fc-4b-taxi",
              category: "place",
              title: "Address: Dadaocheng Visitor Center",
              tc: "請載我到大稻埕遊客中心（迪化街一段44號）",
              pinyin: "Qǐng zài wǒ dào Dàdàochéng Yóukè Zhōngxīn (Díhuà Jiē 44 Hào)",
              english: "Please take me to Dadaocheng Visitor Center (44 Dihua St Sec. 1).",
              context: "Sheltered drop-off right in front of the heritage shophouse."
            }
          ]
        }
      },
      {
        id: "stop-5",
        number: 5,
        name: "Ningxia Night Market (4-Stand Curated Safari)",
        tcName: "寧夏夜市（精選四攤美食路線）",
        addressTc: "台北市大同區寧夏路（民生西路入口）",
        lat: 25.0564,
        lng: 121.5154,
        entryCoords: "25.0564,121.5154",
        transitFromPrev: {
          mode: "Walk",
          line: "Minsheng West Rd east",
          exit: "Ningxia Rd North Entrance",
          durationMin: 12,
          instruction: "Exit Floodgate No. 5 and walk straight east on Minsheng W. Rd for 12 mins until you hit the glowing Ningxia Night Market arch.",
          distanceText: "920 m straight walk"
        },
        durationMin: 75,
        opensAt: "17:30",
        closesAt: "23:30",
        closedDays: [],
        badges: [
          { label: "Cash Only (95%)", type: "danger" },
          { label: "Peak Queue > 19:15", type: "warning" }
        ],
        summary: "Taipei's most food-focused night market without carnival clutter. Follow these 4 vetted heritage stalls in order to eat well before queues explode.",
        executionTips: [
          "1) Crispy Salted Egg Yolk Taro Ball (劉芋仔) — go here FIRST before the line hits 30 mins.",
          "2) Braised Chicken Rice & Sesame Soup (方家雞肉飯) — sit at the stall's back tables.",
          "3) Crispy Oyster Omelette (圓環邊蚵仔煎) — indoor seating right at the market edge.",
          "4) Old-school Winter Melon Tea or Papaya Milk to finish."
        ],
        costs: [
          { label: "Crispy Taro Balls (2 pcs)", ntd: 60, payment: "Cash", category: "Food" },
          { label: "Chicken Rice + Tofu", ntd: 95, payment: "Cash", category: "Food" },
          { label: "Oyster Omelette", ntd: 90, payment: "Cash", category: "Food" },
          { label: "Papaya Milk / Winter Melon Tea", ntd: 70, payment: "Cash", category: "Food" }
        ],
        flashcards: [
          {
            id: "fc-5-taro",
            category: "food",
            title: "Order #1: Egg Yolk Crispy Taro Balls",
            tc: "我要兩顆「蛋黃芋餅」，謝謝",
            pinyin: "Wǒ yào liǎng kē \"Dànhuáng Yùbǐng\", xièxie",
            english: "I'd like two Egg Yolk Taro Balls, thank you. (Stand #091 Liu Yu Zai)",
            expectedNtd: 60,
            supportsModifiers: true,
            context: "Pay in cash as soon as they hand you the paper bag."
          },
          {
            id: "fc-5-chicken",
            category: "food",
            title: "Order #2: Shredded Chicken Rice + Braised Tofu",
            tc: "我要一碗雞肉飯、一份滷豆腐，內用",
            pinyin: "Wǒ yào yī wǎn Jīròufàn, yī fèn Lǔ Dòufu, nèiyòng",
            english: "One bowl of shredded chicken rice and one braised tofu, dine-in. (Fang Jia #060)",
            expectedNtd: 95,
            supportsModifiers: true,
            context: "Ask for '內用' (dine-in) and take a seat behind the cart."
          },
          {
            id: "fc-5-oyster",
            category: "food",
            title: "Order #3: Taiwanese Oyster Omelette",
            tc: "我要一份蚵仔煎，謝謝",
            pinyin: "Wǒ yào yī fèn É-á-jiān, xièxie",
            english: "One Oyster Omelette please, thank you.",
            expectedNtd: 90,
            supportsModifiers: true,
            context: "Classic crispy-edged Taipei style with sweet-savory pink sauce."
          },
          {
            id: "fc-5-drink",
            category: "food",
            title: "Order #4: Fresh Papaya Milk (Less Sugar/Ice)",
            tc: "我要一杯木瓜牛奶，微糖少冰",
            pinyin: "Wǒ yào yī bēi Mùguā Niúnǎi, wēitáng shǎobīng",
            english: "One fresh papaya milk, less sugar and less ice.",
            expectedNtd: 70,
            context: "Best balanced drink to cool down after savory snacks."
          }
        ],
        planB: {
          badge: "Rainy Day Swap • 100% Seated Indoor",
          name: "Shuanglian & Yuanshan Covered Legacy Diner Trail",
          tcName: "圓環三元號魯肉飯 + 雙連圓仔湯（全室內座位）",
          lat: 25.0537,
          lng: 121.5137,
          entryCoords: "25.0537,121.5137",
          transitFromPrev: {
            mode: "Walk",
            line: "Covered arcades to Chongqing N. Rd",
            exit: "No. 11, Sec. 2 Chongqing N. Rd",
            durationMin: 8,
            instruction: "Instead of walking the open-air Ningxia lane in the rain, duck under Minsheng W. Rd arcades straight to San Yuan Hao (三元號) & Shuanglian Tangyuan.",
            distanceText: "600 m mostly covered walk"
          },
          durationMin: 65,
          opensAt: "10:30",
          closesAt: "21:30",
          summary: "Enjoy legendary Taipei heritage street dishes completely indoors: San Yuan Hao (established 1920s, famous for Braised Pork Rice & Shark Fin style mushroom soup) followed by Shuanglian Tangyuan hot mochi dessert.",
          executionTips: [
            "San Yuan Hao (重慶北路二段11號) has bright indoor AC seating and fast turnover.",
            "After dinner, walk 5 mins under Minsheng W. Rd arcades to Shuanglian Tangyuan (民生西路136號) for warm sesame mochi."
          ],
          costs: [
            { label: "Braised Pork Rice + Soup (San Yuan Hao)", ntd: 140, payment: "Cash", category: "Food" },
            { label: "Hot Sesame Mochi (Shuanglian Tangyuan)", ntd: 115, payment: "Cash", category: "Food" }
          ],
          flashcards: [
            {
              id: "fc-5b-taxi",
              category: "place",
              title: "Address: San Yuan Hao Indoor Diner",
              tc: "請載我到「三元號」（重慶北路二段11號）",
              pinyin: "Qǐng zài wǒ dào Sānyuánhào (Chóngqìng Běilù Èrduàn 11 Hào)",
              english: "Please take me to San Yuan Hao (11 Sec. 2, Chongqing N. Rd).",
              context: "Covered legacy Taiwanese diner open rain or shine."
            },
            {
              id: "fc-5b-luroufan",
              category: "food",
              title: "Order: Braised Pork Rice + Fish Fin Style Soup",
              tc: "我要一碗小碗魯肉飯、一碗魚翅肉羹，內用",
              pinyin: "Wǒ yào yī wǎn xiǎo wǎn Lǔròufàn, yī wǎn Yúchì Ròugēng, nèiyòng",
              english: "One small braised pork rice and one thick pork & mushroom soup, dine-in.",
              expectedNtd: 140,
              supportsModifiers: true,
              context: "San Yuan Hao's iconic 100-year combo (contains no actual shark fin today, made with pork/bamboo/mushroom)."
            },
            {
              id: "fc-5b-mochi",
              category: "food",
              title: "Order: Hot Sesame Mochi (Shuanglian Tangyuan)",
              tc: "我要一份熱的「燒麻糬」（綜合口味），內用",
              pinyin: "Wǒ yào yī fèn rè de Shāo Máshǔ (zōnghé kǒuwèi), nèiyòng",
              english: "One serving of hot glutinous rice mochi (mixed peanut & black sesame), dine-in.",
              expectedNtd: 115,
              context: "Warm, comforting dessert inside Shuanglian Tangyuan (136 Minsheng W. Rd)."
            }
          ]
        }
      },
      {
        id: "stop-6",
        number: 6,
        name: "Departure • MRT Shuanglian (Exit 1)",
        tcName: "捷運雙連站 1號出口（紅線）",
        addressTc: "台北市大同區民生西路47號（捷運雙連站）",
        lat: 25.0578,
        lng: 121.5206,
        entryCoords: "25.0578,121.5206",
        transitFromPrev: {
          mode: "Walk",
          line: "Minsheng West Rd east",
          exit: "MRT Shuanglian Exit 1 (Red Line R12)",
          durationMin: 6,
          instruction: "Walk 6 mins east along Minsheng W. Rd straight to MRT Shuanglian Exit 1 (Red Line — direct to Taipei Main, Zhongshan, or Taipei 101).",
          distanceText: "500 m flat walk"
        },
        durationMin: 5,
        opensAt: "06:00",
        closesAt: "24:00",
        closedDays: [],
        badges: [
          { label: "Red Line Direct", type: "info" },
          { label: "Last train ~00:00", type: "neutral" }
        ],
        summary: "End of route on the Tamsui–Xinyi Red Line: 2 stops south to Taipei Main Station, 1 stop to Zhongshan, or direct to Taipei 101.",
        executionTips: [
          "Use Exit 1 (elevator & escalators available).",
          "If heading to Taipei Main Station, take the Southbound platform toward Xiangshan (象山)."
        ],
        costs: [
          { label: "MRT departure ride", ntd: 25, payment: "EasyCard", category: "Transit" }
        ],
        flashcards: [
          {
            id: "fc-6-taxi",
            category: "place",
            title: "Back to MRT Shuanglian",
            tc: "請載我到捷運雙連站 1號出口",
            pinyin: "Qǐng zài wǒ dào Jiéyùn Shuānglián Zhàn Yīhào Chūkǒu",
            english: "Please drop me at MRT Shuanglian Station, Exit 1.",
            context: "Useful if it rains heavily at the end of the evening."
          }
        ],
        planB: {
          badge: "Direct Arcade Access",
          name: "MRT Shuanglian (Exit 1 — Red Line)",
          tcName: "捷運雙連站 1號出口",
          lat: 25.0578,
          lng: 121.5206,
          entryCoords: "25.0578,121.5206",
          transitFromPrev: {
            mode: "Walk",
            line: "Minsheng West Rd covered arcades",
            exit: "Exit 1",
            durationMin: 3,
            instruction: "From Shuanglian Tangyuan (136 Minsheng W. Rd), it is just 3 mins under covered sidewalks to MRT Shuanglian Exit 1.",
            distanceText: "240 m covered walk"
          },
          summary: "Step straight out of the warm dessert shop and down into the Red Line MRT in 3 minutes.",
          executionTips: [
            "Elevator inside Exit 1 goes straight to the concourse."
          ]
        }
      }
    ]
  },

  jiufen: {
    id: "jiufen",
    title: "Misty Hills & Old Gold Trails",
    subtitle: "Jiufen, Shifen & Ruifang",
    zone: "Ruifang & Pingxi • New Taipei",
    recommendedStart: "09:00",
    idealWindowLabel: "Best started between 08:30 and 09:30 to catch the Pingxi train",
    durationLabel: "~8.0 hrs",
    walkingDistance: "4.6 km (Hills & stone stairs)",
    difficulty: "Moderate • Steep alleys in Jiufen",
    lastVerified: "November 2026",
    planBSummary: "Open-air waterfall trails and exposed viewpoints are swapped for Jinguashi Gold Museum's indoor mining halls, sheltered Shengping Theater, and covered teahouse verandas.",
    budgetTip: "Keep at least 200 NTD on your EasyCard for TRA trains and Bus 965, plus small bills for Shifen lanterns & Jiufen snacks.",
    curator: {
      name: "Marcus Chen",
      role: "Northeast Coast Transit Specialist",
      badge: "Field-Verified"
    },
    prepChecklist: [
      {
        id: "easycard-jiufen",
        title: "Top up EasyCard to 250+ NTD",
        detail: "Covers Taipei–Ruifang TRA local/express trains, Pingxi Branch Line, and the direct Bus 965 return to Taipei."
      },
      {
        id: "cash-jiufen",
        title: "Bring 1,000–1,500 NTD in small bills",
        detail: "Shifen lantern stalls, taro ball shops, and most Jiufen Old Street vendors are cash-only."
      },
      {
        id: "shoes-rain",
        title: "Wear grippy shoes & pack a light rain shell",
        detail: "Jiufen's stone steps get slick in mountain mist, and weather shifts quickly on the northeast coast."
      },
      {
        id: "bus965",
        title: "Check Bus 965 return window before 18:30",
        detail: "Queues build up after sunset; heading to the upper Old Street bus stop by 17:45 avoids a 40-minute wait."
      }
    ],
    essentialPhrases: [
      {
        id: "j-phrase-platform",
        category: "place",
        title: "Confirm Ruifang / Pingxi Platform",
        tc: "請問往瑞芳／平溪線的月台在哪裡？",
        pinyin: "Qǐngwèn wǎng Ruìfāng / Píngxī Xiàn de yuètái zài nǎlǐ?",
        english: "Excuse me, which platform goes to Ruifang / Pingxi Line?",
        context: "Show to station staff at Taipei Main Station or Ruifang Station."
      },
      {
        id: "j-phrase-bus965",
        category: "place",
        title: "Confirm Bus 965 back to Taipei",
        tc: "請問這班 965 公車有到台北北門／西門嗎？",
        pinyin: "Qǐngwèn zhè bān 965 gōngchē yǒu dào Táiběi Běimén / Xīmén ma?",
        english: "Does this Bus 965 go to Taipei Beimen / Ximen?",
        context: "Show the bus driver when boarding at Jiufen Old Street."
      },
      {
        id: "j-phrase-hotcold",
        category: "food",
        title: "Order Hot or Iced Taro Balls",
        tc: "我要一碗綜合芋圓（熱的／冰的），謝謝。",
        pinyin: "Wǒ yào yī wǎn zōnghé yùyuán (rè de / bīng de), xièxie.",
        english: "One bowl of mixed taro balls (hot / iced), please.",
        context: "Point to 熱的 (hot) or 冰的 (iced) at A-Gan-Yi Taro Balls."
      },
      {
        id: "j-phrase-not-sweet",
        category: "dietary",
        title: "Less Sweet / No Ice",
        tc: "微糖去冰，謝謝。",
        pinyin: "Wéitáng qùbīng, xièxie.",
        english: "Slightly sweet, no ice, thank you.",
        context: "Handy for herbal teas and cold drinks along Jishan Street."
      }
    ],
    stops: [
      {
        id: "j-stop-1",
        number: 1,
        name: "Taipei Main Station → TRA to Ruifang",
        tcName: "台北車站臺鐵 • 往瑞芳車站",
        addressTc: "台北市中正區北平西路3號 (臺鐵大廳東三門)",
        lat: 25.0478,
        lng: 121.5170,
        entryCoords: "25.0478,121.5170",
        transitFromPrev: {
          mode: "MRT",
          line: "Taipei Main Station (TRA East Hall)",
          exit: "East 3 Gate / TRA Concourse",
          durationMin: 10,
          instruction: "Tap your EasyCard at the TRA gates (Platform 4) for a northbound Local/Fast-Local train to Ruifang (40–48 min ride). Avoid Puyuma/Taroko Express unless holding a reserved seat.",
          distanceText: "35 km rail leg"
        },
        durationMin: 55,
        opensAt: "06:00",
        closesAt: "23:30",
        closedDays: [],
        badges: [
          { label: "EasyCard Valid", type: "success" },
          { label: "Check Platform 4", type: "info" }
        ],
        summary: "Board the morning TRA train from Taipei Main Station to Ruifang, the gateway to Pingxi's valley line and Jiufen's mountain ridge.",
        executionTips: [
          "Sit on the left side after Songshan for glimpses of Keelung River valley.",
          "At Ruifang Station, do not exit the paid zone—stay on Platform 3 to transfer directly to the Pingxi Line."
        ],
        costs: [
          { label: "TRA Train Taipei → Ruifang", ntd: 76, payment: "EasyCard", category: "Transit" },
          { label: "Station coffee & bottled water", ntd: 65, payment: "EasyCard", category: "Food" }
        ],
        flashcards: [
          {
            id: "j-fc-1-tra",
            category: "place",
            title: "Ask for next train to Ruifang",
            tc: "請問下一班往瑞芳的區間車是幾點、第幾月台？",
            pinyin: "Qǐngwèn xià yī bān wǎng Ruìfāng de qūjiānchē shì jǐ diǎn, dì jǐ yuètái?",
            english: "What time and which platform is the next local train to Ruifang?",
            context: "Show at the TRA information counter inside Taipei Main Station."
          }
        ],
        planB: {
          badge: "Direct Express Bus",
          name: "MRT Beimen → Bus 965 Express to Ruifang",
          tcName: "捷運北門站 • 965 快速公車",
          lat: 25.0496,
          lng: 121.5102,
          entryCoords: "25.0496,121.5102",
          summary: "If TRA trains are delayed or you prefer a guaranteed seat out of the rain, catch Bus 965 from MRT Beimen Exit 2 straight to Ruifang.",
          executionTips: [
            "Bus 965 departs every 15–20 mins and accepts EasyCard on boarding and alighting."
          ]
        }
      },
      {
        id: "j-stop-2",
        number: 2,
        name: "Shifen Old Street & Sky Lanterns",
        tcName: "十分老街 • 鐵道天燈",
        addressTc: "新北市平溪區十分街81號",
        lat: 25.0426,
        lng: 121.7764,
        entryCoords: "25.0426,121.7764",
        transitFromPrev: {
          mode: "MRT",
          line: "TRA Pingxi Branch Line (Ruifang → Shifen)",
          exit: "Platform 3",
          durationMin: 30,
          instruction: "Board the Pingxi Line diesel train at Ruifang Platform 3. Alight at Shifen Station and step straight onto the historic tracks.",
          distanceText: "11 km scenic valley rail"
        },
        durationMin: 75,
        opensAt: "09:00",
        closesAt: "19:00",
        closedDays: [],
        badges: [
          { label: "Cash Only Stalls", type: "warning" },
          { label: "Active Rail Track", type: "danger" }
        ],
        summary: "Write your wishes in brush ink on a traditional 4-color sky lantern and release it right from the active railway tracks, then grab stuffed chicken-wing rice.",
        executionTips: [
          "Always listen for the station whistle—trains pass slowly every ~60 minutes and everyone steps aside to the shopfronts.",
          "Most lantern shops take photos and slow-motion videos for free with your phone."
        ],
        costs: [
          { label: "TRA Pingxi Line (Ruifang → Shifen)", ntd: 20, payment: "EasyCard", category: "Transit" },
          { label: "4-Color Sky Lantern", ntd: 250, payment: "Cash", category: "Activity" },
          { label: "Boneless stuffed chicken wing + snack", ntd: 100, payment: "Cash", category: "Food" }
        ],
        flashcards: [
          {
            id: "j-fc-2-lantern",
            category: "place",
            title: "Order a 4-color sky lantern",
            tc: "我們想要一個四色天燈，謝謝。",
            pinyin: "Wǒmen xiǎng yào yīgè sìsè tiāndēng, xièxie.",
            english: "We would like a 4-color sky lantern, please.",
            context: "Show to any lantern vendor along Shifen Old Street.",
            expectedNtd: 250
          },
          {
            id: "j-fc-2-wing",
            category: "food",
            title: "Order Stuffed Chicken Wing Rice",
            tc: "請問雞翅包飯一份多少錢？我要一個（不辣）。",
            pinyin: "Qǐngwèn jīchì bāo fàn yī fèn duōshǎo qián? Wǒ yào yīgè (bù là).",
            english: "How much is one stuffed chicken wing rice? I'd like one (not spicy).",
            context: "Famous Shifen trackside street snack."
          }
        ],
        planB: {
          badge: "Covered Station Awning",
          name: "Shifen Covered Calligraphy & Snack Arcades",
          tcName: "十分老街屋簷區 • 室內紀念品店",
          lat: 25.0426,
          lng: 121.7764,
          entryCoords: "25.0426,121.7764",
          summary: "Lanterns still fly in light rain thanks to shopfront awnings! Paint your wishes under the covered eaves and step onto the tracks only for the 30-second launch.",
          executionTips: [
            "Skip the open suspension bridge if winds are strong; grab hot ginger tea at the corner café instead."
          ]
        }
      },
      {
        id: "j-stop-3",
        number: 3,
        name: "Shifen Waterfall Scenic Trail",
        tcName: "十分瀑布公園",
        addressTc: "新北市平溪區乾坑10號",
        lat: 25.0493,
        lng: 121.7875,
        entryCoords: "25.0493,121.7875",
        transitFromPrev: {
          mode: "Walk",
          line: "Riverside boardwalk via Siguangtan Bridge",
          exit: "Visitor Trailhead",
          durationMin: 18,
          instruction: "Walk east from Shifen Old Street across the Siguangtan Suspension Bridge and follow the paved riverside boardwalk to the waterfall gate.",
          distanceText: "1.3 km riverside walk"
        },
        durationMin: 60,
        opensAt: "09:00",
        closesAt: "16:30",
        closedDays: [],
        badges: [
          { label: "Free Entry", type: "success" },
          { label: "Last Entry 16:30", type: "warning" }
        ],
        summary: "Taiwan's widest curtain waterfall (40 m wide), framed by terraced wooden viewing decks and lush subtropical gorge.",
        executionTips: [
          "The lower deck gives the clearest wide-angle frame without mist hitting your lens.",
          "Leave by 12:45 to catch the afternoon connection back toward Ruifang and Jiufen."
        ],
        costs: [
          { label: "Waterfall Park Admission", ntd: 0, payment: "Cash", category: "Activity" },
          { label: "Iced winter melon tea at trail kiosk", ntd: 60, payment: "Cash", category: "Food" }
        ],
        flashcards: [
          {
            id: "j-fc-3-way",
            category: "place",
            title: "Ask direction to Shifen Waterfall",
            tc: "請問往十分瀑布怎麼走？",
            pinyin: "Qǐngwèn wǎng Shífēn Pùbù zěnme zǒu?",
            english: "Excuse me, which way to Shifen Waterfall?",
            context: "Show if you miss the turnoff after the suspension bridge."
          }
        ],
        planB: {
          badge: "Indoor Heritage Museum",
          name: "Jinguashi Gold Museum (Indoor Galleries)",
          tcName: "新北市立黃金博物館",
          lat: 25.1072,
          lng: 121.8586,
          entryCoords: "25.1072,121.8586",
          transitFromPrev: {
            mode: "MRT",
            line: "TRA Pingxi Line to Ruifang + Bus 788/1062",
            exit: "Gold Museum Stop",
            durationMin: 45,
            instruction: "Skip the wet waterfall trail and head straight from Shifen back to Ruifang, then take Bus 788 or 1062 up to the indoor Gold Museum.",
            distanceText: "18 km train + mountain bus"
          },
          summary: "Stay completely dry inside the Gold Building (touch the 220 kg pure gold bar) and explore the historic Japanese Crown Prince Chalet.",
          executionTips: [
            "Closed on the first Monday of each month; check the calendar before heading up."
          ],
          costs: [
            { label: "Gold Museum Admission", ntd: 80, payment: "EasyCard", category: "Activity" }
          ]
        }
      },
      {
        id: "j-stop-4",
        number: 4,
        name: "Jiufen Old Street & A-Mei Teahouse",
        tcName: "九份老街 • 阿妹茶樓",
        addressTc: "新北市瑞芳區市下巷20號",
        lat: 25.1088,
        lng: 121.8442,
        entryCoords: "25.1088,121.8442",
        transitFromPrev: {
          mode: "MRT",
          line: "Pingxi Line to Ruifang + Bus 788 / 965",
          exit: "Jiufen Old Street Stop",
          durationMin: 55,
          instruction: "Take the Pingxi Line back to Ruifang, exit to the main road bus stop (opposite Police Station), and ride Bus 788, 965, or 1062 uphill for 15 mins to Jiufen Old Street.",
          distanceText: "17 km train + mountain bus"
        },
        durationMin: 110,
        opensAt: "10:00",
        closesAt: "21:00",
        closedDays: [],
        badges: [
          { label: "Mountain Ocean View", type: "info" },
          { label: "Teahouse Terrace", type: "neutral" }
        ],
        summary: "Descend Shuqi Road's iconic red-lantern staircase to sip high-mountain Oolong tea overlooking Keelung Harbor as the afternoon mist rolls in.",
        executionTips: [
          "Request an outdoor terrace table at A-Mei or Skyline Teahouse for the classic harbor panorama.",
          "Staff demonstrate the traditional gongfu tea pour on your first pot."
        ],
        costs: [
          { label: "Pingxi Line + Ruifang→Jiufen Bus", ntd: 45, payment: "EasyCard", category: "Transit" },
          { label: "Traditional Oolong Tea Set & Pastries", ntd: 600, payment: "Cash", category: "Food" }
        ],
        flashcards: [
          {
            id: "j-fc-4-tea",
            category: "food",
            title: "Request terrace table & Oolong tea set",
            tc: "請問有戶外看海景的座位嗎？我們想點高山烏龍茶套餐。",
            pinyin: "Qǐngwèn yǒu hùwài kàn hǎijǐng de zuòwèi ma? Wǒmen xiǎng diǎn gāoshān Wūlóngchá tàocān.",
            english: "Do you have an outdoor ocean-view table? We'd like the high-mountain Oolong tea set.",
            context: "Show at A-Mei Teahouse or Skyline Teahouse entrance.",
            expectedNtd: 600
          }
        ],
        planB: {
          badge: "Sheltered Balcony",
          name: "A-Mei Teahouse Covered Indoor Veranda",
          tcName: "阿妹茶樓室內觀景窗區",
          lat: 25.1088,
          lng: 121.8442,
          entryCoords: "25.1088,121.8442",
          summary: "Rain makes Jiufen's mist even more atmospheric—sit inside the wooden veranda right beside the open window frames with hot charcoal-warmed tea.",
          executionTips: [
            "Ask for 室內窗邊座位 (indoor window seat) to stay dry while keeping the lantern view."
          ]
        }
      },
      {
        id: "j-stop-5",
        number: 5,
        name: "A-Gan-Yi Taro Balls & Jishan St Dusk",
        tcName: "阿柑姨芋圓 • 基山街夜景",
        addressTc: "新北市瑞芳區豎崎路5號",
        lat: 25.1095,
        lng: 121.8453,
        entryCoords: "25.1095,121.8453",
        transitFromPrev: {
          mode: "Walk",
          line: "Shuqi Rd stone steps (uphill)",
          exit: "Top of Shuqi Rd",
          durationMin: 8,
          instruction: "Climb Shuqi Road past the elementary school steps to A-Gan-Yi Taro Balls, then wander into covered Jishan Street as the red lanterns light up.",
          distanceText: "300 m stone stairs"
        },
        durationMin: 70,
        opensAt: "09:00",
        closesAt: "20:00",
        closedDays: [],
        badges: [
          { label: "Cash Only", type: "warning" },
          { label: "Lantern Golden Hour", type: "danger" }
        ],
        summary: "Eat chewy handmade sweet-potato and taro balls at Jiufen's highest dining room, then sample peanut ice cream rolls and braised pork rice along Jishan Street.",
        executionTips: [
          "Walk through the narrow kitchen corridor of A-Gan-Yi to reach the hidden rear window room overlooking the bay.",
          "Grab a peanut-cilantro ice cream roll (花生捲冰淇淋) on Jishan Street—say 不要香菜 if you dislike coriander."
        ],
        costs: [
          { label: "A-Gan-Yi Taro Balls bowl", ntd: 55, payment: "Cash", category: "Food" },
          { label: "Peanut ice cream roll & herbal rice cake", ntd: 100, payment: "Cash", category: "Food" },
          { label: "Early dinner (noodles / braised pork)", ntd: 280, payment: "Cash", category: "Food" }
        ],
        flashcards: [
          {
            id: "j-fc-5-peanut",
            category: "dietary",
            title: "Peanut Ice Cream Roll (No Coriander)",
            tc: "我要一個花生捲冰淇淋，不要加香菜，謝謝。",
            pinyin: "Wǒ yào yīgè huāshēngjuǎn bīngqílín, bùyào jiā xiāngcài, xièxie.",
            english: "One peanut ice cream roll, no coriander please.",
            context: "Show at Jishan Street stalls if you want to skip the fresh cilantro.",
            expectedNtd: 50
          }
        ],
        planB: {
          badge: "Covered Arcade & Cinema",
          name: "Shengping Theater & Covered Jishan St",
          tcName: "昇平戲院 • 基山街遮雨棚",
          lat: 25.1086,
          lng: 121.8439,
          entryCoords: "25.1086,121.8439",
          summary: "Jishan Street is 90% roofed by corrugated awnings; pair your taro ball stop with a dry 20-minute visit inside historic Shengping Theater (1916).",
          executionTips: [
            "Shengping Theater has free entry and clean indoor restrooms."
          ]
        }
      },
      {
        id: "j-stop-6",
        number: 6,
        name: "Bus 965 Express Direct to Taipei",
        tcName: "九份老街站 • 965 快速公車回台北",
        addressTc: "新北市瑞芳區汽車路 (九份老街公車站)",
        lat: 25.1099,
        lng: 121.8435,
        entryCoords: "25.1099,121.8435",
        transitFromPrev: {
          mode: "Walk",
          line: "Jishan St exit to Qiche Rd Bus Stop",
          exit: "7-Eleven Corner",
          durationMin: 5,
          instruction: "Exit Jishan Street at the 7-Eleven archway and walk 80 m uphill to the 'Jiufen Old Street' bus shelter for Bus 965 toward Taipei (Banqiao/Ximen/Beimen).",
          distanceText: "250 m walk"
        },
        durationMin: 75,
        opensAt: "06:00",
        closesAt: "21:30",
        closedDays: [],
        badges: [
          { label: "EasyCard On & Off", type: "success" },
          { label: "Direct Highway Bus", type: "info" }
        ],
        summary: "Skip the Ruifang train transfer on the way home—board Bus 965 directly to MRT Beimen or MRT Ximen in ~70 minutes.",
        executionTips: [
          "Tap your EasyCard both when boarding AND when getting off.",
          "If the queue at Jiufen Old Street is >25 people, walk 3 minutes uphill to 'Jiufen Police Station' stop where empty seats are easier."
        ],
        costs: [
          { label: "Bus 965 Jiufen → Taipei (Beimen/Ximen)", ntd: 90, payment: "EasyCard", category: "Transit" },
          { label: "MRT connection back to hotel", ntd: 25, payment: "EasyCard", category: "Transit" },
          { label: "7-Eleven drink & evening snack", ntd: 84, payment: "EasyCard", category: "Food" }
        ],
        flashcards: [
          {
            id: "j-fc-6-taxi",
            category: "place",
            title: "Shared Taxi / Uber Fallback to Taipei",
            tc: "請問到台北捷運忠孝復興站（或西門站）車資多少？",
            pinyin: "Qǐngwèn dào Táiběi Jiéyùn Zhōngxiào Fùxīng Zhàn (huò Xīmén Zhàn) chēzī duōshǎo?",
            english: "How much is a ride to Taipei MRT Zhongxiao Fuxing (or Ximen) Station?",
            context: "Fixed-rate yellow taxis wait near the 7-Eleven if you miss the last bus."
          }
        ]
      }
    ]
  },

  huashan: {
    id: "huashan",
    title: "Creative Hubs & Sunset Heights",
    subtitle: "Huashan 1914 & Xiangshan",
    zone: "Zhongzheng & Xinyi • Taipei",
    recommendedStart: "14:00",
    idealWindowLabel: "Best started at 14:00 to hit Xiangshan 45 mins before sunset",
    durationLabel: "~5.0 hrs",
    walkingDistance: "4.1 km (Flat + 20-min stair climb)",
    difficulty: "Moderate • ~600 stone steps at Xiangshan",
    lastVerified: "November 2026",
    planBSummary: "The steep outdoor Elephant Mountain stairs are swapped for Taipei 101 / Breeze Nan Shan's indoor sky deck and covered Huashan warehouse galleries.",
    budgetTip: "EasyCard covers all MRT legs; bring 800–1,000 NTD cash for specialty coffee and Tonghua Night Market stalls.",
    curator: {
      name: "Leo Hsu",
      role: "Taipei Design & Coffee Curator",
      badge: "Field-Verified"
    },
    prepChecklist: [
      {
        id: "sunset-check",
        title: "Check today's Taipei sunset time",
        detail: "Aim to start the Xiangshan stairs 45 minutes before sunset (around 17:15 in winter, 18:30 in summer) for the best blue-hour 101 skyline."
      },
      {
        id: "water-huashan",
        title: "Carry 500 ml water + light towel",
        detail: "The 20-minute Xiangshan climb is humid year-round with steep stone steps."
      },
      {
        id: "easycard-huashan",
        title: "Top up EasyCard (~100 NTD)",
        detail: "Covers MRT Zhongxiao Xinsheng, the Blue→Red transfer to Xiangshan, and the return ride."
      },
      {
        id: "cash-huashan",
        title: "Bring 600–800 NTD in cash",
        detail: "Huashan shops and cafes accept cards, while Tonghua Night Market dinner stalls prefer cash."
      }
    ],
    essentialPhrases: [
      {
        id: "h-phrase-pourover",
        category: "food",
        title: "Ask for Taiwanese Single-Origin Pour-Over",
        tc: "請問今天有台灣產區的手沖咖啡嗎？（阿里山或日月潭）",
        pinyin: "Qǐngwèn jīntiān yǒu Táiwān chǎnqū de shǒuchōng kāfēi ma? (Ālǐshān huò Rìyuètán)",
        english: "Do you have Taiwanese single-origin pour-over coffee today (Alishan or Sun Moon Lake)?",
        context: "Show to your barista at Simple Kaffa or nearby specialty roasters."
      },
      {
        id: "h-phrase-trail",
        category: "place",
        title: "Direction to Xiangshan Trailhead",
        tc: "請問象山登山口怎麼走？",
        pinyin: "Qǐngwèn Xiàngshān dēngshānkǒu zěnme zǒu?",
        english: "Excuse me, which way to the Elephant Mountain trailhead?",
        context: "Show near MRT Xiangshan Exit 2 if you want to confirm the park path."
      },
      {
        id: "h-phrase-photo",
        category: "place",
        title: "Ask someone to take a skyline photo",
        tc: "不好意思，可以幫我們跟 101 拍張照嗎？",
        pinyin: "Bùhǎoyìsi, kěyǐ bāng wǒmen gēn 101 pāi zhāng zhào ma?",
        english: "Excuse me, could you help take a photo of us with Taipei 101?",
        context: "Friendly phrasing for fellow hikers at the Six Boulders platform."
      },
      {
        id: "h-phrase-notspicy",
        category: "dietary",
        title: "No Chili / Mild",
        tc: "不要辣，謝謝。",
        pinyin: "Bùyào là, xièxie.",
        english: "Not spicy, thank you.",
        context: "Useful at Tonghua (Linjiang) Night Market food stalls."
      }
    ],
    stops: [
      {
        id: "h-stop-1",
        number: 1,
        name: "Huashan 1914 Creative Park",
        tcName: "華山1914文化創意產業園區",
        addressTc: "台北市中正區八德路一段1號",
        lat: 25.0441,
        lng: 121.5294,
        entryCoords: "25.0441,121.5294",
        transitFromPrev: {
          mode: "MRT",
          line: "MRT Blue/Orange Line (Zhongxiao Xinsheng)",
          exit: "Exit 1 (忠孝新生站 1號出口)",
          durationMin: 4,
          instruction: "Exit MRT Zhongxiao Xinsheng via Exit 1 and walk straight west along Zhongxiao East Rd for 3 minutes to the ivy-covered brick arches of Huashan.",
          distanceText: "300 m walk from Exit 1"
        },
        durationMin: 60,
        opensAt: "09:30",
        closesAt: "21:00",
        closedDays: [],
        badges: [
          { label: "Free Park Entry", type: "success" },
          { label: "Card & Cash", type: "neutral" }
        ],
        summary: "Explore a 1914 Japanese-era sake winery turned Taipei's flagship creative hub—indie design boutiques, stationery studios, and pop-up art exhibitions.",
        executionTips: [
          "Browse 'Wooderful Life' and the red-brick courtyard shops on the west side.",
          "Restrooms are clean and free inside the main brick arcade near the cinema."
        ],
        costs: [
          { label: "MRT arrival to Zhongxiao Xinsheng", ntd: 25, payment: "EasyCard", category: "Transit" },
          { label: "Indie design souvenir / exhibition", ntd: 150, payment: "Card", category: "Activity" }
        ],
        flashcards: [
          {
            id: "h-fc-1-taxi",
            category: "place",
            title: "Taxi to Huashan 1914",
            tc: "請載我到華山1914文創園區（八德路入口）",
            pinyin: "Qǐng zài wǒ dào Huáshān 1914 Wénchuàng Yuánqū",
            english: "Please take me to Huashan 1914 Creative Park.",
            context: "Show to driver if arriving directly by taxi."
          }
        ],
        planB: {
          badge: "100% Indoor Warehouses",
          name: "Huashan Covered Brick Galleries & SPOT Cinema",
          tcName: "華山紅磚六合院 & 光點華山",
          lat: 25.0441,
          lng: 121.5294,
          entryCoords: "25.0441,121.5294",
          summary: "All major design stores, bookstores, and exhibition halls at Huashan are housed inside interconnected brick warehouses—ideal for rainy afternoons.",
          executionTips: [
            "Grab an indie film or browse the covered 'Futureward' design market."
          ]
        }
      },
      {
        id: "h-stop-2",
        number: 2,
        name: "Simple Kaffa Flagship (Taiwanese Pour-Over)",
        tcName: "興波咖啡旗艦店",
        addressTc: "台北市中正區忠孝東路二段27號",
        lat: 25.0440,
        lng: 121.5276,
        entryCoords: "25.0440,121.5276",
        transitFromPrev: {
          mode: "Walk",
          line: "Zhongxiao East Rd Sec. 2",
          exit: "2-min west walk",
          durationMin: 3,
          instruction: "Step out of Huashan's front lawn onto Zhongxiao East Rd and walk 180 m west to No. 27.",
          distanceText: "180 m flat walk"
        },
        durationMin: 55,
        opensAt: "10:00",
        closesAt: "17:00",
        closedDays: [],
        badges: [
          { label: "World Barista Champ", type: "info" },
          { label: "Closes 17:00", type: "warning" }
        ],
        summary: "Founded by World Barista Champion Berg Wu—taste rare Taiwanese Alishan geisha or washed pour-over alongside their signature wrinkled honey cake.",
        executionTips: [
          "If the dine-in queue exceeds 20 minutes, order takeaway at the side counter and enjoy it under the Huashan trees.",
          "Try the '1+1' espresso + milk flight if you prefer espresso."
        ],
        costs: [
          { label: "Taiwanese pour-over coffee + pastry", ntd: 320, payment: "Card", category: "Food" }
        ],
        flashcards: [
          {
            id: "h-fc-2-coffee",
            category: "food",
            title: "Order Alishan Pour-Over & Honey Cake",
            tc: "我要一杯阿里山手沖咖啡，加一份皺皺蜂蜜蛋糕，謝謝。",
            pinyin: "Wǒ yào yī bēi Ālǐshān shǒuchōng kāfēi, jiā yī fèn zhòuzhòu fēngmì dàngāo, xièxie.",
            english: "One Alishan pour-over coffee and one wrinkled honey cake, please.",
            context: "Show at the counter if the menu is crowded.",
            expectedNtd: 320
          }
        ]
      },
      {
        id: "h-stop-3",
        number: 3,
        name: "MRT Xiangshan (Exit 2) & Trailhead",
        tcName: "捷運象山站 2號出口 • 登山口",
        addressTc: "台北市信義區信義路五段150巷22弄",
        lat: 25.0327,
        lng: 121.5707,
        entryCoords: "25.0327,121.5707",
        transitFromPrev: {
          mode: "MRT",
          line: "Blue Line → Red Line (transfer at Taipei Main or Dongmen)",
          exit: "MRT Xiangshan Exit 2",
          durationMin: 28,
          instruction: "Walk back to MRT Zhongxiao Xinsheng, ride Orange Line 1 stop to Dongmen, then transfer to the Red Line eastbound to the terminus: Xiangshan (Exit 2).",
          distanceText: "6.5 km MRT ride"
        },
        durationMin: 15,
        opensAt: "00:00",
        closesAt: "23:59",
        closedDays: [],
        badges: [
          { label: "Restrooms @ Exit 2", type: "info" },
          { label: "Stock Water Here", type: "neutral" }
        ],
        summary: "Walk along leafy Xiangshan Park from Exit 2 to the Lingyun Temple trailhead—grab cold water and use the MRT restrooms before climbing.",
        executionTips: [
          "Follow the paved park path straight south; turn left up the stone steps at the red 'Xiangshan Trail' archway."
        ],
        costs: [
          { label: "MRT Zhongxiao Xinsheng → Xiangshan", ntd: 25, payment: "EasyCard", category: "Transit" },
          { label: "Cold water / electrolyte drink", ntd: 35, payment: "EasyCard", category: "Food" }
        ],
        flashcards: [
          {
            id: "h-fc-3-taxi",
            category: "place",
            title: "Drop-off at Lingyun Temple Trailhead",
            tc: "請載我到象山靈雲宮登山口",
            pinyin: "Qǐng zài wǒ dào Xiàngshān Língyúngōng dēngshānkǒu",
            english: "Please drop me at the Xiangshan Lingyun Temple trailhead.",
            context: "Saves a 10-minute flat walk from the MRT if you're cutting it close to sunset."
          }
        ]
      },
      {
        id: "h-stop-4",
        number: 4,
        name: "Xiangshan Six Boulders Sunset Overlook",
        tcName: "象山六巨石觀景台",
        addressTc: "台北市信義區象山步道 (攝影平台)",
        lat: 25.0273,
        lng: 121.5758,
        entryCoords: "25.0273,121.5758",
        transitFromPrev: {
          mode: "Walk",
          line: "Xiangshan Stone Steps Trail",
          exit: "Six Boulders Platform",
          durationMin: 22,
          instruction: "Climb the illuminated stone staircase for 15–22 mins. At the fork near the top, keep right toward the wooden Photography Platform & Six Boulders.",
          distanceText: "750 m uphill climb"
        },
        durationMin: 65,
        opensAt: "05:00",
        closesAt: "22:00",
        closedDays: [],
        badges: [
          { label: "Golden Hour Window", type: "danger" },
          { label: "600 Stone Steps", type: "warning" }
        ],
        summary: "Watch Taipei 101 and the Xinyi skyline shift from amber sunset to neon blue hour from the iconic granite boulders.",
        executionTips: [
          "If the Six Boulders are crowded, climb 3 minutes higher to the 'Skyline Platform' (超然亭) for an unobstructed view with fewer people.",
          "The trail is lit after dark, making the descent safe and quick."
        ],
        costs: [
          { label: "Trail & Viewpoint Access", ntd: 0, payment: "Cash", category: "Activity" }
        ],
        flashcards: [
          {
            id: "h-fc-4-view",
            category: "place",
            title: "Ask for the Photography Platform",
            tc: "請問往六巨石／攝影平台還有多久？",
            pinyin: "Qǐngwèn wǎng Liùjùshí / shèyǐng píngtái hái yǒu duōjiǔ?",
            english: "How much further to the Six Boulders / photography platform?",
            context: "Show to hikers coming down if you want a progress check."
          }
        ],
        planB: {
          badge: "Indoor Sky Deck",
          name: "Taipei 101 / Xinyi Indoor Skyline Lounge",
          tcName: "台北101觀景台 / 信義高空室內景觀區",
          lat: 25.0339,
          lng: 121.5645,
          entryCoords: "25.0339,121.5645",
          transitFromPrev: {
            mode: "MRT",
            line: "MRT Red Line 1 stop (Xiangshan → Taipei 101)",
            exit: "Exit 4",
            durationMin: 8,
            instruction: "Avoid slippery mountain stairs in heavy rain: ride the Red Line 1 stop back to Taipei 101 / World Trade Center Exit 4.",
            distanceText: "1.1 km MRT ride"
          },
          summary: "Stay completely dry while taking in the rainy city lights from inside Taipei 101 Observatory (89F) or an indoor sky-lounge in Breeze Nan Shan.",
          executionTips: [
            "Check visibility screens at the 5F ticket counter before buying an observatory ticket in thick fog."
          ],
          costs: [
            { label: "Taipei 101 Observatory Ticket (optional)", ntd: 600, payment: "Card", category: "Activity" }
          ]
        }
      },
      {
        id: "h-stop-5",
        number: 5,
        name: "Tonghua (Linjiang) Night Market Finish",
        tcName: "臨江街觀光夜市 (通化夜市)",
        addressTc: "台北市大安區臨江街40巷",
        lat: 25.0303,
        lng: 121.5540,
        entryCoords: "25.0303,121.5540",
        transitFromPrev: {
          mode: "MRT",
          line: "MRT Red Line (Xiangshan → Xinyi Anhe)",
          exit: "Exit 3 / 4",
          durationMin: 15,
          instruction: "Descend Xiangshan back to the MRT (12 mins), ride the Red Line 2 stops west to Xinyi Anhe (Exit 3), and walk 5 mins south on Tonghua St.",
          distanceText: "2.2 km MRT + walk"
        },
        durationMin: 75,
        opensAt: "18:00",
        closesAt: "23:45",
        closedDays: [],
        badges: [
          { label: "Michelin Bib Gourmand", type: "success" },
          { label: "Cash Preferred", type: "warning" }
        ],
        summary: "Reward your climb at a local favorite night market—hot/iced osmanthus tangyuan dumplings, pepper buns, and sweet potato balls.",
        executionTips: [
          "Don't miss Yu Pin Yuan Iced & Hot Tangyuan (御品元冰火湯圓) at No. 31, Lane 50—hot sesame dumplings over shaved osmanthus ice.",
          "Easy return via MRT Xinyi Anhe on the Red Line."
        ],
        costs: [
          { label: "MRT Xiangshan → Xinyi Anhe", ntd: 20, payment: "EasyCard", category: "Transit" },
          { label: "Night market dinner, tangyuan & craft drink", ntd: 525, payment: "Cash", category: "Food" }
        ],
        flashcards: [
          {
            id: "h-fc-5-tangyuan",
            category: "food",
            title: "Order Iced & Hot Osmanthus Tangyuan",
            tc: "我要一碗桂花綜合湯圓（冰火），謝謝。",
            pinyin: "Wǒ yào yī wǎn guìhuā zōnghé tāngyuán (bīnghuǒ), xièxie.",
            english: "One bowl of osmanthus mixed tangyuan (hot dumplings on ice), please.",
            context: "Show at Yu Pin Yuan (御品元) in Linjiang Night Market.",
            expectedNtd: 90
          },
          {
            id: "h-fc-5-taxi",
            category: "place",
            title: "Back to MRT Xinyi Anhe",
            tc: "請載我到捷運信義安和站 3號出口",
            pinyin: "Qǐng zài wǒ dào Jiéyùn Xìnyì Ānhé Zhàn Sānhào Chūkǒu",
            english: "Please drop me at MRT Xinyi Anhe Station, Exit 3.",
            context: "Quick fallback if tired after dinner."
          }
        ]
      }
    ]
  }
};

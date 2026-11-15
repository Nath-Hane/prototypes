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
  }
};

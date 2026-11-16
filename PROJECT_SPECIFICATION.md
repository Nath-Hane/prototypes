# Taiwanderer — Spécifications Stratégiques & Document de Cadrage

Ce document formalise les décisions de cadrage stratégique, l'analyse critique de marché et les spécifications fonctionnelles du projet entrepreneurial **Taiwanderer**.

---

## 1. Vision et Problématique

### 1.1 Constat & Opportunité
Les voyageurs indépendants visitant Taïwan (en particulier pour de courts séjours) font face à une **fatigue informationnelle majeure** (*multi-source fatigue*) :
- Dispersion des informations entre blogs de voyage, Google Maps, applications de transport locales (YouBike, MRT, TRA) et outils de traduction.
- Difficulté d'exécution sur le terrain liée à la barrière linguistique (mandarin traditionnel, chauffeurs de taxi et stands de street-food ne parlant pas anglais).
- Imprévus logistiques non anticipés (horaires d'affluence, météo pluvieuse, fermetures hebdomadaires).

### 1.2 La Solution : Taiwanderer
Une plateforme web mobile-first proposant des **programmes d'activités thématiques clé en main** à la demi-journée ou journée, focalisés sur **l'exécution sans friction sur le terrain**.

---

## 2. Cadrage Stratégique

| Axe | Décision validée | Justification |
| :--- | :--- | :--- |
| **Cible prioritaire (*Beachhead*)** | Voyageurs internationaux court séjour (3 à 10 jours) | Contrainte de temps élevée, fort besoin d'efficacité et propension à valoriser un gain de temps immédiat. |
| **Langue** | 100% Anglais (*English-first*) | Marché adressable mondial (Asie du Sud-Est, Occident, Corée, Japon anglophones). |
| **Périmètre géographique** | Grand Taipei (Taipei + New Taipei) | 80%+ des flux touristiques courts, réseau de transport (MRT) excellent, terrain idéal pour un MVP. |
| **Angle d'attaque** | Parcours thématiques | Segmentation plus lisible et attractive qu'un simple découpage par quartier. |
| **Format initial (MVP)** | Site Web / Web App responsive (PWA) | Zéro friction d'installation sur smartphone, mise à jour immédiate des contenus. |
| **Vision Long Terme** | **Marketplace d'itinéraires créateurs / guides avec commission (*Take-Rate*)** | Modèle scalable type plateforme à deux versants (*two-sided marketplace*), transition progressive de l'édition directe vers l'intermédiation. |
| **Acquisition initiale** | Réseaux sociaux (TikTok, Instagram Reels, Shorts) | Contenu vidéo court illustrant les frictions réelles sur place vs la fluidité du programme. |
| **Livrables académiques** | 1. Dossier business stratégique (BMC, personas, benchmark)<br>2. Prototype Web App interactif (2-3 programmes complets) | Double démonstration de rigueur stratégique et de faisabilité opérationnelle. |

---

## 3. Anatomie d'un Programme MVP (Spécifications Fonctionnelles)

Chaque fiche de programme intègre les briques interactives suivantes pour supprimer le besoin de consulter d'autres applications :

1. **Timeline interactive minute-par-minute :**
   - Horaires conseillés de passage et durée recommandée par étape.
   - Temps de trajet réalistes tenant compte des modes de transport (MRT, bus, marche).
2. **Cartes de pointage en Mandarin traditionnel (*Flashcards de terrain*) :**
   - Nom officiel du lieu et adresse en caractères traditionnels taïwanais (繁體中文).
   - Transcription phonétique (Pinyin) et audio si possible.
   - Phrases d'intention prêtes à l'emploi (ex: *"Veuillez m'emmener à cette adresse"*, *"Sans coriandre s'il vous plaît"*, *"Qu'avez-vous de plus populaire ?"*).
3. **Intégration cartographique 1-clic :**
   - Liens directs vers Google Maps / Apple Maps configurés avec les coordonnées exactes de l'entrée du lieu.
4. **Budget indicatif détaillé par étape :**
   - Estimations chiffrées en Nouveau Dollar Taïwanais (NTD) couvrant transports, tickets et restauration.

---

## 4. Analyse Critique & Anticipation des Risques (Jury & Sparring-Partner)

| Risque / Angle Mort | Impact | Stratégie de Défense & Atténuation |
| :--- | :--- | :--- |
| **Faible valeur vie client (*LTV One-Shot*)** | Le touriste ne vient généralement qu'une fois ; coût d'acquisition (CAC) difficile à amortir. | Contenu viral organique (faible CAC), incitation au parrainage direct entre voyageurs, et futurs partenariats B2B2C (hôtels, loueurs Wi-Fi/eSIM). |
| **Concurrence des IA génératives gratuites** | ChatGPT/Claude génèrent des itinéraires instantanés gratuitement. | Les LLMs manquent de fiabilité logistique fine (fermetures, queues, escaliers MRT) et n'offrent pas d'outils interactifs de terrain (cartes de pointage mandarin grand format, liens dynamiques). |
| **Obsolescence rapide du terrain** | Boutiques et stands de street-food ferment ou changent d'horaires. | Focalisation stricte sur 3 programmes phares éprouvés et d'institutions locales stables pour le lancement. |
| **Passage en Marketplace : Problème de l'œuf et la poule (*Cold Start*)** | Guides réticents sans trafic ; touristes absents sans offre pléthorique. | Approche *Pipeline to Marketplace* : débuter en tant qu'éditeur (création interne de 3 à 5 programmes) pour générer l'audience avant d'ouvrir la plateforme à des tiers. |
| **Passage en Marketplace : Risque légal à Taïwan (*Tourism Administration*)** | Le guidage touristique physique à Taïwan requiert une licence stricte du MOTC (*Ministry of Transportation and Communications*). | La plateforme se cantonne juridiquement à l'**édition et à la vente d'itinéraires numériques auto-guidés** (propriété intellectuelle), sans se substituer à une agence de voyages ou un guidage physique. |
| **Désintermédiation & Baisse de Qualité (UGC)** | Contournement de la commission (LINE/IG) et disparité de qualité des guides tiers. | Template de saisie obligatoire et standardisé (validation éditoriale obligatoire avant mise en ligne). |

---

## 5. Trajectoire d'Évolution du Modèle (Roadmap en 3 Phases)

1. **Phase 1 — Éditeur Direct (MVP actuel) :**
   - Création interne de 3 programmes thématiques standardisés.
   - Validation de l'appétence client, retours d'usage sur le terrain et amorçage du trafic via réseaux sociaux.
2. **Phase 2 — Marketplace Fermée & Curation Sélective :**
   - Onboarding manuel de 5 à 10 créateurs / guides certifiés résidant à Taïwan.
   - Modèle de partage de revenus (*Revenue Share*, ex: 70% créateur / 30% Taiwanderer).
   - Maintien d'une revue éditoriale stricte sur chaque proposition de programme.
3. **Phase 3 — Open Marketplace & Scalabilité :**
   - Espace créateur en self-service avec validation semi-automatisée des standards.
   - Système de notation, avis vérifiés et monétisation par commission (*Take-Rate* de 15% à 25%).


---

## 6. Catalogue Initial Prévu pour le MVP

1. **Programme 1 — "Heritage & Street Food Safari" (Dadaocheng & Ningxia) :**
   - *Thème :* Histoire, herboristeries traditionnelles, architecture baroque, et dégustation guidée au Ningxia Night Market.
2. **Programme 2 — "Misty Hills & Old Gold Trails" (Jiufen & Shifen) :**
   - *Thème :* Villages de montagne, salon de thé traditionnel, cascades et lanternes, avec gestion millimétrée des transports ferroviaires et bus.
3. **Programme 3 — "Creative Hubs & Sunset Heights" (Huashan 1914 & Xiangshan / Elephant Mountain) :**
   - *Thème :* Quartiers créatifs réhabilités, cafés de spécialité, et randonnée urbaine pour le panorama au coucher du soleil sur la Taipei 101.

---

## 7. Prochaines Étapes Opérationnelles

- [ ] **Étape 1 :** Rédaction du Business Model Canvas (BMC) et de la matrice concurrentielle (Klook, blogs, Lonely Planet, IA).
- [ ] **Étape 2 :** Conception détaillée du contenu des 3 programmes pilotes (données de terrain, chinois traditionnel, adresses, étapes).
- [ ] **Étape 3 :** Développement du prototype Web App interactif (interface épurée, responsive smartphone).

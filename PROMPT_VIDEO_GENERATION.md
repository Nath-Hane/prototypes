# Guide de Génération Vidéo IA & Spécifications pour GSAP Scrub

Ce document détaille les paramètres nécessaires pour générer la vidéo de la lanterne taïwanaise avec un outil IA (Runway Gen-3, Luma Dream Machine, Kling AI, ou Midjourney + animate).

---

## 1. Prompt de Génération (Anglais)

```text
Cinematic studio shot, a traditional handcrafted Taiwanese red lantern with delicate bamboo ribs, translucent red paper, gold trims, and subtle traditional calligraphy. Inside, a warm glowing flame illuminates the paper texture from within. Below, crimson silk tassels hang straight down. The lantern is perfectly centered in the frame, rotating smoothly 360 degrees on its vertical axis at a slow, constant speed. Static camera locked on tripod, eye-level, no camera movement, no zoom. Dark atmospheric deep midnight blue and misty studio background, soft volumetric rim lighting, photorealistic 8k, seamless rotation, high frame rate.
```

---

## 2. Contraintes Clés de Paramétrage

| Paramètre | Valeur Recommandée | Justification |
| :--- | :--- | :--- |
| **Mouvement de caméra** | **Locked / Aucun** | Tout zoom ou travelling brise la synchronisation spatiale au scroll. |
| **Motion Intensity** | **3/10 à 4/10** | Une valeur trop haute déforme la géométrie de la lanterne au fil de la rotation. |
| **Format (Aspect Ratio)** | **16:9 paysage** | Optimisé pour le visionnage sur écran d'ordinateur de bureau. |
| **Arrière-plan** | **Bleu nuit très sombre / Noir brumeux** | Permet une fusion naturelle avec la couleur de fond `#0B1B2B` du site. |
| **Format d'export** | **MP4 (H.264), 1080p, 30 ou 60 fps** | Clés d'images rapprochées pour éviter les saccades lors du scrubbing. |

---

## 3. Comment tester le prototype vidéo

1. Générez la vidéo sur votre plateforme IA favorite avec le prompt ci-dessus.
2. Téléchargez le fichier sous le nom `lantern.mp4`.
3. Deux manières de tester immédiatement :
   - **Option A :** Placez le fichier `lantern.mp4` directement dans le dossier `c:\Users\nodel\Projects\Uni\Taiwanderer\prototypes\`.
   - **Option B :** Ouvrez simplement [prototype_video.html](file:///c:/Users/nodel/Projects/Uni/Taiwanderer/prototypes/prototype_video.html) dans votre navigateur et importez la vidéo via le sélecteur situé en bas à droite de l'écran.

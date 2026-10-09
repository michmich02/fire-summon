# Fire Summon

> A hand-tracked 3D fire ritual.

[**View live demo →**](https://michmich02.github.io/fire-summon/)

## Overview

Fire Summon is an embodied interaction prototype that lets a user call and shape a volumetric fire effect with hand gestures. It combines real-time tracking with a cinematic Three.js scene.

## Interaction

- Allow camera access.
- Keep both hands visible in good lighting.
- Follow the gesture cues to summon and control the fire.

## Built with

`React` · `TypeScript` · `Three.js` · `MediaPipe`

## Run locally

```sh
python3 -m http.server 8000 --directory docs
```

Open [http://localhost:8000](http://localhost:8000) in a desktop browser. Camera and microphone APIs require localhost or HTTPS; external models and CDN dependencies require an internet connection.

## Design notes

- Immediate visual feedback keeps the gesture-to-effect relationship legible.
- The experience is designed as a focused, full-screen interaction.
- Processing happens in the browser; camera and microphone streams are not uploaded by this project.

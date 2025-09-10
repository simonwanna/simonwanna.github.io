---
layout: post
title: Portfolio
permalink: /portfolio/
nav_include: true
nav_title: Portfolio
nav_order: 3
---

## Currently working on: Super Resolution project @ Ericsson {#super-resolution-project}
*Sep 2025 - Dec 2025 (course project)*

Can Super Resolution techniques improve Radio Maps?
The project aims to enhance Radio Maps with Super Resolution and is inspired by DLSS. It is part of the course DD2430 at KTH and is done in collaboration with Ericsson.

Link (will be open soon): [GitHub Repository](https://github.com/simonwanna/RaySR){:.badge .badge--code}


## SSE x KTH x Microsoft Hackathon {#sse-hackathon}
Will update soon...

## Research Project in Autonomous Driving {#ad-prediction-project}
*Sep 2024 - May 2025*

Will update soon...\
Paper will be available here when released: [Paper](https://ieee-itsc.org/2025/){:.badge .badge--paper}

## EyeBall {#eyeball}

Will update soon...\
Link: [GitHub Repository](https://github.com/simonwanna/EyeBall){:.badge .badge--code}

## Robotics Course Project {#robotics-course-project}

Will update soon...


## Bachelor Thesis @ Scania {#bachelor-thesis} 
*Jan 2024 - June 2024*

![NuPlan simulation](/assets/portfolio/nuplan-sim.gif){:.portfolio-image}

I combined an internship at Scania's Autonomous Solutions division with my bachelor thesis, diving deep into motion planning and prediction for autonomous vehicles. The thesis was done in colaboration with [Tom Boustedt](https://tomboustedt.com) and it spanned everything from data processing to simulator work, model building, and evaluation using PyTorch and the [nuPlan](https://www.nuscenes.org/nuplan) simulator, all done on AWS.

The core research focused on a key question: could we improve autonomous driving performance by integrating and simultaneously optimizing the predictor with the planner in a differentiable manner? Rather than treating prediction and planning as separate modules, the project explored whether joint optimization could lead to better overall system performance.

The approach also integrated a non-linear optimization layer built using [Theseus](https://research.facebook.com/publications/theseus-a-library-for-differentiable-nonlinear-optimization/) to enforce kinematic driving constraints. This created a more transparent system that could aid safe development compared to previous black-box approaches.

The results did not reach SOTA on overall performance, but in some scenarios where previous models struggled, our integrated approach showed improved lane-keeping behavior and better collision avoidance. We continued refining the model after thesis submission and presented the enhanced results at Scania in June 2024.

Link: [Bachelor Thesis](https://kth.diva-portal.org/smash/get/diva2:1880732/FULLTEXT01.pdf){:.badge .badge--paper}

---

## Speech to Gesture project {#s2g-project}
*Feb 2023 - Jan 2024*

![Speech to Gesture Example](/assets/portfolio/s2g-ZEGGS-rig.gif){:.portfolio-image}

This project was done during my second year at KTH, where I joined a research group at the division for Computational Science and Technology to explore speech-to-gesture generation using deep learning. This project became my introduction to serious research work — dealing with Linux environments, PyTorch, signal processing etc.

The goal was to see if we could curate a dataset of different motion capture data (different sizes, number of joints etc.) from sources like [Ubisoft ZeroEGGS dataset](https://github.com/ubisoft/ubisoft-laforge-ZeroEGGS) and map the audio features directly to human motion. Therefore, I spent a good amount of time in Blender, retargeting the motion capture data to align everything with a unified rig across datasets. 

Our modelling approach focused on extracting Mel spectrograms and frequency domain features using PyTorch Audio, testing the hypothesis that information in the frequency domain could map to acceleration in joint space to predict realistic motion based on speech. We started building a VAE model to handle the complexity of human gesture generation.

The project got discontinued when the thesis work started, but it gave a solid introduction to multimodal deep learning and the challenges of working with real-world motion data.

---

## Arduino Course Project {#arduino-course-project}
Working on it...

Link: [GitHub Repository](https://github.com/simonwanna/PingPongPal){:.badge .badge--code}



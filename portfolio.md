---
layout: post
title: Portfolio
permalink: /portfolio/
nav_include: true
nav_title: Portfolio
nav_order: 3
---

## Currently working on: Grandmaster Intuition {#grandi}
*Dec 2025*

Scalable ML project to predict impact of chess moves on future game outcome.

Link to project: [GitHub Repository](https://github.com/simonwanna/grandi){:.badge .badge--code}

---

## RaySR - Super Resolution Project @ Ericsson {#sr-ericsson}
*Sep 2025 - Dec 2025*

![Super Resolution Project](/assets/portfolio/sr-ericsson.png){:.portfolio-image}

This project (pronounced racer) explored the use of Super Resolution (SR) techniques to improve generation of radio maps, which are used to predict the signal strength of a radio signal in a given location. Inspired by NVIDIA's DLSS, the project aimed to see if a similar result can be achieved for radio maps, i.e. to generate a low resolution radio map and upsample it, faster than only using a high resolution radio map, without loosing essential quality. It was part of the course DD2430 at KTH and was done in collaboration with Ericsson. Other than SR, the project also required work with physics simulator Sionna to explore things like ray tracing for data generation. The results indicates that it is possible as clear improvements was achieved. However, one limiting factor was the low complexity in the scenes used, and the requirements from network operators must be evaluated more closely to see if it is a viable solution.

Link to project: [GitHub Repository](https://github.com/simonwanna/RaySR){:.badge .badge--code}

---

## SSE x KTH x Microsoft Hackathon {#sse-hackathon}
*May 2025*

![CalliQ Demo](/assets/portfolio/hackathon.jpg){:.portfolio-image}

Together with [Didrik Munther](https://www.linkedin.com/in/didrikmunther/), I built CalliQ (Call IQ) which is an assistant designed to prevent phone scams. The agent listens in on phone calls in real time, transcribes them using Microsoft’s Azure Speech SDK, and leverages a LangGraph LLM agent to detect and warn the receiver if a scam attempt is suspected.

We developed and demoed the prototype by conducting a live phone call between two devices on stage during the SSE x KTH x Microsoft Hackathon at Microsoft HQ in Stockholm. Out of 300 applicants, 14 teams were selected to build and pitch their projects, and ours was awarded runner-up.

Mention: [SSE LinkedIn Post](https://www.linkedin.com/feed/update/urn:li:activity:7328041781772632065/){:.badge .badge--link}

---

## Research Project in Autonomous Driving {#ad-prediction-project}
*Sep 2024 - May 2025*

![Autonomous Driving Prediction Example](/assets/portfolio/itsc.png){:.portfolio-image}

This project focused on improving trajectory prediction for autonomous driving by exploring ensemble methods to better handle difficult, long-tailed cases. Working with Oxford Robotics, I implemented and tested ensembles on large-scale datasets such as [nuScenes](https://www.nuscenes.org/).

The project explored distillation and other techniques but surprisingly, the most effective approach turned out to be a simple confidence-weighted average of pre-trained models, without retraining or fine-tuning. This yielded up to 10% improvement in prediction accuracy, particularly in the hardest long-tail scenarios, compared to any single model. The work also revealed how different models complement each other: smaller models, though weaker on average, provided robustness in edge cases where larger models failed.

The project culminated in a paper accepted to the IEEE International Conference on Intelligent Transportation Systems (ITSC) 2025 and was selected for an oral presentation.

Paper: [arXiv](https://arxiv.org/abs/2509.13914){:.badge .badge--paper}
Code: [GitHub Repository](https://github.com/dthuremella/Ensemble-of-Pretrained-Models){:.badge .badge--code}

---

## EyeBall - Personal Project {#eyeball}
*Mar 2025*

![EyeBall Gameplay](/assets/portfolio/eyeball-gameplay.png){:.portfolio-image}

EyeBall is a game where you control a ball with your eyes while competing on a track against a reinforcement learning (RL) agent. The idea was to combine computer vision with interactive gameplay and to use the setup as a practical playground to learn more about reinforcement learning.

To achieve this, I built an eye-tracking interface using MediaPipe FaceMesh that detects gaze direction in real time and maps it to in-game lane switching. On top of this, I created a game environment in Ursina that could be played either by the user (via eye movements or keyboard) or by an RL agent. For the agent, I designed a headless version of the environment and trained it with PPO from Stable-Baselines3, experimenting with reward shaping for lane changes, obstacle avoidance, and survival time.

Code is available here: [GitHub Repository](https://github.com/simonwanna/EyeBall){:.badge .badge--code}

---

## Robotics Course Project {#robotics-course-project}
*Jan 2025 - May 2025*

![PLUTO Simulation](/assets/portfolio/interplan-compare.gif){:.portfolio-image}

This project focused on improving trajectory planning in autonomous driving, with emphasis on out-of-distribution (OOD) generalization.

I built upon a baseline model that generated multiple trajectories and ranked them, but which consistently failed in OOD cases. I experimented with incorporating large-scale representation learning through LLM and VLM embeddings in PyTorch Lightning. The hypothesis was that such multimodal embeddings, with richer "world knowledge", could support better reasoning in edge cases. LLM-based embeddings were difficult because each dynamic scene had to be translated into a sufficiently rich textual description; a VLM embedding using vehicle history and scene context was simpler and more robust, though gains remained scenario-dependent.

My modifications to the original baseline model enabled the system to resolve some of these edge cases like driving around a blocking car and return safely to the correct lane (shown in the simulation above), and with additional training tweaks I also achieved a higher score than the reported SOTA on the [InterPlan](https://github.com/mh0797/interPlan) dataset. However, the simulator scoring itself proved noisy and gave somewhat questionable metrics.

The project was part of the course [DD2414](https://www.kth.se/student/kurser/kurs/DD2414?l=en) Engineering project in Robotics, Perception and Learning (15 credits).

---

## Bachelor Thesis @ Scania {#bachelor-thesis} 
*Jan 2024 - June 2024*

![NuPlan simulation](/assets/portfolio/nuplan-sim.gif){:.portfolio-image}

This thesis project on autonomous driving was done in colaboration with [Tom Boustedt](https://www.linkedin.com/in/tomboustedt/) and it spanned everything from data processing to simulator work, model building, and evaluation using PyTorch, Weights and Biases and the [nuPlan](https://www.nuscenes.org/nuplan) simulator, all done on AWS.

The core research focused on a key question: could we improve autonomous driving performance by integrating and simultaneously optimizing the predictor with the planner in a differentiable manner? Rather than treating prediction and planning as separate modules, the project explored whether joint optimization could lead to better overall system performance.

The approach also integrated a non-linear optimization layer built using [Theseus](https://research.facebook.com/publications/theseus-a-library-for-differentiable-nonlinear-optimization/) to enforce kinematic driving constraints. This created a more transparent system that could aid safe development compared to previous black-box approaches.

The results did not reach SOTA on overall performance, but in some scenarios where previous models struggled, our integrated approach showed improved lane-keeping behavior and better collision avoidance. We continued refining the model after thesis submission and presented the enhanced results at Scania in June 2024.

Link to pdf: [Bachelor Thesis](https://kth.diva-portal.org/smash/get/diva2:1880732/FULLTEXT01.pdf){:.badge .badge--paper}

---

## Speech to Gesture Project {#s2g-project}
*Feb 2023 - Jan 2024*

![Speech to Gesture Example](/assets/portfolio/s2g-zeggs-rig.gif){:.portfolio-image}

This project aimed to explore speech-to-gesture generation using deep learning. The goal was to see if we could curate a dataset of different motion capture data (different sizes, number of joints etc.) from sources like [Ubisoft ZeroEGGS dataset](https://github.com/ubisoft/ubisoft-laforge-ZeroEGGS) and map the audio features directly to human motion. Therefore, I spent a good amount of time in Blender, retargeting the motion capture data to align everything with a unified rig across datasets. 

Our modelling approach focused on extracting Mel spectrograms and frequency domain features using PyTorch Audio, testing the hypothesis that information in the frequency domain could map to acceleration in joint space to predict realistic motion based on speech. We started building a VAE model to handle the complexity of human gesture generation.

Although the project was discontinued when my thesis began, it became my introduction to serious research. Working with Linux environments, high‑performance clusters, PyTorch, and signal processing gave me a solid grounding in multimodal deep learning and the challenges of real‑world motion data.
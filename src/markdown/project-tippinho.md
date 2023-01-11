---
slug: "/projects/tippinho"
type: 'project'
date: "2022-10-19"
title: "Tippinho"
project: 'job'
description: "Amateur Soccer prediction Community"
position: "Lead Mobile Developer"
start: "2022-04-01"
end: "2022-12-31"
---

**Tippinho** is a platform where you and your friends make friendly predictions on upcoming matches in various amateur soccer leagues in Germany. You can then compare your score to your friend's predictions. All this is done through an app.

I joined **Tippinho** as the only mobile developer - and as such handled everything related to the app.

## Tasks

- Implementing the entire app (in RN)
- Making (all) architecture decisions
- Requirements engineering
- UX prototyping and design
- Creating feature roadmaps
- Presenting designs, features and progress
- Deployment to App & Play Store
- Maintenance and bug fixes

## Stack

After evaluating other frameworks like Flutter, I ultimately decided on **React Native** because of my familiarity with **React** and the interoperability with JS packages (which I was also familiar with).

We choose **GraphQL** as a communication medium because it allowed us to shift the definition of endpoint data towards the frontend, thus freeing up time for the backend developer.

**TypeScript** was added early on to provide type hints. Thanks to GraphQL schemas (and interactive tools like GraphiQL) it was easy to get accurate types for our data flows.

To enable paid subscriptions and in-app purchases we used **RevenueCat**, because it offered a unified and easy to use API. That allowed me to reduce and isolate purchasing logic.

**Github** was used for VC hosting, issue tracking and project planning. **Github Issues** made communication about TODOs happen in one single place and helped establish traceability between related issues. **Github Projects** made it trivial to share the administrative state of the app with the team.

Earlier mockups were already done by the team in **Figma**. I extended those designs and used Figma to prototype and present future screens. Figma also allowed me to easily and asynchronously gather feedback from the team.

## Screenshots

![Video of swipes from left to right between matchdays](https://i.imgur.com/q1DuzDH.gif)
![Video of the prediction table](https://i.imgur.com/D0JczuZ.gif)
![Video of bottom sheet asking for purchase](https://i.imgur.com/5pVEpjT.gif)
![Video of list with search criteria](https://i.imgur.com/vVZyeEM.gif)
![Video of quick swipes between matches](https://i.imgur.com/EHucxIG.gif)
![Video of bottom sheet showing a group invitation](https://i.imgur.com/kXLqi9u.gif)

# 🐰 Rabbit Med Dosages (React Edition)

**[Live site → julia-rabbits.surge.sh](http://julia-rabbits.surge.sh)**  
_A clean, mobile-friendly React app for calculating safe medication dosages for rabbits based on weight._

---

## About the Project

This app was rebuilt in **React** to improve structure, maintainability, and expandability — while keeping everything lightweight and easy to use.

It was created for my friend **Julia**, a devoted rabbit rescuer who cares for abused, abandoned, and medically fragile rabbits. She once said:

> *"I hate math."*

So I built this tool to take the math off her plate and help her focus on what matters most: healing bunnies.

---

## Features

- Enter weight in pounds or kilograms
- Calculates safe dosages for:
  - Meloxicam  
  - Metoclopramide  
  - Cisapride  
  - Gabapentin  
  - Subcutaneous fluids (45 ml/kg)
- Clearly displays drug concentrations and dose ranges
- Smart interface:
  - Automatically focuses the weight input on page load
  - Highlights selected units and drug
  - Locks interaction after calculation to prevent mistakes
- One-click Reset button to recalculate
- Fully responsive — works great on mobile
- Works offline after initial load (no internet required)
- Bunny-themed background with clean blue layout and optional bunny logo

---

## Tech Stack

- [React](https://reactjs.org/) (functional components + hooks)
- Plain CSS for styling
- No external state libraries or backend needed
- Deployed with [Surge](https://surge.sh)

---

## Getting Started

1. Clone this repo  
   ```bash
   git clone https://github.com/deliaturner/rabbit-med-react.git
   cd rabbit-med-react
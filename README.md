# Dynamic Google Reviews Carousel  

![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-yellow?logo=javascript)  
![HTML5](https://img.shields.io/badge/HTML5-orange?logo=html5)  
![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3)  
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)  
![Express](https://img.shields.io/badge/Express.js-lightgrey?logo=express)  
![Google Places API](https://img.shields.io/badge/Google%20Places%20API-active-blue?logo=googlemaps)  

A responsive, dynamic carousel that fetches real Google Reviews using the **Google Places API**. Built with **Vanilla JavaScript, Express.js, and CSS**, this project demonstrates frontend-to-backend integration, responsive design, and clean code practices.  

---

## Features  

- **Google Places API Integration** – Fetches live reviews for a specific Place ID.  
- **Responsive Carousel** – Displays **2 reviews on mobile** and **4 reviews on desktop**.  
- **Uniform Review Cards** – All review boxes adapt to the same height for a clean layout.  
- **Navigation Controls** – Next/Previous buttons to cycle through reviews.  
- **Custom Styling** – Name aligned left, rating aligned right, with clean typography.  
- **No jQuery** – 100% Vanilla JS implementation.  

---

## Tech Stack  

- **Frontend:** HTML5, CSS3, Vanilla JavaScript  
- **Backend:** Node.js, Express.js  
- **API:** Google Places API (Place Details endpoint)  

---

## Installation & Setup  

Clone the repo:  

```bash
git clone https://github.com/Sharifian1/PlaceID-Carousel-Review.git
cd reviews-carousel
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
node server.js
```

Open http://localhost:5500 in your browser

---

## How It Works

1. The Express backend provides a /reviews endpoint that fetches data from the Google Places API.
2. The frontend JS (index.js) calls /reviews asynchronously.
3. Reviews are dynamically inserted into the DOM and displayed in a carousel.
4. Media queries adjust the layout to show 2 reviews on mobile or 4 on desktop.
5. Navigation buttons update the current review index and re-render the carousel.

---

## What This Project Demonstrates

- Strong understanding of API integration.
- Building a responsive UI without relying on frameworks.
- Clean, modular JavaScript for dynamic DOM rendering.
- Knowledge of Node.js + Express.js backend setup.
- Ability to structure and document a project for production and portfolio use.

---

## Future Improvements

- Add automatic sliding for reviews.
- Replace numbers with star-rating icons.
- Improve accessibility with keyboard navigation and ARIA labels.
- Add unit tests for carousel logic.

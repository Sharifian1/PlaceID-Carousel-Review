let reviews = []
let currentIndex = 0
const reviewsWrapper = document.querySelector(".reviews-wrapper");

async function fetchReviews() {
    const res = await fetch("/reviews");
    return await res.json();
}

async function initCarousel() {
    reviews = await fetchReviews();
    renderReviews();
}

function renderReviews() {
    reviewsWrapper.innerHTML = ""
    const visibleReviews = window.innerWidth < 768 ? 2 : 4
    const slice = reviews.slice(currentIndex, currentIndex + visibleReviews)

    slice.forEach(r => {
        const div = document.createElement("div");
        div.className = "review-box"
        div.innerHTML = 
            `
            <h4>${r.author_name}</h4>
            <p>${r.rating}</p>
            <p>${r.text}</p>
            `;
        reviewsWrapper.appendChild(div)
    })
}

document.getElementById("leftBtn").addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex -1);
    renderReviews();
})

document.getElementById("rightBtn").addEventListener("click",() => {
    const visibleReviews = window.innerWidth < 768 ? 2 : 4;
    if (currentIndex + visibleReviews < reviews.length) {
        currentIndex++;
        renderReviews();
    }
})

window.addEventListener("resize", renderReviews);

initCarousel();

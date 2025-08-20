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
        const reviewDiv = document.createElement("div");
        reviewDiv.className = "review-box"

        const infoDiv = document.createElement("div")
        infoDiv.className = "review-info"

        const nameSpan = document.createElement("span")
        nameSpan.className = "name";
        nameSpan.textContent = r.author_name;

        const ratingSpan = document.createElement("span")
        ratingSpan.className = "rating"
        ratingSpan.textContent = `⭐${r.rating}`

        const text = document.createElement("p")
        text.textContent = r.text;

        infoDiv.appendChild(nameSpan)
        infoDiv.appendChild(ratingSpan)

        reviewDiv.appendChild(infoDiv)
        reviewDiv.appendChild(text)

        reviewsWrapper.appendChild(reviewDiv)
    })
}

document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex -1);
    renderReviews();
})

document.getElementById("nextBtn").addEventListener("click",() => {
    const visibleReviews = window.innerWidth < 768 ? 2 : 4;
    if (currentIndex + visibleReviews < reviews.length) {
        currentIndex++;
        renderReviews();
    }
})

window.addEventListener("resize", renderReviews);

initCarousel();

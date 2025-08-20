async function fetchReviews() {
    const res = await fetch("/reviews");
    return await res.json();
}
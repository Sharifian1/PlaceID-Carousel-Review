import express from "express";
import fetch from "node-fetch"
import path from "path"
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();
const port = 5500;

const APIkey = "AIzaSyAi83mZGrJbG6vbFsv7RyLatRkuVgrPlpA"
const placeID = "ChIJkx0kYi0bdkgRaDAVgjFnuU4"

app.get("/reviews", async (req, res) => {
    try{
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&fields=name,rating,reviews&key=${APIkey}`
        const response = await fetch(url);
        const data = await response.json();

        if (data.result && data.result.reviews) {
            res.json(data.result.reviews);
        } else{
            res.json([]);
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({ error: "Failed to fetch reviews" })
    }
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "src/main.html"))
})

app.use(express.static("src"));

app.listen(port, () => console.log(`Server running on htttp://localhost:${port}`))
import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000; // Use environment port if available

// Enable CORS for frontend
app.use(cors());

app.get("/random-quote", async (req, res) => {
    try {
        const response = await axios.get("https://zenquotes.io/api/random", {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
            },
        });

        res.json(response.data); // Send the fetched data to frontend
    } catch (error) {
        console.error("Error fetching quote:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to fetch quote" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
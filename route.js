import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 5000;

// Enable CORS for frontend
app.use(cors());

app.get("/random-quote", async (req, res) => {
    try {
        const response = await axios.get("https://zenquotes.io/api/random");
        res.json(response.data); // Send the fetched data to frontend
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch quote" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

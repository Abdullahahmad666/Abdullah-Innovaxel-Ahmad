import { useState } from "react";
import axios from "axios";
import "./URLShortener.css"; // Import CSS file

function URLShortener() {
    const [url, setUrl] = useState("");
    const [short, setShort] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:5000/shorten", { url });
        setShort(`http://localhost:5000/shorten/${res.data.shortCode}`);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Paste your long URL here"
                    className="input"
                />
                <button type="submit" className="button">
                    Shorten URL
                </button>
            </form>

            {short && (
                <p className="short-link">
                    Short URL: <a href={short} target="_blank" rel="noopener noreferrer">{short}</a>
                </p>
            )}
        </div>
    );
}

export default URLShortener;

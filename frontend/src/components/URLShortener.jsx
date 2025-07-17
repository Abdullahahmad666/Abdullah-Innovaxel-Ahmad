/**
 * URLShortener component provides a user interface for creating, updating, deleting,
 * and retrieving shortened URLs using a backend API.
 *
 * Features:
 * - Create a short URL from a long URL (POST request)
 * - Update the original long URL for a given short code (PUT request)
 * - Delete a short URL by its short code (DELETE request)
 * - Retrieve the original long URL using the short code (GET request)
 *
 * State:
 * - url: string - The long URL input by the user.
 * - short: string - The generated short URL.
 * - shortCode: string - The unique code for the short URL.
 * - updatedUrl: string - The new URL to update the original URL.
 * - retrievedUrl: string - The original URL retrieved from the backend.
 *
 * @component
 */
import { useState } from "react";
import axios from "axios";
import "./URLShortener.css";

function URLShortener() {
    const [url, setUrl] = useState("");
    const [short, setShort] = useState("");
    const [shortCode, setShortCode] = useState("");
    const [updatedUrl, setUpdatedUrl] = useState("");
    const [retrievedUrl, setRetrievedUrl] = useState("");

    // POST - Create Short URL
    const handleCreate = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:5000/shorten", { url });
        setShort(`http://localhost:5000/shorten/${res.data.shortCode}`);
        setShortCode(res.data.shortCode);
    };

    // PUT - Update Original URL
    const handleUpdate = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/shorten/${shortCode}`, { url: updatedUrl });
        alert("Original URL Updated Successfully");
    };

    // DELETE - Delete Short URL
    const handleDelete = async (e) => {
        e.preventDefault();
        await axios.delete(`http://localhost:5000/shorten/${shortCode}`);
        alert("Short URL Deleted Successfully");
        setShort("");
        setShortCode("");
        setRetrievedUrl("");
    };

    // GET - Retrieve Original URL
    const handleRetrieve = async (e) => {
        e.preventDefault();
        const res = await axios.get(`http://localhost:5000/shorten/${shortCode}`);
        setRetrievedUrl(res.data.url);
    };

    return (
        <div className="container">
            <h2>URL Shortener</h2>

            <form onSubmit={handleCreate} className="form">
                <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter long URL" className="input" />
                <button type="submit" className="button">Create Short URL</button>
            </form>

            {short && <p className="short-link">Short URL: <a href={short} target="_blank" rel="noopener noreferrer">{short}</a></p>}

            {shortCode && (
                <>
                    <form onSubmit={handleUpdate} className="form">
                        <input
                            value={updatedUrl}
                            onChange={(e) => setUpdatedUrl(e.target.value)}
                            placeholder="Update long URL"
                            className="input"
                        />
                        <button type="submit" className="button">Update URL</button>
                    </form>

                    <form onSubmit={handleDelete} className="form">
                        <button type="submit" className="button delete">Delete Short URL</button>
                    </form>

                    <button onClick={handleRetrieve} className="button retrieve">Retrieve Original URL</button>

                    {retrievedUrl && (
                        <textarea readOnly className="textarea" value={retrievedUrl}></textarea>
                    )}
                </>
            )}
        </div>
    );
}

export default URLShortener;

/**
 * Generates a random short code for the URL.
 * @param {number} [length=6] - Length of the short code.
 * @returns {string} The generated short code.
 */

/**
 * Creates a shortened URL entry in the database.
 * @async
 * @function
 * @param {import('express').Request} req - Express request object containing the original URL in the body.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */

/**
 * Retrieves the original URL by its short code and increments the access count.
 * @async
 * @function
 * @param {import('express').Request} req - Express request object containing the short code in params.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */

/**
 * Updates the original URL for a given short code.
 * @async
 * @function
 * @param {import('express').Request} req - Express request object containing the short code in params and new URL in body.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */

/**
 * Deletes a URL entry by its short code.
 * @async
 * @function
 * @param {import('express').Request} req - Express request object containing the short code in params.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */

/**
 * Retrieves statistics for a shortened URL by its short code.
 * @async
 * @function
 * @param {import('express').Request} req - Express request object containing the short code in params.
 * @param {import('express').Response} res - Express response object.
 * @returns {Promise<void>}
 */
const Url = require('../models/Url.js');

function generateShortCode(length = 6) {
    return Math.random().toString(36).substring(2, 2 + length);
}

exports.createShortUrl = async (req, res) => {
    const { url } = req.body;
    const shortCode = generateShortCode();
    const newUrl = await Url.create({ url, shortCode });
    res.status(201).json(newUrl);
};

exports.getOriginalUrl = async (req, res) => {
    const url = await Url.findOne({ shortCode: req.params.code });
    if (!url) return res.status(404).json({ error: 'Not Found' });
    url.accessCount++;
    await url.save();
    res.json(url);
};

exports.updateUrl = async (req, res) => {
    const url = await Url.findOneAndUpdate(
        { shortCode: req.params.code },
        { url: req.body.url },
        { new: true }
    );
    if (!url) return res.status(404).json({ error: 'Not Found' });
    res.json(url);
};

exports.deleteUrl = async (req, res) => {
    const result = await Url.deleteOne({ shortCode: req.params.code });
    if (result.deletedCount === 0) return res.status(404).json({ error: 'Not Found' });
    res.status(204).end();
};

exports.getUrlStats = async (req, res) => {
    const url = await Url.findOne({ shortCode: req.params.code });
    if (!url) return res.status(404).json({ error: 'Not Found' });
    res.json(url);
};

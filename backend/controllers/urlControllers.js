const Url = require('../models/Url');

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


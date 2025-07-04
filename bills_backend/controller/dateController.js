const bs = require('bikram-sambat');

exports.convertToBS = (req, res) => {
  const adDate = req.query.date;
  if (!adDate) return res.status(400).json({ error: "Missing date" });

  try {
    const converted = bs.toBik(adDate);
    res.json(converted);
  } catch (err) {
    console.error("Conversion failed:", err);
    res.status(500).json({ error: "Conversion failed" });
  }
};

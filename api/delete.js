export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Check if this is a challenge from eBay
    if (req.body && req.body.challengeCode) {
      return res.status(200).json({ challengeResponse: req.body.challengeCode });
    }

    // You can also validate the real token here later if needed
    console.log("✅ Received eBay Deletion Notification:", req.body);
    return res.status(200).json({ status: "received" });
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}

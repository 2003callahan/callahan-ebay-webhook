const VERIFICATION_TOKEN = "callahan_verify_token_93485723984723048723098472938473";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const incomingToken = req.headers['x-ebay-verification-token'];

    if (incomingToken !== VERIFICATION_TOKEN) {
      return res.status(401).json({ error: "Invalid verification token" });
    }

    console.log("✅ Verified eBay Account Deletion Notification:", req.body);
    return res.status(200).json({ status: "received" });
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}

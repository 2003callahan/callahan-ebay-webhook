import crypto from 'crypto';

const VERIFICATION_TOKEN = "callahan_verify_token_93485723984723048723098472938473";
const ENDPOINT_URL = "https://callahan-ebay-webhook-98b1.vercel.app/api/delete";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const challengeCode = req.query.challenge_code;

    if (!challengeCode) {
      return res.status(400).json({ error: "Missing challenge_code" });
    }

    const hash = crypto.createHash('sha256');
    hash.update(challengeCode);
    hash.update(VERIFICATION_TOKEN);
    hash.update(ENDPOINT_URL);
    const responseHash = hash.digest('hex');

    return res.status(200).json({ challengeResponse: responseHash });
  }

  if (req.method === 'POST') {
    // Future: handle real deletion notifications
    return res.status(200).json({ status: "received" });
  }

  return res.status(405).json({ error: "Method not allowed" });
}

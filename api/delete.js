export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log("Received eBay Deletion Notification:", req.body);
    res.status(200).json({ status: "received" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

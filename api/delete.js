export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb', // Optional: limit payload size
    },
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const body = req.body;

      // eBay's validation request includes a challengeCode
      if (body && body.challengeCode) {
        return res.status(200).json({ challengeResponse: body.challengeCode });
      }

      // Log other real events (optional)
      console.log("✅ Received real eBay Deletion Notification:", body);
      return res.status(200).json({ status: "received" });
    } catch (error) {
      console.error("Error processing request:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}

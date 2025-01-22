import type { NextApiRequest, NextApiResponse } from "next"
import type { NextApiHandler } from "next"

export function withAuth(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    // Check for a valid session or token
    // This is a simple example, you should implement proper authentication
    const isAuthenticated = req.cookies.adminToken === process.env.ADMIN_SECRET

    if (!isAuthenticated) {
      return res.status(401).json({ message: "Unauthorized" })
    }

    return handler(req, res)
  }
}


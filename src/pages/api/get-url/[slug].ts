import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/db/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const slug = req.query["slug"];

    if (!slug || typeof slug !== "string") {
        res.status(400).json({ error: "Missing slug" });
        return;
    }

    const data = await prisma.shortLink.findFirst({
        where: {
            slug: {
                equals: slug,
            },
        },
    });

    if (!data) {
        res.status(404).json({ error: "Not found" });
        return;
    }

    res.setHeader(
        "Cache-Control",
        "s-maxage=1000000000, stale-while-revalidate"
    );

    return res.json({ url: data.url });
};

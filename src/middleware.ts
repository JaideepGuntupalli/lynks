import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    if (req.nextUrl.pathname.startsWith("/api/get-url/")) {
        console.log("API request");
        return;
    }

    if (req.nextUrl.pathname.startsWith("/l/")) {
        const slug = req.nextUrl.pathname.split("/l/")[1];

        const data = await (
            await fetch(`${req.nextUrl.origin}/api/get-url/${slug}`)
        ).json();

        if (data.error) {
            return new Response(data.error, { status: 404 });
        }

        if (data.url) {
            return NextResponse.redirect(data.url);
        }

        return;
    }
}

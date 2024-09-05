import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
import { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
    console.log('middleware.ts')
    return withAuth(req)
}

export const config = {
    matcher: ["/create-post"]
}
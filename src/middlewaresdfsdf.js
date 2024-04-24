// import {NextResponse} from "next/server";
//
// export default function middleware(request) {
//     const token = request.cookies.get("next-auth.session-token")?.value
//     console.log(token);
//     const path = request.nextUrl.pathname;
//
//     if (!token && path !== "/login") {
//         return NextResponse.redirect(new URL("/login", request.nextUrl))
//     }
// }
//
// export const config = { matcher: ["/dashboard"] };
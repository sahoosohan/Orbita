import { clerkMiddleware } from "@clerk/nextjs/server";

const isRoute = (pathname: string, route: string) =>
  pathname === route || pathname.startsWith(`${route}/`);

const isPublicRoute = (pathname: string) =>
  pathname === "/" || isRoute(pathname, "/sign-in") || isRoute(pathname, "/sign-up");

const isApiRoute = (pathname: string) =>
  isRoute(pathname, "/api") || isRoute(pathname, "/trpc");

const isClerkRoute = (pathname: string) => isRoute(pathname, "/__clerk");

export default clerkMiddleware(async (auth, req) => {
  const { pathname } = req.nextUrl;

  if (isApiRoute(pathname)) {
    const { userId } = await auth();

    if (!userId) {
      return Response.json({ error: "Authentication required" }, { status: 401 });
    }

    return;
  }

  if (!isPublicRoute(pathname) && !isClerkRoute(pathname)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    // Always run for Clerk-specific frontend API routes
    "/__clerk/(.*)",
  ],
};

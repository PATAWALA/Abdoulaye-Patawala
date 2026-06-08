import { NextResponse, type NextRequest } from 'next/server';

const redirectMap: Record<string, string> = {
  '/accueil': '/',
  '/home': '/',
  '/projets': '/portfolio',
  '/projects': '/portfolio',
  '/articles': '/blog',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirections SEO
  if (redirectMap[pathname]) {
    return NextResponse.redirect(new URL(redirectMap[pathname], request.url), {
      status: 301,
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};
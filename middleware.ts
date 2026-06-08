import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

// Redirections SEO (anciennes URLs → nouvelles URLs)
const redirectMap: Record<string, string> = {
  '/accueil': '/',
  '/home': '/',
  '/projets': '/portfolio',
  '/projects': '/portfolio',
  '/articles': '/blog',
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Redirections SEO (statiques)
  if (redirectMap[pathname]) {
    return NextResponse.redirect(new URL(redirectMap[pathname], request.url), {
      status: 301,
    });
  }

  // 2. Protection admin
  if (pathname.startsWith('/admin')) {
    const response = NextResponse.next({ request });

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) =>
              response.cookies.set(name, value, options)
            );
          },
        },
      }
    );

    const { data: { user } } = await supabase.auth.getUser();
    const isLoginPage = pathname === '/admin/login';

    if (!isLoginPage && !user) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    if (isLoginPage && user) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|images).*)',
  ],
};
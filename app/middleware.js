import { NextResponse } from 'next/server'
import { useSelector } from 'react-redux'

export async function middleware(request) {
  const protectedPaths = ['/', '/projets', '/temoignages', '/contact']
  const publicPaths = ['/login', '/register']

  // Vérifier si la route actuelle est protégée
  if (protectedPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
    // Vérification simplifiée de l'authentification
    const isAuthenticated = /* Votre logique Redux ici */ false
    
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Rediriger les utilisateurs connectés des pages publiques
  if (publicPaths.includes(request.nextUrl.pathname)) {
    const isAuthenticated = /* Votre logique Redux ici */ false
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
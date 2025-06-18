import { NextRequest, NextResponse } from 'next/server'
import { verifyUser } from './lib/auth'

// 1. Specify protected and public routes
const protectedRoutes = ['/admin']
const publicRoutes = ['/login', '/register', '/']

export default async function middleware (req: NextRequest) {
	// 2. Check if the current route is protected or public
	const path = req.nextUrl.pathname



	const isProtectedRoute = protectedRoutes.find(each => path.includes(each));
	// const isProtectedRoute = protectedRoutes.includes(path)
	const isPublicRoute = publicRoutes.includes(path)

	const user = await verifyUser();
	console.log(path, user);

	// 4. Redirect to /login if the user is not authenticated
	if (isProtectedRoute && !user) {
		return NextResponse.redirect(new URL('/login', req.nextUrl))
	}

	// 5. Redirect to /dashboard if the user is authenticated
	if (
		isPublicRoute &&
		user &&
		!req.nextUrl.pathname.startsWith('/dashboard')
	) {
		return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
	}

	return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
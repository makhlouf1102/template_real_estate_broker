import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
    const token = request.headers.get('Authorization')?.split(' ')[1];
    if (!token) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret');
        if (!decoded) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/api/contact/get-contacts', '/api/subscribe/get-subscribers'],
    middleware: [middleware],
}
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
    try {
        const { token } = await request.json();

        if (!token) {
            return NextResponse.json({ error: 'No token provided' }, { status: 400 });
        }

        const secret = process.env.JWT_SECRET || 'fallback_secret';

        try {
            const decoded = jwt.verify(token, secret);
            return NextResponse.json({ valid: true, user: decoded }, { status: 200 });
        } catch (error) {
            return NextResponse.json({ valid: false, error: 'Invalid token' }, { status: 401 });
        }
    } catch (error) {
        console.error('Token verification error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

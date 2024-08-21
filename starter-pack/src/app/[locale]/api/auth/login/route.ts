import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Function to open the SQLite database
async function sqliteConnection() {
    const db = await open({
        filename: "./database.db",
        driver: sqlite3.Database,
    });

    return db;
}

export async function POST(request: Request) {
    const { email, password } = await request.json();

    try {
        const db = await sqliteConnection();
        const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET || 'fallback_secret',
            { expiresIn: '1h' }
        );
        console.log(token);

        return NextResponse.json({ token }, { status: 200 });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}


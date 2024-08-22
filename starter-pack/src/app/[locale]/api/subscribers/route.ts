import { NextResponse } from 'next/server';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

export async function GET() {
    try {
        const db = await open({
            filename: './database.db',
            driver: sqlite3.Database
        });

        const subscribers = await db.all(`
            SELECT id, email, created_at as createdAt
            FROM subscribers
            ORDER BY created_at DESC
        `);

        await db.close();

        return NextResponse.json(subscribers);
    } catch (error) {
        console.error('Error fetching subscribers:', error);
        return NextResponse.json(
            { error: 'An error occurred while fetching subscribers' },
            { status: 500 }
        );
    }
}


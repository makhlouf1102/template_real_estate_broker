import { NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function GET() {
    try {
        const db = await open({
            filename: './database.db',
            driver: sqlite3.Database
        });

        const contacts = await db.all('SELECT id, name, email, message, created_at FROM contacts ORDER BY created_at DESC');

        await db.close();

        return NextResponse.json(contacts.map(contact => ({
            id: contact.id,
            name: contact.name,
            email: contact.email,
            message: contact.message,
            lastContactDate: new Date(contact.created_at).toISOString(),
        })));
    } catch (error) {
        console.error('Error fetching contacts:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}


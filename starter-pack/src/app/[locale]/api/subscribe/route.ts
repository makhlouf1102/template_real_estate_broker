import { NextRequest, NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'subscribers.sqlite');

async function openDb() {
  return open({
    filename: "./database.db",
    driver: sqlite3.Database
  });
}

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  try {
    const db = await openDb();

    // Create table if it doesn't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS subscribers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Check if email already exists
    const existingSubscriber = await db.get('SELECT * FROM subscribers WHERE email = ?', email);

    if (!existingSubscriber) {
      // Insert new email only if it doesn't exist
      await db.run('INSERT INTO subscribers (email) VALUES (?)', email);
    }

    await db.close();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to process subscription request:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process subscription request' },
      { status: 500 }
    );
  }
}
import { NextRequest, NextResponse } from 'next/server';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';

async function openDb() {
  return open({
    filename: "src/app/[locale]/api/database.db",
    driver: sqlite3.Database
  });
}

export async function POST(request: NextRequest) {
  // Check the referer
  const referer = request.headers.get('referer');
  const allowedOrigin = "http://localhost:3000";
  if (!referer || !allowedOrigin || !referer.startsWith(allowedOrigin)) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const { name, email, message } = await request.json();

  try {
    const db = await openDb();

    // Create table if it doesn't exist
    await db.exec(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insert new contact form data
    await db.run('INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)', [name, email, message]);

    await db.close();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to process contact form submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process contact form submission' },
      { status: 500 }
    );
  }
}
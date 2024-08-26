-- Enable UUID extension (only necessary if using a SQLite build with extensions)
PRAGMA foreign_keys = ON;

-- Create a table for users
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

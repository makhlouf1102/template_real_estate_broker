-- Enable UUID extension (only necessary if using a SQLite build with extensions)
PRAGMA foreign_keys = ON;

-- Create a table for users
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create a table for blog posts
CREATE TABLE IF NOT EXISTS blog_posts (
    id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
    title TEXT NOT NULL,
    content TEXT NOT NULL, -- Markdown format
    author_id TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_published BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (author_id) REFERENCES users(id)
);
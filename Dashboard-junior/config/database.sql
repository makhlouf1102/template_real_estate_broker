-- Enable UUID extension (only necessary if using a SQLite build with extensions)
PRAGMA foreign_keys = ON;

-- Create a table for users
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    role TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    assigned_phone_number TEXT NOT NULL
);

-- create a table for variables for each user
CREATE TABLE IF NOT EXISTS variables (
    id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
    user_id TEXT NOT NULL,
    variable_name TEXT NOT NULL,
    variable_value TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

-- create a table for sending review requests with time and date
CREATE TABLE IF NOT EXISTS review_requests (
    id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
    request_status TEXT NOT NULL,
    number_of_stars INTEGER,
    review_text TEXT,
    user_id TEXT NOT NULL,
    client_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (client_id) REFERENCES clients (id)
);

-- Create a table for clients
CREATE TABLE IF NOT EXISTS clients (
    id TEXT PRIMARY KEY NOT NULL DEFAULT (lower(hex(randomblob(16)))),
    name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
);
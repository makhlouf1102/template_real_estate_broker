import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import bcrypt from 'bcrypt';

// Function to open the SQLite database and create tables if they do not exist
async function sqliteConnection() {
    const db = await open({
        filename: './database.sqlite',
        driver: sqlite3.Database,
    });

    // Create the users table if it doesn't exist
    await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE,
            password TEXT
        );
    `);

    // Create the sessions table if it doesn't exist
    await db.exec(`
        CREATE TABLE IF NOT EXISTS sessions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            sessionToken TEXT UNIQUE NOT NULL,
            userId INTEGER NOT NULL,
            expires DATETIME NOT NULL,
            FOREIGN KEY(userId) REFERENCES users(id)
        );
    `);

    return db;
}

// NextAuth configuration
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name?: string | null;
            email?: string | null;
            image?: string | null;
        }
    }
}

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                if (!credentials) return null;
                
                const db = await sqliteConnection();
                const user = await db.get('SELECT * FROM users WHERE email = ?', [credentials.email]);

                if (user && bcrypt.compareSync(credentials.password, user.password)) {
                    return { id: user.id, name: user.name, email: user.email };
                } else {
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.sub!;
            }
            return session;
        },
    },
});
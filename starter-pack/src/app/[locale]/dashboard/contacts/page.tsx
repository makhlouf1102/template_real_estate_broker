'use client';

import { useEffect, useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner } from "@nextui-org/react";

interface Contact {
    id: string;
    name: string;
    email: string;
    lastContactDate: string;
    message: string;
}

export default function RecentContacts() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch('/api/contact/all');
                if (!response.ok) {
                    throw new Error('Failed to fetch contacts');
                }
                const data = await response.json();
                setContacts(data);
            } catch (err) {
                setError('An error occurred while fetching contacts');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchContacts();
    }, []);

    if (isLoading) {
        return <Spinner label="Loading contacts..." />;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Recent Contacts</h1>
            <Table aria-label="Recent contacts">
                <TableHeader>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Email</TableColumn>
                    <TableColumn>Last Contact Date</TableColumn>
                    <TableColumn>Message</TableColumn>
                </TableHeader>
                <TableBody>
                    {contacts.map((contact) => (
                        <TableRow key={contact.id}>
                            <TableCell>{contact.name}</TableCell>
                            <TableCell>{contact.email}</TableCell>
                            <TableCell>{new Date(contact.lastContactDate).toLocaleDateString()}</TableCell>
                            <TableCell>{contact.message}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

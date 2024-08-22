'use client';

import { useEffect, useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Spinner, Card } from "@nextui-org/react";

interface Subscriber {
    id: string;
    email: string;
    createdAt: string;
}

export default function NewsletterSubscribers() {
    const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSubscribers = async () => {
            try {
                const response = await fetch('/api/subscribers');
                if (!response.ok) {
                    throw new Error('Failed to fetch subscribers');
                }
                const data = await response.json();
                setSubscribers(data);
            } catch (err) {
                setError('An error occurred while fetching subscribers');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchSubscribers();
    }, []);

    if (isLoading) {
        return <Spinner label="Loading subscribers..." />;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Newsletter Subscribers</h1>
            <div className="hidden md:block">
                <Table aria-label="Newsletter subscribers">
                    <TableHeader>
                        <TableColumn>Email</TableColumn>
                        <TableColumn>Subscribed On</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {subscribers.map((subscriber) => (
                            <TableRow key={subscriber.id}>
                                <TableCell>{subscriber.email}</TableCell>
                                <TableCell>{new Date(subscriber.createdAt).toLocaleDateString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="md:hidden">
                {subscribers.map((subscriber) => (
                    <Card key={subscriber.id} className="mb-4 p-4">
                        <p className="font-semibold">{subscriber.email}</p>
                        <p className="text-sm text-gray-600">Subscribed on: {new Date(subscriber.createdAt).toLocaleDateString()}</p>
                    </Card>
                ))}
            </div>
        </div>
    );
}

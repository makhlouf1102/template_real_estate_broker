import { SubscribeResponse } from '@/types/api';

export async function subscribeToNewsletter(email: string): Promise<SubscribeResponse> {
    const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'X-API-Key': process.env.NEXT_PUBLIC_API_SECRET_KEY || '',
        },
        body: JSON.stringify({ email }),
    });

    const data: SubscribeResponse = await response.json();
    return data;
}

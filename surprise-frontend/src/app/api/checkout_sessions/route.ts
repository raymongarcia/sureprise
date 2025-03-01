import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe('your-secret-key-here', {
    apiVersion: '2025-02-24.acacia',
});

export async function POST(req: Request) {
    try {
        const { items } = await req.json();

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: items.map((item: any) => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: item.price * 100,
                },
                quantity: 1,
            })),
            mode: 'payment',
            success_url: `${req.headers.get('origin')}/success`,
            cancel_url: `${req.headers.get('origin')}/cancel`,
        });

        return NextResponse.json({ id: session.id });
    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        } else {
            return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
        }
    }
}

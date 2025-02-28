import { NextApiRequest, NextApiResponse } from 'next';

const products = [
    { id: 1, name: 'Surprise Box', price: 29.99 },
    { id: 2, name: 'Mystery Bag', price: 19.99 },
    { id: 3, name: 'Secret Envelope', price: 9.99 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        res.status(200).json(products);
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
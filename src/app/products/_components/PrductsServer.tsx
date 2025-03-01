import { getProducts } from '@/app/lib/api/products.api';
import Link from 'next/link';
import React from 'react';

export default async function PrductsServer() {
  const data = await getProducts();

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 3000);
  });

  return (
    <ul className="py-5 bg-slate-300 text-blue-700">
      {data.map((product) => (
        <Link
          className="block"
          href={`products/${product.id}`}
          key={product.id}
        >
          {product.title}
        </Link>
      ))}
    </ul>
  );
}

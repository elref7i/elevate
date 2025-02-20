import React from 'react';

export default async function ProductDetails({
  params,
}: {
  params: { productID: string };
}) {
  console.log(await params);

  return <div>Product Datails</div>;
}

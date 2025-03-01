import { getSingleProduct } from '@/app/lib/api/products.api';

export default async function Page({ params }: { params: string }) {
  // console.log(params);
  const data = await getSingleProduct({ id: params.id });
  console.log(data);

  return (
    <>
      <div>Product Dynamic Route {params.id}</div>

      <div>{data.title}</div>
    </>
  );
}

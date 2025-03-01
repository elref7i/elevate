import ProductClient from './_components/ProductClient';
import PrductsServer from './_components/PrductsServer';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <>
      <h1 className="text-center text-3xl py-5">Products Page</h1>
      <div className="flex gap-5 justify-center items-center">
        {/* //*Straming ==> الداتا بتيجى على هيئة شلال  */}
        <Suspense fallback="Loading .....">
          <PrductsServer />
        </Suspense>
        <ProductClient />
      </div>
    </>
  );
}

import React from "react";
import Container from "../components/ui/container";
import Billboard from "../components/Billboard";
import getBillboard from "../actions/getBillboard";
import getProducts from "../actions/getProducts";
import ProductsList from "../components/ProductsList";

export const revalidate = 0;

async function Home() {
  const billboard = await getBillboard("d05a17b0-cbdf-4d7f-83d7-2e70760df9e8");
  const products = await getProducts({ isFeatured: true });

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductsList title="Featured products" items={products} />
      </div>
    </Container>
  );
}

export default Home;

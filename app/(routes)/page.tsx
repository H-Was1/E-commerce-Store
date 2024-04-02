import React from "react";
import Container from "../components/ui/container";
import Billboard from "../components/Billboard";
import getBillboard from "../actions/getBillboard";
import getProducts from "../actions/getProducts";
import ProductsList from "../components/ProductsList";

export const revalidate = 0;

async function Home() {
  const billboard = await getBillboard("9b2415c0-3b9e-4c61-a3f8-55b725fd7739");
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

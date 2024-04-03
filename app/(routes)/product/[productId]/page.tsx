import React from "react";
import getProduct from "@/app/actions/getProduct";
import Container from "@/app/components/ui/container";
import ProductsList from "@/app/components/ProductsList";
import getProducts from "@/app/actions/getProducts";
import Gallery from "@/app/components/gallery";
import Info from "@/app/components/info";

const page = async ({ params }: { params: { productId: string } }) => {
  const product = await getProduct(params.productId);
  const products = await getProducts({
    categoryId: product.category.id,
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery */}
            <Gallery images={product.images}/>
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* Info */}
              <Info data={product}/>
            </div>
          </div>
          <hr />
          <ProductsList
            title="Related Items"
            items={products.filter((p) => p.id !== product.id)}
          />
        </div>
      </Container>
    </div>
  );
};

export default page;

export const revalidate = 0;
import { getCategory } from "@/app/actions/getCategories";
import getSizes from "@/app/actions/getSizes";
import getColors from "@/app/actions/getcolors";
import Billboard from "@/app/components/Billboard";
import Container from "@/app/components/ui/container";
import React from "react";
import Filter from "../components/Filter";
import getProducts from "@/app/actions/getProducts";
import NoResults from "@/app/components/ui/noResults";
import ProductCard from "@/app/components/ui/ProductCard";
import MobileFilter from "../components/MobileFilter";

const Page = async ({
  params,
  searchParams,
}: {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}) => {
  const category = await getCategory(params.categoryId);

  const sizes = await getSizes();
  const colors = await getColors();
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilter colors={colors} sizes={sizes} />
            <div className="lg:block hidden">
              <Filter valueKey="sizeid" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Page;

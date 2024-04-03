import { productTypes } from "@/types/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<productTypes[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      colorId: query.colorId,
      isFeatured: query.isFeatured,
    },
  });
  console.log(query.sizeId);

  const res = await fetch(url);
  return res.json();
};

export default getProducts;

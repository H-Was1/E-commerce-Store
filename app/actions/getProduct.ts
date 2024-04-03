import { productTypes } from "@/types/types";

const getProduct = async (id: string): Promise<productTypes> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`;
  const res = await fetch(url);
  return res.json();
};

export default getProduct;

import { CategoryTypes } from "@/types/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<CategoryTypes[]> => {
  const res = await fetch(url);
  return res.json();
};

export default getCategories;

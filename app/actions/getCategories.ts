import { CategoryTypes } from "@/types/types";

const url = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export const getCategories = async (): Promise<CategoryTypes[]> => {
  const res = await fetch(url);
  return res.json();
};

export const getCategory = async (id: string): Promise<CategoryTypes> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`;
  const res = await fetch(url);
  return res.json();
};

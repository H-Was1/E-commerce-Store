import { ColorTypes, productTypes } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;


const getColors = async (): Promise<ColorTypes[]> => {
  const res = await fetch(URL);
  return res.json();
};

export default getColors;

import { BillboardTypes, CategoryTypes } from "@/types/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<BillboardTypes> => {
  const res = await fetch(`${URL}/${id}`);
  return res.json();
};

export default getBillboard;

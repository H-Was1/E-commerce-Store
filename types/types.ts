export interface BillboardTypes {
  id: string;
  label: string;
  imageUrl: string;
}
export interface CategoryTypes {
  id: string;
  name: string;
  billboard: BillboardTypes;
}

export interface productTypes {
  id: string;
  category: CategoryTypes;
  name: string;
  price: string;
  color: ColorTypes;
  size: SizeTypes;
  images: ImageTypes[];
}

export interface ImageTypes {
  id: string;
  url: string;
}

export interface SizeTypes {
  id: string;
  name: string;
  value: string;
}

export interface ColorTypes {
  id: string;
  name: string;
  value: string;
}

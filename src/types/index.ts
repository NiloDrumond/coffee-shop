export const productTags = ['tradicional', 'gelado', 'com leite', 'especial', 'alcoólico'] as const;
export type ProductTag = typeof productTags[number];

export type Product = {
  name: string;
  imgUrl: string;
  tags: ProductTag[];
  price: number;
  description: string;
}

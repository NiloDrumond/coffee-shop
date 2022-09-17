export const productTags = [
  'tradicional',
  'gelado',
  'com leite',
  'especial',
  'alcoólico',
] as const;

export type ProductTag = typeof productTags[number];

export type Product = {
  name: string;
  imgUrl: string;
  tags: ProductTag[];
  price: number;
  description: string;
};

// product_index: quantity;
export type Cart = {
  [index: number]: number | undefined;
};

export type DeliveryInfo = {
  postalCode: string;
  street: string;
  number: number;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
};

export const paymentMethods = [
  'cartão de crédito',
  'cartão de débito',
  'dinheiro',
] as const;
export type PaymentMethod = typeof paymentMethods[number];

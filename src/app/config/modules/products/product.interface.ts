// 1. Create an interface for product which representing a document in MongoDB.

export type Variant = {
    type: string;
    value: string;
  };
  
  export type Inventory = {
    quantity: number;
    inStock: boolean;
  };
  
  export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: Variant[];
    inventory: Inventory;
  };

  export type Order = {
    email: string;
    productId: string;
    price: number;
    quantity: number;
  }

  
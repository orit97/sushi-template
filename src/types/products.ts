export interface IProductsParams{ 
    category_id?: string | null
}

export interface IProduct {
    _id: string,
    name: string,
    ru_name: string,
    price: string,
    image: string,
    isNew: boolean,
    isAdditional: boolean,
    description: string,
    ru_description: string,
    category: string,
    quantity?: number
    weight: string;
    pieces: string;
    discount: string
}
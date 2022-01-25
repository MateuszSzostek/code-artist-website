interface ITagName {
    name: string;
}

interface IProductCard {
    id: string;
    image: any;
    title: string;
    description: string;
    tags: ITagName[];
    slug: string;
}

export type { IProductCard };

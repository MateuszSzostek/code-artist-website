import { v4 as uuidv4 } from "uuid";
import { IProductCard } from "../../components/ProductCard/types";

const productCardsData: IProductCard[] = [
    {
        id: uuidv4(),
        image: {},
        title: "Product Title 1",
        description: "Product Description 1",
        tags: [{ name: "Product 1 Tag 1" }, { name: "Product 1 Tag 2" }],
        slug: "awesome-product-1-slug",
    },
    /*
    {
        id: uuidv4(),
        image: {},
        title: "Product Title 2",
        description: "Product Description 2",
        tags: [{ name: "Product 2 Tag 1" }, { name: "Product 2 Tag 2" }],
        slug: "awesome-product-2-slug",
    },
    {
        id: uuidv4(),
        image: {},
        title: "Product Title 3",
        description: "Product Description 3",
        tags: [{ name: "Product 3 Tag 1" }, { name: "Product 3 Tag 2" }],
        slug: "awesome-product-3-slug",
    },
    */
];

export default productCardsData;

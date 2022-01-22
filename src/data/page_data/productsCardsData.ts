import { v4 as uuidv4 } from "uuid";
import { VectorImages } from "../images/images";
import { IProductCard } from "../../components/ProductCard/types";

const technologyCardsData: IProductCard[] = [
    {
        id: uuidv4(),
        image: {},
        title: "Product Title 1",
        description: "Product Description 1",
        tags: ["Product 1 Tag 1", "Product 1 Tag 2"],
        slug: "awesome-product-1-slug",
    },
    {
        id: uuidv4(),
        image: vector_Unity,
        altAtribute: "Technology Card Alt 2",
    },
    {
        id: uuidv4(),
        image: vector_React,
        altAtribute: "Technology Card Alt 3",
    },
    {
        id: uuidv4(),
        image: vector_ExpressJs,
        altAtribute: "Technology Card Alt 4",
    },
    {
        id: uuidv4(),
        image: vector_Docker,
        altAtribute: "Technology Card Alt 5",
    },
    {
        id: uuidv4(),
        image: vector_Typescript,
        altAtribute: "Technology Card Alt 6",
    },
    {
        id: uuidv4(),
        image: vector_ElectronJs,
        altAtribute: "Technology Card Alt 7",
    },
];

export default technologyCardsData;

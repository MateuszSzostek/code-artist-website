import { v4 as uuidv4 } from "uuid";
import { VectorImages } from "../images/images";
import { IServiceCard } from "../../components/ServiceCard/types";

const { vector_Product, vector_WebDesign, vector_WebDevelopment } =
    VectorImages;

const servicesCardsData: IServiceCard[] = [
    {
        id: uuidv4(),
        image: vector_Product,
        title: "Card Title 1",
        description: "Card Description 1",
    },
    {
        id: uuidv4(),
        image: vector_WebDesign,
        title: "Card Title 2",
        description: "Card Description 2",
    },
    {
        id: uuidv4(),
        image: vector_WebDevelopment,
        title: "Card Title 3",
        description: "Card Description 3",
    },
    {
        id: uuidv4(),
        image: vector_Product,
        title: "Card Title 4",
        description: "Card Description 4",
    },
];

export default servicesCardsData;

import { v4 as uuidv4 } from "uuid";
import { VectorImages } from "../images/images";
import { ITechnologyCard } from "../../components/TechnologyCard/types";

const {
    vector_Docker,
    vector_ExpressJs,
    vector_Gatsby,
    vector_React,
    vector_Typescript,
    vector_Unity,
    vector_ElectronJs,
} = VectorImages;

const technologyCardsData: ITechnologyCard[] = [
    {
        id: uuidv4(),
        image: vector_Gatsby,
        altAtribute: "Card Title 1",
    },
    {
        id: uuidv4(),
        image: vector_Unity,
        altAtribute: "Card Title 1",
    },
    {
        id: uuidv4(),
        image: vector_React,
        altAtribute: "Card Title 1",
    },
    {
        id: uuidv4(),
        image: vector_ExpressJs,
        altAtribute: "Card Title 1",
    },
    {
        id: uuidv4(),
        image: vector_Docker,
        altAtribute: "Card Title 1",
    },
    {
        id: uuidv4(),
        image: vector_Typescript,
        altAtribute: "Card Title 1",
    },
    {
        id: uuidv4(),
        image: vector_ElectronJs,
        altAtribute: "Card Title 1",
    },
];

export default technologyCardsData;

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
        altAtribute: "Technology Card Alt 1",
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

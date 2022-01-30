import { v4 as uuidv4 } from "uuid";
import { VectorImages } from "../images/images";
import { ITechnologyCard } from "../../components/TechnologyCard/types";

const { vector_Facebook, vector_Instagram, vector_Pinterest, vector_Twitter } =
    VectorImages;

const socialIconsData: ITechnologyCard[] = [
    {
        id: uuidv4(),
        image: vector_Facebook,
        altAtribute: "Facebook",
    },
    {
        id: uuidv4(),
        image: vector_Instagram,
        altAtribute: "Instagram",
    },
    {
        id: uuidv4(),
        image: vector_Pinterest,
        altAtribute: "Pinterest",
    },
    {
        id: uuidv4(),
        image: vector_Twitter,
        altAtribute: "Twitter",
    },
];

export default socialIconsData;

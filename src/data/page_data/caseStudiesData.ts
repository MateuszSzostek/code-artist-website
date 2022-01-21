import { v4 as uuidv4 } from "uuid";
import { RasterImages } from "../images/images";
import { IStudyCaseCard } from "../../components/StudyCaseCard/types";

const {
    raster_CaseStudy1,
    raster_CaseStudy2,
    raster_CaseStudy3,
    raster_CaseStudy4,
    raster_CaseStudy5,
    raster_CaseStudy6,
    raster_CaseStudy7,
    raster_CaseStudy8,
} = RasterImages;

const caseStudyCardsData: IStudyCaseCard[] = [
    {
        id: uuidv4(),
        image: raster_CaseStudy1,
        title: "Case Studies 1 Title",
        tag: "Case Studies 1 Tag Text",
    },
    {
        id: uuidv4(),
        image: raster_CaseStudy2,
        title: "Case Studies 2 Title",
        tag: "Case Studies 2 Tag Text",
    },
    {
        id: uuidv4(),
        image: raster_CaseStudy3,
        title: "Case Studies 3 Title",
        tag: "Case Studies 3 Tag Text",
    },
    {
        id: uuidv4(),
        image: raster_CaseStudy4,
        title: "Case Studies 4 Title",
        tag: "Case Studies 4 Tag Text",
    },
    {
        id: uuidv4(),
        image: raster_CaseStudy5,
        title: "Case Studies 5 Title",
        tag: "Case Studies 5 Tag Text",
    },
    {
        id: uuidv4(),
        image: raster_CaseStudy6,
        title: "Case Studies 6 Title",
        tag: "Case Studies 6 Tag Text",
    },
    {
        id: uuidv4(),
        image: raster_CaseStudy7,
        title: "Case Studies 7 Title",
        tag: "Case Studies 7 Tag Text",
    },
    {
        id: uuidv4(),
        image: raster_CaseStudy8,
        title: "Case Studies 8 Title",
        tag: "Case Studies 8 Tag Text",
    },
];

export default caseStudyCardsData;

import { v4 as uuidv4 } from "uuid";
import { IAboutUsPicture, IAboutUsText } from "../../domain/AboutUs/types";

const aboutUsPicturesData: IAboutUsPicture[] = [
    {
        id: uuidv4(),
        image: {},
        gridName: "Picture1",
    },
    {
        id: uuidv4(),
        image: {},
        gridName: "Picture2",
    },
    {
        id: uuidv4(),
        image: {},
        gridName: "Picture3",
    },
    {
        id: uuidv4(),
        image: {},
        gridName: "Picture4",
    },
    {
        id: uuidv4(),
        image: {},
        gridName: "Picture5",
    },
];

const aboutUsTextsData: IAboutUsText[] = [
    {
        id: uuidv4(),
        text: "About Us Text 1",
        gridName: "Text1",
    },
    {
        id: uuidv4(),
        text: "About Us Text 2",
        gridName: "Text2",
    },
    {
        id: uuidv4(),
        text: "About Us Text 3",
        gridName: "Text3",
    },
    {
        id: uuidv4(),
        text: "About Us Text 4",
        gridName: "Text4",
    },
    {
        id: uuidv4(),
        text: "About Us Text 5",
        gridName: "Text5",
    },
];

export { aboutUsPicturesData, aboutUsTextsData };

import { v4 as uuidv4 } from "uuid";
import { IAboutUsPicture, IAboutUsText } from "../../domain/AboutUs/types";
import { myTheme } from "../../MyTheme";

const {
    color: { black, white_1 },
} = myTheme;

const aboutUsPicturesData: IAboutUsPicture[] = [
    {
        id: uuidv4(),
        image: {},
        gridName: "Picture1",
        isSquare: true,
    },
    {
        id: uuidv4(),
        image: {},
        gridName: "Picture2",
        isSquare: true,
    },
    {
        id: uuidv4(),
        image: {},
        gridName: "Picture3",
        isSquare: true,
    },
    {
        id: uuidv4(),
        image: {},
        gridName: "Picture4",
        isSquare: true,
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
        backgroundColor: black,
        color: white_1,
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

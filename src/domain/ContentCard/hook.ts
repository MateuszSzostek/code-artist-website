import { useEffect, useState } from "react";
import { categriesLookupTable } from "./categories";
import { LayoutType, AmountOfPictures } from "./types";

const useContentCard = (
    layout: number,
    imagesAmount: number,
    category: string
) => {
    const [frameColor, setFrameColor] = useState<string>("");
    const [numberOfPictures, setNumberOfPictures] =
        useState<AmountOfPictures>(1);
    const [layoutType, setLayoutType] = useState<LayoutType>(1);
    useEffect(() => {
        //@ts-ignore
        setFrameColor(categriesLookupTable[category]);
        setNumberOfPictures(imagesAmount as AmountOfPictures);
        setLayoutType(layout as LayoutType);
    });

    return { frameColor, layoutType, numberOfPictures };
};

export default useContentCard;

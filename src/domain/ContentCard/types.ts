interface IContentCard {
    title: string;
    subtitle: string;
    text: string;
    pictures: any[];
    category: string;
    layout: number;
    source: string;
    date: any;
}

type AmountOfPictures = 1 | 2 | 3 | 4;
type LayoutType = 1 | 2 | 3;

interface IPictures {
    layout: LayoutType;
    imagesAmount: AmountOfPictures;
}

interface IWrapper {
    imagesAmount: AmountOfPictures;
}

interface ICategory {
    category: string;
}

interface ITitleTop extends ICategory {}
interface ITitleBottom extends ICategory {}
interface IText extends ICategory {}

export type {
    IContentCard,
    IPictures,
    AmountOfPictures,
    LayoutType,
    IWrapper,
    ITitleTop,
    ITitleBottom,
    IText,
};

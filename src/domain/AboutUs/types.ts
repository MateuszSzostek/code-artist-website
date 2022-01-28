interface IAboutUsPicture {
    id: string;
    image: any;
    gridName: string;
    isSquare?: boolean;
}

interface IAboutUsText {
    id: string;
    text: string;
    gridName: string;
    backgroundColor?: string;
    color?: string;
}

export type { IAboutUsPicture, IAboutUsText };

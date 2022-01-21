interface IIcon extends IPicture {
    image: string;
    alt: string;
}

interface IPicture {
    width: string;
    height: string;
    color: string;
}

export type { IIcon, IPicture };

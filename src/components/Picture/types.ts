interface IImageWrapper {
    color: string;
    gridArea: string;
}
interface IPicture extends IImageWrapper {
    gatsbyImageData: any;
    alt: string;
    gridArea: string;
}
interface IImage {}

export type { IImageWrapper, IPicture };

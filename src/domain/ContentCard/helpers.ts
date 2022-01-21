import { css } from "styled-components";

const cardsWidths = {
    1: "500px",
    2: "700px",
    3: "800px",
    4: "900px",
};

const categriesLookupTable = {
    POLITICS: "#c4c17d",
    SCIENCE: "#a67dc4",
    ENTERTAINMENT: "#7d92c4",
};

const fontColorsLookupTable = {
    POLITICS: "#969360",
    SCIENCE: "#7e6093",
    ENTERTAINMENT: "#5d6c91",
};

const onePicture = css`
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    max-width: ${cardsWidths[1]};
`;

const twoPicturesFirstLayout = css`
    grid-template-columns: 1fr;
    grid-template-rows: 50% 50%;
    max-width: ${cardsWidths[2]};
    grid-template-areas:
        "grid-image-0"
        "grid-image-1";
    max-height: 950px;
`;
const twoPicturesSecondLayout = css`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    max-width: ${cardsWidths[2]};
    grid-template-areas: "grid-image-0 grid-image-1";
`;

const threePicturesFirstLayout = css`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 67% 33%;
    max-width: ${cardsWidths[3]};
    grid-template-areas:
        "grid-image-0 grid-image-0"
        "grid-image-1 grid-image-2";
    max-height: 750px;
`;
const threePicturesSecondLayout = css`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 33% 67%;
    max-width: ${cardsWidths[3]};
    grid-template-areas:
        "grid-image-0 grid-image-1"
        "grid-image-2 grid-image-2";
    max-height: 750px;
`;

const fourPicturesFirstLayout = css`
    grid-template-columns: 50% 50%;
    grid-template-rows: 50% 50%;
    max-width: ${cardsWidths[4]};
    grid-template-areas:
        "grid-image-0 grid-image-1"
        "grid-image-2 grid-image-3";
    max-height: 750px;
`;
const fourPicturesSecondLayout = css`
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 67% 33%;
    max-width: ${cardsWidths[4]};
    grid-template-areas:
        "grid-image-0 grid-image-0 grid-image-0"
        "grid-image-1 grid-image-2 grid-image-3";
    max-height: 750px;
`;

const fourPicturesThirdLayout = css`
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 33% 67%;
    max-width: ${cardsWidths[4]};
    grid-template-areas:
        "grid-image-0 grid-image-1 grid-image-2"
        "grid-image-3 grid-image-3 grid-image-3";
    max-height: 750px;
`;

const gridTypes = {
    1: {
        1: onePicture,
        2: twoPicturesFirstLayout,
        3: threePicturesFirstLayout,
        4: fourPicturesFirstLayout,
    },
    2: {
        1: onePicture,
        2: twoPicturesSecondLayout,
        3: threePicturesSecondLayout,
        4: fourPicturesSecondLayout,
    },
    3: {
        1: onePicture,
        2: twoPicturesFirstLayout,
        3: threePicturesFirstLayout,
        4: fourPicturesThirdLayout,
    },
};

export { gridTypes, categriesLookupTable, cardsWidths, fontColorsLookupTable };

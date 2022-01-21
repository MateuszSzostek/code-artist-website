import { v4 as uuidv4 } from "uuid";

const categories = {
    science: "SCIENCE",
    politics: "POLITICS",
    entertainment: "ENTERTAINMENT",
};

const dummyCardsData = [
    {
        id: uuidv4(),
        title: "Dummy Title",
        subtitle: "Dummy subtitle",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit tortor sit amet est posuere, id volutpat lectus blandit. Nulla at massa a tellus pellentesque accumsan. Aenean velit lacus, bibendum ut aliquet id, volutpat sit amet ligula. Ut ultrices quam id tempus accumsan. In pharetra scelerisque sapien sed faucibus. Aenean auctor vestibulum ex in scelerisque. Vivamus at pretium dui, sit amet dignissim lacus. Nunc vitae pretium lorem, in varius eros.",
        pictures: [],
        category: categories.science,
        layout: 1,
    },
    {
        id: uuidv4(),
        title: "Dolor sit amet consectetur adipiscing elit",
        subtitle:
            "Nam suscipit tortor sit amet est posuere, id volutpat lectus blandit. Nulla at massa a tellus pellentesque accumsan.",
        text:
            "Nulla at massa a tellus pellentesque accumsan. Aenean velit lacus, bibendum ut aliquet id, volutpat sit amet ligula. Ut ultrices quam id tempus accumsan. In pharetra scelerisque sapien sed faucibus. Aenean auctor vestibulum ex in scelerisque. Vivamus at pretium dui, sit amet dignissim lacus. Nunc vitae pretium lorem, in varius eros.",
        pictures: [],
        category: categories.politics,
        layout: 2,
    },
    {
        id: uuidv4(),
        title:
            " Aenean velit lacus, bibendum ut aliquet id, volutpat sit amet ligula.",
        subtitle:
            " Ut ultrices quam id tempus accumsan. In pharetra scelerisque sapien sed faucibus. Aenean auctor vestibulum ex in scelerisque.",
        text:
            "Volutpat sit amet ligula. Ut ultrices quam id tempus accumsan. In pharetra scelerisque sapien sed faucibus. Aenean auctor vestibulum ex in scelerisque. Vivamus at pretium dui, sit amet dignissim lacus. Nunc vitae pretium lorem, in varius eros.",
        pictures: [],
        category: categories.entertainment,
        layout: 3,
    },
];

export default dummyCardsData;

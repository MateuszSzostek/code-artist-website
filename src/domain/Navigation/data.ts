import { v4 as uuidv4 } from "uuid";

const navLinksData = [
    {
        id: uuidv4(),
        text: "Services",
        slug: "/services",
    },
    {
        id: uuidv4(),
        text: "Technologies",
        slug: "/technologies",
    },
    {
        id: uuidv4(),
        text: "Case Study",
        slug: "/case-study",
    },
    {
        id: uuidv4(),
        text: "Insights",
        slug: "/insights",
    },
    {
        id: uuidv4(),
        text: "About",
        slug: "/about",
    },
];

export { navLinksData };

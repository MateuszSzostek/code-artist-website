import { useState } from "react";
import { VectorImages } from "../../data/images/images";

const { vector_Menu, vector_Close } = VectorImages;

const useMenuButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false);
    const [menuIcon, setMenuIcon] = useState(vector_Menu);

    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) setMenuIcon(vector_Close);
        else setMenuIcon(vector_Menu);
    };

    return { menuIcon, toogleMenu };
};

export default useMenuButton;

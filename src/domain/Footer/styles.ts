import styled from "styled-components";
import { IButton } from "../../components/Button/types";
import { myTheme } from "../../MyTheme";
import { IP } from "../../components/P";
import { IH2 } from "../../components/H2/types";
import { IFlexCol } from "../../components/FlexCol/types";
import { IContainer } from "../../components/Container/types";
import { IGrid } from "../../components/Grid/types";
import { IInputField } from "../../components/InputField/types";
import { ITextareaInputField } from "../../components/Textarea/types";

const {
    color: { white_1, gray },
    fontSize: { medium_1, huge_1 },
    breakPoints: { desktop },
    gridType: { double, triple },
} = myTheme;

const Styles = {
    FooterGrid: styled.div`
        display: grid;
        grid-template-columns: 0.5fr 0.5fr 1fr 1fr;
        grid-template-rows: auto auto auto auto;
        gap: 0px 0px;
        grid-template-areas:
            "FollowUsArea FollowUsArea FollowUsArea SocialMediaArea"
            "ContactUsArea ContactUsArea ContactUsArea FreeArea"
            "ContactFormArea ContactFormArea ContactFormArea FreeArea"
            "UsefullLinksArea UsefullLinksArea UsefullLinksArea FreeArea";
        width: ${desktop};
        padding-left: 15px;
        padding-right: 15px;
    `,
    FooterWrapper: styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
};

const styles_flexColProperties: IFlexCol = {
    flexColProperties: {},
};

const styles_footerText: IP = {
    paragraphStyles: {
        size: medium_1,
        color: white_1,
        width: "700px",
        verticalMargin: "0rem",
    },
};

const styles_footerTitleText: IH2 = {
    headerStyles: {
        size: huge_1,
        color: white_1,
        underline: true,
    },
};

const styles_footerLinksTitle: IH2 = {
    headerStyles: {
        size: huge_1,
        color: white_1,
        underline: true,
        margin: "1rem 0 1rem 0",
    },
};

const styles_containerProperties: IContainer = {
    containerProperties: {
        verticalPadding: "1rem",
        backgroundColor: gray,
        fullWidth: true,
        centerContent: true,
    },
};

const styles_gridProperties: IGrid = {
    gridProperties: {
        position: "relative",
        gridType: double,
        margin: "3rem 0 0 0",
    },
};
const styles_footerLinkGridProperties: IGrid = {
    gridProperties: {
        position: "relative",
        gridType: triple,
    },
};

const styles_nameFieldProperties: IInputField = {
    inputFieldProperties: {
        id: "name",
        placeholderText: "Name",
        topLabelText: "Name",
        bottomLabelText: "Empty",
    },
};

const styles_emailFieldProperties: IInputField = {
    inputFieldProperties: {
        id: "email",
        placeholderText: "Email",
        topLabelText: "Email",
        bottomLabelText: "Empty",
    },
};

const styles_phoneFieldProperties: IInputField = {
    inputFieldProperties: {
        id: "phone",
        placeholderText: "Phone Number",
        topLabelText: "Phone Number Optional",
        bottomLabelText: "Empty",
    },
};

const styles_TextareaFieldProperties: ITextareaInputField = {
    textAreaInputFieldProperties: {
        id: "message",
        placeholderText: "Message",
        topLabelText: "Message",
        bottomLabelText: "Empty",
    },
};

const styles_buttonProperties: IButton = {
    buttonProperties: {
        margin: "20px 0 30px 0",
    },
};

export default Styles;
export {
    styles_footerText,
    styles_footerTitleText,
    styles_containerProperties,
    styles_flexColProperties,
    styles_gridProperties,
    styles_nameFieldProperties,
    styles_emailFieldProperties,
    styles_phoneFieldProperties,
    styles_TextareaFieldProperties,
    styles_buttonProperties,
    styles_footerLinkGridProperties,
    styles_footerLinksTitle,
};

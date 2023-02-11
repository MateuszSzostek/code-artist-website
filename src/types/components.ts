import React from "react";

interface ICTA {
  to: string;
  className?: string;
}

interface IIcon {
  width: number;
  height: number;
}

interface ISectionColored {
  background: string;
  className?: string;
}

interface ISectionImage {
  backgroundImage: IGatsbyImage;
  className?: string;
}

interface IContentCard {
  id: string | number;
  title?: string;
  description?: string;
  image?: IGatsbyImage;
  ImageComponent?: JSX.Element;
  altImg?: string;
  action?: {
    name: string;
    cta: ICTA;
  };
  tags?: string[];
}

interface IPill {
  label: string;
}

interface IButton {
  onClick?: () => void;
}

interface IAppereanceButton {
  className?: string;
}

interface IBurger {
  opened: boolean;
}

interface IMobileNav {
  opened: boolean;
}

interface ISVGIcon {
  width: number;
  height: number;
}

interface ITextInput {
  label?: string;
  placeholder?: string;
  error?: string;
  id: string;
  name: string;
}

interface IGatsbyImage {}

export type {
  ICTA,
  IButton,
  IIcon,
  ISectionColored,
  ISectionImage,
  IContentCard,
  IBurger,
  IMobileNav,
  ISVGIcon,
  IPill,
  IAppereanceButton,
  ITextInput,
};

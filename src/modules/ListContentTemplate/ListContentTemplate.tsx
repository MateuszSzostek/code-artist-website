import React from "react";
import "./styles.css";
import SectionColored from "../../components/Section/Colored";
import { IContentCard } from "../../types/components";
import ContentCard from "../../components/Card/Content";

interface IListContentTemplate {
  cards: IContentCard[];
}

const ListContentTemplate = ({ cards }: IListContentTemplate) => {
  return (
    <>
      <SectionColored
        className="list-content-template__section z-0 flex flex-column"
        background="#000000"
      >
        {cards.map((card) => (
          <ContentCard key={card?.id} {...card} />
        ))}
      </SectionColored>
    </>
  );
};

export default ListContentTemplate;

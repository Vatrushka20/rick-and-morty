import React from "react";
import "./CharactersPage.scss";
import Image from "next/image";
import charactersBanner from "src/assets/characters-page-banner.png";
import { CharacterCardType } from "@/types/CharacterCard.type";
import CharacterCard from "@/components/CharacterCard/CharacterCard";

const getCharacters = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }
  return data.results;
};
const CharactersPage = async () => {
  const data: CharacterCardType[] = await getCharacters();

  return (
    <div className="characters-page">
      <div className="characters-page__banner">
        <Image src={charactersBanner} alt="characters-banner" />
      </div>
      <div className="characters-list">
        {data.map((item) => (
          <CharacterCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;

import React from "react";
import { CharacterCardType } from "@/types/CharacterCard.type";
import Image from "next/image";
import Link from "next/link";
import "./CharacterCard.scss";

const CharacterCard = ({ id, image, name, species }: CharacterCardType) => {
  return (
    <Link href={`/characters/${id}`}>
      <div className="characters-card">
        <div className="image-container">
          <Image
            className="image-container__image"
            src={image}
            alt={name}
            fill
          />
        </div>
        <h2 className="characters-card__name">{name}</h2>
        <p className="characters-card__species">{species}</p>
      </div>
    </Link>
  );
};

export default CharacterCard;

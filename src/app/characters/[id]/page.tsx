import React, { FC } from "react";
import { GetCharacter } from "@/app/api/getCharacter";
import Image from "next/image";
import Link from "next/link";
import "./page.scss";

type CharacterIdParams = {
  params: {
    id: number;
  };
};
const CharacterId: FC<CharacterIdParams> = async ({ params: { id } }) => {
  const { gender, image, location, name, origin, species, status, episode } =
    await GetCharacter(id);
  return (
    <div className="full-character">
      <Link href={"/characters"}>
        <button className="button">&larr; Go Back</button>
      </Link>
      <div className="character-details">
        <div className="character-details__header">
          <div className="image-container">
            <Image
              className="image-container__image"
              src={image}
              alt={name}
              fill
            />
          </div>
          <h2 className="character-name">{name}</h2>
        </div>

        <div className="character-details__summary">
          <div className="information">
            <h2 className="character-title">Information</h2>
            <div className="states">
              <h3 className="states__title">Gender</h3>
              <p className="states__subtitle">{gender}</p>
            </div>
            <div className="states">
              <h3 className="states__title">Status</h3>
              <p className="states__subtitle">{status}</p>
            </div>
            <div className="states">
              <h3 className="states__title">Specie</h3>
              <p className="states__subtitle">{species}</p>
            </div>
            <div className="states">
              <h3 className="states__title">Origin</h3>
              <p className="states__subtitle">{origin.name}</p>
            </div>
            <div className="states">
              <h3 className="states__title">Location</h3>
              <p className="states__subtitle">{location.name} &rarr;</p>
            </div>
          </div>

          <div className="episodes">
            <h2 className="character-title">Episodes</h2>
            {/*{episode.map((item) => (*/}
            {/*  <div className="states">*/}
            {/*    <h3 className="states__title">{item}</h3>*/}
            {/*    <p className="states__subtitle"> &rarr;</p>*/}
            {/*  </div>*/}
            {/*))}*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterId;

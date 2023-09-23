import { CharacterFullPropsType } from "@/types/CharacterFullProps.type";

export const GetCharacter = async (
  id: number,
): Promise<CharacterFullPropsType> => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

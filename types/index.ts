import { MouseEventHandler } from "react";

export interface CatProps {
  origin: string;
  image_link: string;
  family_friendly: number;
  shedding: number;
  general_health: number;
  playfulness: number;
  meowing: number;
  children_friendly: number;
  stranger_friendly: number;
  grooming: number;
  intelligence: number;
  other_pets_friendly: number;
  min_weight: number;
  max_weight: number;
  min_life_expectancy: number;
  max_life_expectancy: number;
  name: string;
  id: string;
}

export interface FilterProps {
  name?: string;
  limit?: number;
  origin?: string;
  playfulness?: number;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CatCardProps {
  name: string;
  general_health: number;
  playfulness: number;
  meowing: number;
  max_weight: number;
  grooming: number;
  max_life_expectancy: number;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

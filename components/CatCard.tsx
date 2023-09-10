"use client";

import { useState } from "react";
import Image from "next/image";
import { generateCatImageUrl } from "@utils";
import { CatProps } from "@types";
import CustomButton from "./CustomButton";
import CatDetails from "./CatDetails";

interface CatCardProps {
  cat: CatProps;
}

const CatCard = ({ cat }: CatCardProps) => {
  const { name, origin } = cat;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{name}</h2>
      </div>

      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold"></p>

      <div className="relative w-full h-40  my-3 object-contain">
        <Image
          src={generateCatImageUrl(cat)}
          alt="cats"
          fill
          priority
          className="object-contain "
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex justify-center items-center group-hover:invisible w-full text-grey">
          <div className="car-card__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="car-card__icon-text">{origin}</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CatDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        cat={cat}
      />
    </div>
  );
};

export default CatCard;

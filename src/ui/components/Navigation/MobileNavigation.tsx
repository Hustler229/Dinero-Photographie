'use client'

import { useState } from "react";
import clsx from "clsx";
import { TfiClose, TfiMenu } from "react-icons/tfi";
import Logo from "@/ui/design-system/logo/logo";
import NavLink from "./navLink";

 const MobileNavigation = () => {
  const [visibility, setVisibility] = useState(false);

  const visible = () => {
    setVisibility(!visibility);
  };
  let icon = null
  if (visibility) {
    icon = <TfiClose className="absolute text-primary  w-[20px] h-[20px] top-[15px] left-[15px]" />
  } else {
    icon = <TfiMenu className="absolute text-primary  w-[20px] h-[20px] top-[15px] left-[15px]" />
  }

  return (
    <>
      <div className=" flex flex-row justify-between items-center mx-[50px] pt-[65px] transition-all">
        <div>
          <Logo size="small" />
        </div>
        <button onClick={visible}>
            <div className="relative w-[50px] h-[50px] rounded-full shadow-2xl   bg-white transition-all ">
              {icon}
            </div>
          </button>
      </div>
      <div className={clsx("flex flex-col items-center gap-8 py-6 my-5 shadow-2xl transition ", visibility ? '' : 'hidden')}>
        <NavLink id="home">Acceuil</NavLink>
        <NavLink id="about">A Propos</NavLink>
        <NavLink id="services">Services</NavLink>
        <NavLink id="portfolio">Galerie</NavLink>
        <NavLink id="clients">Clients</NavLink>
      </div>
    </>
  );
};

export default MobileNavigation

'use client'
import Logo from "@/ui/design-system/logo/logo";
import NavLink from "./navLink";

 const DesktopNavigation = () => {
  return (
    <>
      <div className=" pt-[65px] pl-[165px]  flex gap-[100px] items-center ">
        <div>
          <Logo size="small"/>
        </div>
        <div className="flex gap-[50px] items-center">
        <NavLink id="home">Acceuil</NavLink>
        <NavLink id="about">A Propos</NavLink>
        <NavLink id="services">Services</NavLink>
        <NavLink id="portfolio">Galerie</NavLink>
        <NavLink id="clients">Clients</NavLink>
        </div>
      </div>
    </>
  );
};
export default DesktopNavigation
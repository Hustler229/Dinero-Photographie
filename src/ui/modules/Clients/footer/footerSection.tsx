'use client'
import NavLink from "@/ui/components/Navigation/navLink"
import Button from "@/ui/design-system/Button/button"
import Logo from "@/ui/design-system/logo/logo"
import clsx from "clsx"
import { FaFacebookF, FaWhatsapp } from "react-icons/fa"

const FooterSection = () => {
    return (
        <>
                       <hr className="text-secondary" />

            <div className="flex flex-col gap-10 items-center justify-center my-11">
                <div>
                    <Logo size="large" />
                </div>
                <div className={clsx('flex sm:gap-5 md:flex-row flex-col justify-between gap-10 items-center')}>
                    <NavLink id="home">Acceuil</NavLink>
                    <NavLink id="about">A Propos</NavLink>
                    <NavLink id="services">Services</NavLink>
                    <NavLink id="portfolio">Galerie</NavLink>
                    <NavLink id="clients">Clients</NavLink>
                </div>
                <div className="flex gap-5 justify-between" id="contact">
                    <Button href="https://www.facebook.com/profile.php?id=100076569251213" icon> <FaFacebookF /> </Button>
                    <Button href="https://wa.me/+22951837263" icon> <FaWhatsapp /> </Button>
                </div>
            </div>
            <div>
                <hr className="text-secondary" />
                <p className="text-white text-center my-5">
                    Make by HUSTLER - DEV
                </p>
            </div>
        </>
    )
}

export default FooterSection
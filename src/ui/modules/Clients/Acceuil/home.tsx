'use client'
import Button from "@/ui/design-system/Button/button";
import Text from "@/ui/design-system/Typography/Typography";
import clsx from "clsx";
import Image from "next/image"


 const HomeSection = ()=>{

    return (
        <div className="flex justify-between items-center gap-7 my-20 " id="home">
            <div className="flex flex-col items-start gap-10">
                <Text variant="lead" tag="p">
                    Bienvenue,
                </Text>
                <Text variant="lead">
                    Abraham ALANKPOEDJA
                </Text>
                <Text variant="body-md">
                    Photographe Professionnel, PDG du studio DINERO Photography
                </Text>
                <Button variant="secondary" href="#contact">
                    Contactez-moi
                </Button>
            </div>
            <div className={clsx("3xl:flex hidden")}>
                <Image src={'/images/camera.png'} alt="camera-image" width={400} height={400}/>
            </div>
        </div>
    )
}
export default HomeSection
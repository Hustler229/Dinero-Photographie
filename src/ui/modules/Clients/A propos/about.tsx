'use client'
import { AboutSource } from "@/sources/aboutSource";
import { Title } from "@/ui/components/title/title";
import Text from "@/ui/design-system/Typography/Typography";
import Image from "next/image";
 const AboutSection = () => {
    const content = AboutSource
    return (
        <div className="w-full" id="about">
            <Title>Qui suis-je ?</Title>
            <div className="xl:grid xl:grid-cols-3 xl:gap-[100px] xl:my-10 xl:items-center flex flex-col gap-10 items-center">
                <div className="xl:col-span-2">
                    <Text variant="body">
                        <Text tag="span" variant="subtitle">{content.aboutName}</Text>,{content.aboutText}</Text>
                </div>
                <div className=" ">
                    <Image src={content.aboutImage} alt="dinero-photo" width={350} height={700} className="rounded-[10px] shadow-xl" />
                </div>
            </div>
        </div>
    )
}

export default AboutSection
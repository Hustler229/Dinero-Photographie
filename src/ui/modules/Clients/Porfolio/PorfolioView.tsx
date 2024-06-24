'use client'
import { Title } from "@/ui/components/title/title"
import clsx from "clsx"
import Portfolio from "./Porfolio"
import Text from "@/ui/design-system/Typography/Typography"

 const OurPortfolio = ()=>{
    return(
        <>
            <div id="portfolio">
                <div>
                    <Title>
                        Notre Galerie
                    </Title>
                </div>
                <div className={clsx('md:flex-row md:justify-between md:gap-7 md:items-end flex flex-col gap-8 justify-between items-start')}>
                    <Text className="max-w-[436px]">Découvrez nos meilleurs collaborations en quelques clichés</Text>
                    <Text tag="span" variant="body-sm" color="gray">(Veuillez cliqué sur les images pour mieux les visualiser)</Text>
                </div>
                <div className="max-w-[1300px] shadow-2xl  m-10">
                    <Portfolio/>
                </div>
            </div>
        </>
    )
}

export default OurPortfolio
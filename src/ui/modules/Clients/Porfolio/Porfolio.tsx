'use client'
import { ImagesUrl } from "@/sources/porfolioSource"
import ImageCarousel from "@/ui/components/porfolio/porfolioList"

const images = ImagesUrl
const Portfolio =()=>{
    return (
    <>

        <ImageCarousel images={images}/>
        
    </>
)
} 

export default Portfolio
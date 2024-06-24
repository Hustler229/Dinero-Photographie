'use client'
import Text from "@/ui/design-system/Typography/Typography";
import clsx from "clsx";
import Image from "next/image";
const ServiceList = [
    {
        name: 'Photo Traitée',
        description: 'Vous cherchez des images impeccables et soigneusement retouchées ? Mon service de photo traitée vous garantit des clichés d’une qualité exceptionnelle, avec des couleurs équilibrées et des détails sublimés.',
        image: '/images/traitement.png'

    },
    {
        name: 'Photo Portrait',
        description: 'Pour des portraits authentiques et captivants, faites confiance à notre expertise. Nous mettons en valeur votre personnalité et votre beauté naturelle à travers des séances de portrait uniques.',
        image: '/images/protrait.png'

    },
    {
        name: 'Pack Shoot',
        description: 'Besoin d’un ensemble complet d’images pour votre projet ? Notre pack shoot vous offre une variété de photos, du portrait au paysage, pour répondre à tous vos besoins visuels.',
        image: '/images/album-photo.png'

    },
    {
        name: 'Evènements',
        description: 'Que ce soit un mariage, une fête d’anniversaire ou un événement d’entreprise, nous sommes là pour capturer chaque moment précieux. Notre approche discrète et professionnelle garantit des souvenirs inoubliables.',
        image: '/images/gens.png'

    },
    {
        name: 'Make-Up',
        description: 'Notre équipe de maquilleurs professionnels est prête à sublimer votre apparence pour vos séances photo. Un maquillage adapté à votre style et à l’occasion, pour des images éblouissantes.',
        image: '/images/makeUp.png'

    }
]

 const Services = () => {
    const Data = ServiceList.map((data)=>(
        <>
            <div className="flex flex-col justify-center text-center items-center gap-5 border border-secondary bg-secondary rounded-[10px] p-3 transition-all shadow-lg ">
                    <div className=" w-[15px] h-[15px] bg-white rounded-full shadow-inner"></div>
                    <div>
                        <Image src={data.image} alt="image" width={70} height={70}/>
                    </div>
                    <div>
                        <Text variant="lead-sm" className="  ">
                            {data.name}
                        </Text>
                    </div>
                    <div>
                        <Text tag="p" variant="body-sm" color="gray">
                            {data.description}
                        </Text>
                    </div>
                </div>  
        </>
    ))
    return (
        <>
            <div className={clsx('4xl:grid 4xl:grid-cols-5 4xl:gap-10 flex flex-col gap-10 items-center justify-center')}>
                {Data}
            </div>
        </>
    )
}

export default Services
/* eslint-disable react/no-unescaped-entities */
'use client'
import { Title } from "@/ui/components/title/title"
import Button from "@/ui/design-system/Button/button"
import Text from "@/ui/design-system/Typography/Typography"

import { FaFacebookF, FaWhatsapp } from "react-icons/fa"

 const ContactSection = () => {
    return (
        <>
            <div id="contact">
                <div>
                    <Title>
                        Contactez-nous
                    </Title>
                </div>
                <div>
                    <Text variant="lead" className="max-w-[512px]">
                        Faites nous savoir si vous voulez discuter avec nous d'une collaboration 
                    </Text>
                </div>
                <div className=" m-10 ">
                    
                </div>
            </div>
        </>
    )
}

export default ContactSection
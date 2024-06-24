'use client'
import FeedBack from "@/ui/components/clients/clients"
import { Title } from "@/ui/components/title/title"
import Text from "@/ui/design-system/Typography/Typography"

 const FeedBackSection = ()=>{
return (
    <>
        <div id="clients">
            <Title>
                Nos Clients
            </Title>
        </div>
        <div className="flex flex-col gap-10 justify-between items-center">
            <div className="max-w-[288px] mx-10 text-center ">
                <Text>
                    Nos Clients parlent de nous
                </Text>
            </div>
            <div>
                <FeedBack/>
            </div>
        </div>
    </>
)
}

export default FeedBackSection
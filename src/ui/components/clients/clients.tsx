'use client'
import { ClientFeedback } from "@/sources/CLientsFeedback";
import Text from "@/ui/design-system/Typography/Typography";
import clsx from "clsx";



const ClientSaying = ClientFeedback

const FeedBack = () => {
    const feeds = ClientSaying.map((data) => (
        <>
            <div className="bg-secondary p-5 max-w-[400px] flex flex-col gap-5 rounded-[10px] shadow-2xl backdrop-blur-2xl ">
                <Text variant="body-lg" tag="p">
                    {data.advice}
                </Text>
                <Text variant="body" tag="p" color="gray" className="text-end">
                    {data.name}
                </Text>
            </div>
        </>
    ))
    return (
        <>
            <div className={clsx('lg:grid lg:grid-cols-3 lg:gap-5 flex flex-col gap-10 justify-between items-center')}>
                {feeds}
            </div>
        </>
    );
}

export default FeedBack

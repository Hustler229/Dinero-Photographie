import Text from "@/ui/design-system/Typography/Typography"

interface Props{
    children:React.ReactNode
}

export const Title = ({children}:Props)=>{
    return(
        <div className="py-[20px]">
            <Text variant="lead-lg" tag="p" color="blue">
                {children}
            </Text>
            <div className="w-[50px] border-b-2 border-blue pt-[10px] "></div>
        </div>
    )
}
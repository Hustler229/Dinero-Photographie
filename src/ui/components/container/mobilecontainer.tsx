interface Props{
    children : React.ReactNode
}
export const MobileContainer = ({children}:Props)=>{
    return (
        <div className=" mx-[50px] my-auto ">
            {children}
        </div>
    )
}
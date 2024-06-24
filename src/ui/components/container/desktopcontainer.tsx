interface Props{
    children : React.ReactNode
}
export const DesktopContainer = ({children}:Props)=>{
    return (
        <div className=" mx-[150px] my-[50px] ">
            {children}
        </div>
    )
}
'use client'
import { MobileContainer } from "./mobilecontainer"
import { DesktopContainer } from "./desktopcontainer"
interface Props {
    children: React.ReactNode
    className?: string
}
 const Container = ({ children, className }: Props) => {
    return (
        <>
            <div className="xs:hidden ">
                <MobileContainer>
                    {children}
                </MobileContainer>
            </div>
            <div className="xs:grid hidden">
                <DesktopContainer>
                    {children}
                </DesktopContainer>
            </div>
        </>
    )
}

export default Container
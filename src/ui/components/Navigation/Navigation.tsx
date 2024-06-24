
'use client'

import DesktopNavigation from "./DesktopNavigation"
import MobileNavigation from "./MobileNavigation"

 const Navigation = () => {

    return (
        <>
            <div className="xs:hidden ">
                <MobileNavigation/>
            </div>
            <div className=" xs:flex hidden ">
                <DesktopNavigation/>
            </div>
        </>
    )
}

export default Navigation
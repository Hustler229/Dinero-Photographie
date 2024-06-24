'use client'
import Image from "next/image";

interface Props {
    size?: 'small' | 'large'
}

 const Logo = ({ size = 'small' }: Props) => {
    let heightVariant = 0
    let widthVariant = 0

    switch (size) {
        case 'small':
            heightVariant = 44
            widthVariant= 127
            break;
        case 'large':
            heightVariant = 60
            widthVariant = 160
            break;

    }

    return (<>
        <Image src={'/svg/logo.svg'} alt="logo" width={widthVariant} height={heightVariant}/>
    </>)
}

export default Logo
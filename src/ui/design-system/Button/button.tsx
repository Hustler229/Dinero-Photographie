'use client'
import clsx from "clsx"
import { FiLoader } from "react-icons/fi"

interface Props {
    children: React.ReactNode
    variant?: 'primary' | 'secondary' |'default'
    icon?: boolean
    type?:'submit'|'button'
    className?:string
    href?:string
    isLoading?:boolean
}

 const Button = ({ children, variant = 'primary', icon = false,type='button' ,className,href='',isLoading}: Props) => {

    let btnVariant = ''

    if (icon) {
        return (
            <>
                <a href={href}>
                    <button className={clsx(' py-[16px] px-[16px] border border-gray rounded-full  text-gray text-center items-center',className)}>
                        {children}
                    </button>
                </a>
            </>
        )
    }
    const load = <div className="px-[40px] py-[10px] animate-spin"><FiLoader/></div>
    switch (variant) {
        case 'primary':
            btnVariant = 'btn-color text-body-sm px-[30px] py-[15px] rounded-[5px] text-white '
            break;
        case 'secondary':
            btnVariant = ' text-body-sm border border-white px-[45px] py-[15px] rounded-[5px] text-white'
            break;
        case 'default':
            btnVariant = ' text-body-sm border border-secondary bg-secondary px-[15px] py-[5px] rounded-[5px] text-white '
            break;
    }

    return(
        <>
            <a href={href}>
                <button className={clsx(btnVariant,className,)} type={type} disabled={isLoading}>
                    {isLoading ? load : children}
                </button>
            </a>
        </>
    )
}

export default Button
import logo from '../../public/BVS_logo.svg';
import Image from 'next/image'

export default function Header() {
    return (
        <div className="h-16 flex items-end pl-16 bg-transparent">
            <div className="w-[428px]">
                <Image src={logo} alt="BVS Logo" />
            </div>
        </div>
    )
}
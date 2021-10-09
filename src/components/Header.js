import logo from '../../public/BVS_logo.svg';
import logoIcon from '../../public/logo-icon.svg';
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <div className="h-16 flex items-end pl-0 md:pl-16 bg-transparent">
            <Link href="/" passHref>
                <div>
                    <div className="hidden md:block w-auto md:w-[428px] hover:cursor-pointer">
                        <Image src={logo} alt="BVS Logo" />
                    </div>
                    <div className="block md:hidden w-auto md:w-[428px] hover:cursor-pointer">
                        <Image src={logoIcon} alt="BVS Logo" />
                    </div>
                </div>
            </Link>
        </div>
    )
}
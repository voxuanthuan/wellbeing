import logo from '../../public/BVS_logo.svg';
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <div className="h-16 flex items-end pl-16 bg-transparent">
            <Link href="/" passHref>
                <div className="w-[428px] hover:cursor-pointer">
                    <Image src={logo} alt="BVS Logo" />
                </div>
            </Link>
        </div>
    )
}
import Link from 'next/link'
import React from 'react'
import { FcCellPhone, FcPhone } from 'react-icons/fc'
import { TfiEmail } from 'react-icons/tfi'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    <img src="/img/logo.png" width={100} height={50} />
                </Link>
            </div>
            <div className="flex-1">
                <div className="flex gap-1"><FcCellPhone size={20} />01676-182277 | 01976-182277</div>
                <div className="flex gap-1"><TfiEmail className='mt-1' size={15} /> info.iyadsoft.com</div>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li> <Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
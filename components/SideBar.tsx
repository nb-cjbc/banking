"use client"

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link  from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

// Check this syntax, looks like is for an object
function SideBar( {user}: SiderbarProps) {
    const pathname = usePathname();

    return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link href="/" className='mb-12 cursor-pointer
            items-center gap-2'>
                <Image src="/icons/logo.svg"
                width={34}
                height={34}
                alt="Horizon Logo"
                className='size-[24px] max-xl:size-14' 
                />
                <h1 className='sidebar-logo'>Horizon</h1>
            </Link>
            
            {/* Map the constants to some links*/}
            {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                return (
                    <Link href={item.route}
                    key={item.label}
                    className={cn('sidebar-link', {'bg-bank-gradient': isActive})}
                    >
                        {item.label}
                    </Link>
                )
            })}
        </nav>
    </section>
  )
}

export default SideBar

"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';


const Menu = () => {
    let currentPathName = usePathname()
console.log(currentPathName)

    return (
        <div>
         <div>
          <h1>{currentPathName}</h1>
        <ul className='flex gap-3'>
            <Link className={currentPathName === "/" ? "active_link": "pending_link"} href={'/'}>Home</Link>
            <Link className={currentPathName === "/contact" ? "active_link": "pending_link"} href={'/contact'}>Contact</Link>
            <Link className={currentPathName === "/profile" ? "active_link": "pending_link"} href={'/profile'}>Profile</Link>
            <Link className={currentPathName === "/about" ? "active_link": "pending_link"} href={'/about'}>About</Link>
            {/* <Link className={currentPathName === "/profile" ? "active_link": "pending_link"} href={'/about'}>About</Link> */}
          </ul>
        </div>
        </div>
    );
};

export default Menu;
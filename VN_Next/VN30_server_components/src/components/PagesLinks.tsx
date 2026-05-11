'use client'

import Link from "next/link";
import {usePathname} from "next/navigation";

import './PagesLinks.css';

export const PagesLinks = () => {

    const pathname = usePathname();

    function getLinkClass(href:string) {
        let className="PageLink";
        if ( href===pathname )
            className+=" ActivePageLink";
        return className;
    }

    console.log("rendering PagesLinks");


    return (
      <div className='PageLinks'>
        <Link href="/"        className={getLinkClass("/")}        >Main</Link>
        <Link href="/company" className={getLinkClass("/company")} >About us</Link>
        <Link href="/clients" className={getLinkClass("/clients")} >Clients</Link>
      </div>
    );

};

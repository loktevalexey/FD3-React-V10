'use client'

import {useEffect} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

import './PagesLinks.css';

export const PagesLinks = () => {

    const pathname = usePathname();

    useEffect(()=>{
        console.log("PagesLinks mounted");
        return ()=>{
            console.log("PagesLinks unmounted");
        }
    },[]);

    function getLinkClass(href:string) {
        let className="PageLink";
        if ( href===pathname )
            className+=" ActivePageLink";
        return className;
    }

    return (
      <div className='PageLinks'>
        <Link href="/"        className={getLinkClass("/")}        >Main</Link>
        <Link href="/company" className={getLinkClass("/company")} >About us</Link>
        <Link href="/clients" className={getLinkClass("/clients")} >Clients</Link>
      </div>
    );

};

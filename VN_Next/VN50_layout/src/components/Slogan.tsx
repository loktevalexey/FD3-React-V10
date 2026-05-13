'use client'

import {useEffect} from "react";

export const Slogan = () => {

    useEffect(()=>{
        console.log("Slogan mounted");
        return ()=>{
            console.log("Slogan unmounted");
        }
    },[]);

    return (
      <h3>
          Мы заботимся о наших клиентах!
      </h3>
    );

};

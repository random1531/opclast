"use client"
import { useState } from "react";
import BlocForm from "./input/blocForm";

export default function FormSingIn(){
    const [email, setEmail] = useState<string>("")
    return(
        <form className="w-full" action="">
            <BlocForm TextLabel="Nom" idLabel="name"/>
            <BlocForm TextLabel="Prénom" idLabel="surname" />
            <BlocForm TextLabel="email" idLabel="email" onchange={(e)=>setEmail(e.target.value)}/>
            <BlocForm TextLabel="password" idLabel="password"/>
        </form>
    )
}
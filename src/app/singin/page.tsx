"use client";
import Button from "@/conponements/button/button";
import Lbinput from "@/conponements/forms/input/lbinput";
import Link from "next/link";
import { useState } from "react";
import Registeruser, { RegisterUser } from "@/features/auth/api";

export default function singin() {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegister = async () => {
    try {
     const d = await  RegisterUser({ name, email, password });
     if(d.succes){
      console.log("registersucces")
     }
    } catch {}
  };

  return (
    <form className="p-20 bg-white border border-[#F5F5F5] w-[52%] flex flex-col gap-9">
      <div className="flex flex-col w-full">
        <h1 className="text-[#99331A] font-bold text-[32px] font-inter text-center">
          Heureux de vous revoir
        </h1>
        <p className="font-inter font-normal text-[14px] text-black text-center">
          Connectez-vous pour retrouver vos réservations, vos annonces et tout
          ce qui rend vos séjours uniques.
        </p>
      </div>
      <Lbinput
        labelText="Nom"
        idForm="name"
        type="text"
        valueInput={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Lbinput
        labelText="Prénom"
        idForm="surname"
        type="text"
        valueInput={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
      <Lbinput
        labelText="Adresse email"
        idForm="email"
        type="email"
        valueInput={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Lbinput
        labelText="Mot de passe"
        idForm="password"
        type="password"
        valueInput={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex flex-col gap-5.5 items-center">
        <Button TextBtn="S’inscrire" Onclick={handleRegister} />
        <div className="flex flex-col gap-3">
          <Link
            className="font-inter font-normal text-[14px] text-[#99331A] text-center"
            href="/login"
          >
            Déjà membre ? Se connecter
          </Link>
        </div>
      </div>
    </form>
  );
}

"use client"
import {FetchUser} from "@/features/auth/api"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function MessagerieId(){
     const params = useParams()
    const [testid,setTestid]=useState<any>(null)
    console.log(testid)
    useEffect(()=>{
        async function fetuser(){
            const id = Number(params.slug)
            try{
                const result = await FetchUser({ id })
                if(result){
                    setTestid(result)
                }
            }catch(error){
                console.error(error)
            }
        }
        void fetuser()
    }, [params])
    return(
        <>
        <p>cc</p>
        </>
    )
}
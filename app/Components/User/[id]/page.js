"use client"
import { useParams } from "next/navigation";
import Header from "../../Header/Header";

export default function SignUp({parmas}) {
   const id = useParams()
   console.log(id)
    return (
        <>
            <Header />
            <h1>User Dynamic {id.id}</h1>
        </>
    )
}
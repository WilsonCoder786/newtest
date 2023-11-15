"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname()
    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white" >
            <img src="data:image/png;base64,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"
                style={{ width: 80 }} />
            <nav className="space-x-4">
                <Link href={"/"} style={{ color: pathname == "/" ? "red" : "white" }}>
                    <b>Home</b>
                </Link>
                <Link href={"/Components/SignUp"} style={{ color: pathname == "/Components/SignUp" ? "red" : "white" }} >
                    <b>Sign Up</b>
                </Link>
                <Link href={"/Components/Login"} style={{ color: pathname == "/Components/Login" ? "red" : "white" }} >
                    <b>Login</b>
                </Link>
                <Link href={"/Components/User/1"} style={{ color: pathname == "/Components/User/1" ? "red" : "white" }} >
                    <b>DYNAMIC ROUTING</b>
                </Link>



            </nav>
        </div>

    )
}
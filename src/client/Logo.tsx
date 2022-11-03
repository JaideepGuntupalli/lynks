import Image from "next/image";
import logo from "@/assets/logo.png";
export default function Logo() {
    return (
        <a
            href="/"
            className="font-bold font-dm text-2xl text-yellow-500 flex items-center gap-3"
        >
            <Image src={logo} alt="Logo of Lynks" width="40" />
            Lynks
        </a>
    );
}

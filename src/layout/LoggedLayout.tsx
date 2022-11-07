import { FC, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useSession } from "next-auth/react";
import morning from "@/assets/morning.png";
import noon from "@/assets/noon.png";
import night from "@/assets/night.png";

import SideBar from "./components/SideBar";
import { RightBar } from "./components/RightBar";

type LayoutProps = {
    title: string;
    children: JSX.Element | JSX.Element[];
};

const Layout: FC<LayoutProps> = ({ title, children }) => {
    const { data: session, status } = useSession({ required: true });
    let greetings = "";
    let img = morning;

    let today = new Date();
    let curHr = today.getHours();

    if (curHr < 12) {
        greetings = "Good Morning";
        img = morning;
    } else if (curHr < 17) {
        greetings = "Good Afternoon";
        img = noon;
    } else {
        greetings = "Good Evening";
        img = night;
    }

    return (
        <section className="font-poppins bg-black text-white h-screen flex flex-col justify-between">
            <Head>
                <title>{title + " | Lynks"}</title>
                <meta name="description" content={title} />
                <link rel="shortcut icon" type="image/png" href="/logo.png" />
            </Head>
            <section className="flex w-full h-screen p-4 gap-4">
                <SideBar />
                <main className="flex w-full gap-4">
                    <section className="flex-1 bg-zinc-900 rounded-xl p-6 flex flex-col gap-8 overflow-auto">
                        <section className="flex items-center gap-3">
                            <Image src={img} alt="Sun" height={35} />
                            <h1 className="text-2xl opacity-75 font-medium">
                                {greetings}, {session?.user?.name}!
                            </h1>
                        </section>
                        {children}
                    </section>
                    <RightBar />
                </main>
            </section>
        </section>
    );
};

export default Layout;

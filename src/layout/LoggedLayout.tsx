import { FC, useState } from "react";
import Head from "next/head";
import Logo from "@/client/Logo";
import Image from "next/image";
import bell from "@/assets/icons/bell.svg";
import home from "@/assets/icons/home.svg";
import list from "@/assets/icons/list.svg";
import menu from "@/assets/icons/menu.svg";
import profile from "@/assets/icons/profile.svg";
import { useSession } from "next-auth/react";
import morning from "@/assets/morning.png";
import noon from "@/assets/noon.png";
import night from "@/assets/night.png";
import searchIcon from "@/assets/icons/search.svg";

type LayoutProps = {
    title: string;
    children: JSX.Element | JSX.Element[];
};

const Layout: FC<LayoutProps> = ({ title, children }) => {
    const { data: session, status } = useSession({ required: true });
    const [search, setSearch] = useState(false);
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
                <header className="w-1/4 bg-zinc-900 rounded-xl gap-4 py-8 flex justify-end">
                    <div className="w-[275px] flex flex-col items-center gap-10 justify-between">
                        <nav className="flex flex-col gap-10 items-start text-xl font-medium text-zinc-300">
                            <Logo />
                            <div className="flex flex-col gap-10 items-center">
                                <div className="flex flex-col gap-10 items-start">
                                    <a className="flex gap-4 items-center mt-10">
                                        <Image
                                            src={home}
                                            alt="home icon"
                                            width="20"
                                        />
                                        Home
                                    </a>
                                    <a className="flex gap-4 items-center cursor-pointer">
                                        <Image
                                            src={list}
                                            alt="list icon"
                                            width="20"
                                        />
                                        Lists
                                    </a>
                                    <a className="flex gap-4 items-center cursor-pointer">
                                        <Image
                                            src={bell}
                                            alt="bell icons"
                                            width="20"
                                        />
                                        Notifications
                                    </a>
                                    <a className="flex gap-4 items-center cursor-pointer">
                                        <Image
                                            src={profile}
                                            alt="Logo of Lynks"
                                            width="20"
                                        />
                                        Profile
                                    </a>
                                    <a className="flex gap-4 items-center cursor-pointer">
                                        <Image
                                            src={menu}
                                            alt="More icon"
                                            width="20"
                                        />
                                        More
                                    </a>
                                </div>
                                <a className="py-3 px-14 rounded-full bg-yellow-500 text-zinc-900 text-lg font-bold">
                                    New List
                                </a>
                            </div>
                        </nav>
                        <a
                            href="/profile"
                            className="flex gap-4 bg-white/20 p-2 rounded-full w-4/5 text-sm items-center"
                        >
                            <Image
                                src={session?.user?.image || profile}
                                alt={session?.user?.name + "'s Image"}
                                width={30}
                                height={30}
                                className="rounded-full"
                            />
                            {session?.user?.name}
                        </a>
                    </div>
                </header>
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
                    <section className="w-1/3 flex flex-col items-center bg-zinc-900 rounded-xl py-6 px-4 overflow-auto">
                        <label
                            className={
                                "flex items-center gap-2 pl-3 rounded-full border-2 hover:cursor-text " +
                                (search
                                    ? " bg-zinc-900 border-yellow-500"
                                    : "border-zinc-800 bg-zinc-800")
                            }
                        >
                            <Image
                                src={searchIcon}
                                alt="search icon"
                                height={20}
                            />
                            <input
                                type="text"
                                className={
                                    "px-4 py-2 placeholder:text-white/30 focus:ring-transparent focus:outline-none rounded-r-full " +
                                    (search ? "bg-zinc-900" : "bg-zinc-800")
                                }
                                onFocus={(e) => setSearch(true)}
                                onBlur={(e) => setSearch(false)}
                                placeholder="Search"
                            />
                        </label>
                        <section className="p-6">
                            <section className="flex flex-col gap-4 mb-10">
                                <h2 className="text-2xl text-white/90">
                                    Pinned Links
                                </h2>
                                <div className="grid grid-cols-3 gap-4">
                                    <a
                                        className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                                        href="#"
                                    >
                                        📝 List 1
                                    </a>
                                    <a
                                        className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                                        href="#"
                                    >
                                        📝 List 1
                                    </a>
                                    <a
                                        className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                                        href="#"
                                    >
                                        📝 List 1
                                    </a>
                                    <a
                                        className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                                        href="#"
                                    >
                                        📝 List 1
                                    </a>
                                    <a
                                        className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                                        href="#"
                                    >
                                        📝 List 1
                                    </a>
                                </div>
                            </section>
                            <section className="flex flex-col gap-4 mb-10">
                                <h2 className="text-2xl text-white/90">
                                    Lists
                                </h2>
                                <div className="flex flex-col gap-6">
                                    <a
                                        className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                                        href="#"
                                    >
                                        📝 List 1
                                    </a>
                                    <a
                                        className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                                        href="#"
                                    >
                                        📝 List 1
                                    </a>
                                    <a
                                        className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                                        href="#"
                                    >
                                        📝 List 1
                                    </a>
                                    <a
                                        className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                                        href="#"
                                    >
                                        📝 List 1
                                    </a>
                                    <a
                                        className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                                        href="#"
                                    >
                                        📝 List 1
                                    </a>
                                    <a
                                        className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                                        href="#"
                                    >
                                        📝 List 1
                                    </a>
                                    <a
                                        className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                                        href="#"
                                    >
                                        📝 List 1
                                    </a>
                                    <a
                                        className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                                        href="#"
                                    >
                                        📝 List 1
                                    </a>
                                    <a
                                        className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                                        href="#"
                                    >
                                        📝 List 1
                                    </a>
                                    <a
                                        className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                                        href="#"
                                    >
                                        📝 List 1
                                    </a>
                                </div>
                            </section>
                        </section>
                    </section>
                </main>
            </section>
        </section>
    );
};

export default Layout;

import { FC } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

import bell from "@/assets/icons/bell.svg";
import home from "@/assets/icons/home.svg";
import list from "@/assets/icons/list.svg";
import menu from "@/assets/icons/menu.svg";
import profile from "@/assets/icons/profile.svg";
import Logo from "@/client/Logo";

const SideBar: FC = () => {
    const { data: session, status } = useSession({ required: true });
    return (
        <header className="w-1/4 bg-zinc-900 rounded-xl gap-4 py-8 flex justify-end">
            <div className="w-[275px] flex flex-col items-center gap-10 justify-between">
                <nav className="flex flex-col gap-10 items-start text-xl font-medium text-zinc-300">
                    <Logo />
                    <div className="flex flex-col gap-10 items-center">
                        <div className="flex flex-col gap-10 items-start">
                            <a className="flex gap-4 items-center mt-10">
                                <Image src={home} alt="home icon" width="20" />
                                Home
                            </a>
                            <a className="flex gap-4 items-center cursor-pointer">
                                <Image src={list} alt="list icon" width="20" />
                                Lists
                            </a>
                            <a className="flex gap-4 items-center cursor-pointer">
                                <Image src={bell} alt="bell icons" width="20" />
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
                                <Image src={menu} alt="More icon" width="20" />
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
    );
};

export default SideBar;

import { useState } from "react";
import Image from "next/image";

import { requireAuth } from "@/utils/requireAuth";
import LoggedLayout from "@/layout/LoggedLayout";
import plusIcon from "@/assets/icons/plus.svg";

export const getServerSideProps = requireAuth(async (ctx) => {
    return { props: {} };
});

export default function Home() {
    const [addLink, setAddLink] = useState(false);

    return (
        <LoggedLayout title="Home">
            <label
                className={
                    "flex items-center gap-2 pl-3 rounded-full border-2 hover:cursor-text " +
                    (addLink
                        ? " bg-zinc-900 border-yellow-500"
                        : "border-zinc-800 bg-zinc-800")
                }
            >
                <Image src={plusIcon} alt="plus icon" height={20} />
                <input
                    type="text"
                    className={
                        "px-4 py-2 placeholder:text-white/30 focus:ring-transparent focus:outline-none rounded-r-full " +
                        (addLink ? "bg-zinc-900" : "bg-zinc-800")
                    }
                    onFocus={(e) => setAddLink(true)}
                    onBlur={(e) => setAddLink(false)}
                    placeholder="Add Link"
                />
            </label>
            <section className="px-6">
                <section className="flex flex-col gap-4 mb-10">
                    <h2 className="text-2xl text-white/90">Pinned Links</h2>
                    <div className="grid grid-cols-3 gap-4">
                        <a
                            className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                            href="#"
                        >
                            📍 🔗 Link 1
                        </a>
                        <a
                            className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                            href="#"
                        >
                            📍 🔗 Link 1
                        </a>
                        <a
                            className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                            href="#"
                        >
                            📍 🔗 Link 1
                        </a>
                        <a
                            className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                            href="#"
                        >
                            📍 🔗 Link 1
                        </a>
                        <a
                            className="bg-zinc-800 rounded-2xl border-[1px] border-zinc-800 hover:border-yellow-500 px-3 py-4"
                            href="#"
                        >
                            📍 🔗 Link 1
                        </a>
                    </div>
                </section>
                <section className="flex flex-col gap-6 mb-10">
                    <h2 className="text-2xl text-white/90">Recently Added</h2>
                    <div className="bg-zinc-800 rounded-3xl flex flex-col">
                        <div className="grid grid-cols-3 gap-4 py-2 text-xs">
                            <p className=" self-center justify-self-center">
                                Last Edited
                            </p>
                            <p className=" self-center justify-self-center">
                                List 1
                            </p>
                            <p className=" self-center justify-self-center">
                                Copy
                            </p>
                        </div>
                        <a
                            href="#"
                            className="bg-zinc-700 rounded-3xl text-center py-12"
                        >
                            Link 2
                        </a>
                    </div>
                    <div className="bg-zinc-800 rounded-3xl flex flex-col">
                        <div className="grid grid-cols-3 gap-4 py-2 text-xs">
                            <p className=" self-center justify-self-center">
                                Last Edited
                            </p>
                            <p className=" self-center justify-self-center">
                                List 1
                            </p>
                            <p className=" self-center justify-self-center">
                                Copy
                            </p>
                        </div>
                        <a
                            href="#"
                            className="bg-zinc-700 rounded-3xl text-center py-12"
                        >
                            Link 2
                        </a>
                    </div>
                    <div className="bg-zinc-800 rounded-3xl flex flex-col">
                        <div className="grid grid-cols-3 gap-4 py-2 text-xs">
                            <p className=" self-center justify-self-center">
                                Last Edited
                            </p>
                            <p className=" self-center justify-self-center">
                                List 1
                            </p>
                            <p className=" self-center justify-self-center">
                                Copy
                            </p>
                        </div>
                        <a
                            href="#"
                            className="bg-zinc-700 rounded-3xl text-center py-12"
                        >
                            Link 2
                        </a>
                    </div>
                    <div className="bg-zinc-800 rounded-3xl flex flex-col">
                        <div className="grid grid-cols-3 gap-4 py-2 text-xs">
                            <p className=" self-center justify-self-center">
                                Last Edited
                            </p>
                            <p className=" self-center justify-self-center">
                                List 1
                            </p>
                            <p className=" self-center justify-self-center">
                                Copy
                            </p>
                        </div>
                        <a
                            href="#"
                            className="bg-zinc-700 rounded-3xl text-center py-12"
                        >
                            Link 2
                        </a>
                    </div>
                    <div className="bg-zinc-800 rounded-3xl flex flex-col">
                        <div className="grid grid-cols-3 gap-4 py-2 text-xs">
                            <p className=" self-center justify-self-center">
                                Last Edited
                            </p>
                            <p className=" self-center justify-self-center">
                                List 1
                            </p>
                            <p className=" self-center justify-self-center">
                                Copy
                            </p>
                        </div>
                        <a
                            href="#"
                            className="bg-zinc-700 rounded-3xl text-center py-12"
                        >
                            Link 2
                        </a>
                    </div>
                </section>
            </section>
        </LoggedLayout>
    );
}

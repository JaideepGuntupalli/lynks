import { FC, useState } from "react";
import searchIcon from "@/assets/icons/search.svg";
import Image from "next/image";

export const RightBar: FC = () => {
    const [search, setSearch] = useState(false);
    return (
        <section className="w-1/3 flex flex-col items-center bg-zinc-900 rounded-xl py-6 px-4 overflow-auto">
            <label
                className={
                    "flex items-center gap-2 pl-3 rounded-full border-2 hover:cursor-text " +
                    (search
                        ? " bg-zinc-900 border-yellow-500"
                        : "border-zinc-800 bg-zinc-800")
                }
            >
                <Image src={searchIcon} alt="search icon" height={20} />
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
                    <h2 className="text-2xl text-white/90">Pinned Links</h2>
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
                    <h2 className="text-2xl text-white/90">Lists</h2>
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
    );
};

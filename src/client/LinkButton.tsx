import { FC } from "react";

const LinkButton: FC<{ href: string; name: string }> = ({ href, name }) => {
    return (
        <a
            href={href}
            className=" border-white/10 border-2 rounded-full p-2 px-4 text-lg text-center w-full hover:bg-yellow-500/30 hover:border-yellow-500/50"
        >
            {name}
        </a>
    );
};

export default LinkButton;

import { FC } from "react";

const Box: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
    return (
        <div className="bg-white/10 backdrop-blur-sm p-12 px-16 flex flex-col items-start gap-8 rounded-lg w-5/6 md:w-1/2 xl:w-1/4">
            {children}
        </div>
    );
};
export default Box;

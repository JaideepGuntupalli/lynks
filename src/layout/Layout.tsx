import { FC } from "react";
import Head from "next/head";

type LayoutProps = {
    title: string;
    children: JSX.Element | JSX.Element[];
};

const Layout: FC<LayoutProps> = ({ title, children }) => {
    return (
        <section className="font-poppins bg-black text-white h-screen flex flex-col justify-between">
            <Head>
                <title>{title}</title>
                <meta name="description" content={title} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex items-center justify-center h-screen">
                {children}
            </main>
        </section>
    );
};

export default Layout;

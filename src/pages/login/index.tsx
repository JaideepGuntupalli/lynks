import Box from "@/client/Box";
import Logo from "@/client/Logo";
import Layout from "@/layout/Layout";
import { unstable_getServerSession } from "next-auth";
import { getProviders, signIn } from "next-auth/react";
import { authOptions } from "../api/auth/[...nextauth]";

export default function Login({ providers }) {
    return (
        <Layout title="Login">
            <Box>
                <Logo />
                <h1 className="text-lg opacity-50">
                    Please login before you continue...
                </h1>
                <>
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button
                                className=" border-white/10 border-2 rounded-full p-2 px-6 text-lg text-center w-full hover:bg-yellow-500/30 hover:border-yellow-500/50"
                                onClick={() => signIn(provider.id)}
                            >
                                Login with {provider.name}
                            </button>
                        </div>
                    ))}
                </>
            </Box>
        </Layout>
    );
}

export async function getServerSideProps(context: any) {
    const { req, res } = context;
    const session = await unstable_getServerSession(req, res, authOptions);

    if (session) {
        return {
            redirect: {
                destination: "/", // logged home path
                permanent: false,
            },
        };
    }

    const providers = await getProviders();
    return {
        props: { providers },
    };
}

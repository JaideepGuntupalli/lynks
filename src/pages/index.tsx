import Box from "@/client/Box";
import Logo from "@/client/Logo";
import Layout from "@/layout/Layout";
import { requireAuth } from "@/utils/requireAuth";
import { signOut, useSession } from "next-auth/react";

export const getServerSideProps = requireAuth(async (ctx) => {
    return { props: {} };
});

export default function Home() {
    const { data: session, status } = useSession({ required: true });
    return (
        <Layout title="Home">
            <Box>
                <Logo />
                {status === "authenticated" ? (
                    <>
                        Signed in as {session.user!.email} <br />
                        <button
                            className=" border-white/10 border-2 rounded-full p-2 px-4 text-lg text-center w-full hover:bg-yellow-500/30 hover:border-yellow-500/50"
                            onClick={() => signOut()}
                        >
                            Sign out
                        </button>
                    </>
                ) : (
                    <></>
                )}
            </Box>
        </Layout>
    );
}

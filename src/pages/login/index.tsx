import Box from "@/client/Box";
import LinkButton from "@/client/LinkButton";
import Logo from "@/client/Logo";
import Layout from "@/layout/Layout";

export default function Home() {
    return (
        <Layout title="Login | Lynks">
            <Box>
                <Logo />
                <h1 className="text-lg">Login to your Account</h1>
                <section className="flex flex-col gap-4 items-center w-full">
                    <LinkButton href="/login" name="Login with Google" />
                    <a href="/signup" className="opacity-50 text-sm">
                        Not registered yet?
                    </a>
                </section>
            </Box>
        </Layout>
    );
}

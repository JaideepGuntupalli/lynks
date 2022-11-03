import Box from "@/client/Box";
import LinkButton from "@/client/LinkButton";
import Logo from "@/client/Logo";
import Layout from "@/layout/Layout";

export default function Home() {
    return (
        <Layout title="Sign Up | Lynks">
            <Box>
                <Logo />
                <h1 className="text-lg">Register your Account</h1>
                <section className="flex flex-col gap-4 items-center w-full">
                    <LinkButton href="/signup" name="Register with Google" />
                    <a href="/login" className="opacity-50 text-sm">
                        Already registered?
                    </a>
                </section>
            </Box>
        </Layout>
    );
}

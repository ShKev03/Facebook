import Head from "next/head";
import Header from "../Components/Header/Header";
import Body from "../Components/Body/Body";
import { getSession } from "next-auth/client";
import Login from "../Components/Login/Login";

export default function Home({ session }) {
    if (!session) return <Login />;

    return (
        <div className="overflow-hidden">
            <Head>
                <title>Facebook by Keval</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <Header />
            <Body />
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);
    return {
        props: {
            session,
        },
    };
}

import { signIn } from "next-auth/client";
import Head from "next/head";
import Image from "next/image";

function Login() {
    return (
        <div className="flex h-screen w-full bg-gray-50 flex-col items-center p-2 justify-center">
            <Head>
                <title>Login To Facebook by Keval</title>
                <link rel="icon" href="/logo.png" />
            </Head>
            <Image
                src="/logo.png"
                height={200}
                width={200}
                objectFit="contain"
            />
            <div onClick={signIn} className="p-2 bg-blue-500 w-60 text-center m-5 rounded-lg text-white font-black cursor-pointer border-2 border-solid border-blue-500 hover:bg-white hover:text-blue-500 transition">
                Login to Facebook
            </div>
            <div className="h-40"></div>
        </div>
    );
}

export default Login;

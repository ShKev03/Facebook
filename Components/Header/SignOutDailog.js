import { signOut } from "next-auth/client";

function SignOutDailog({ hidden }) {
    return (
        <div
            className={`absolute  p-5 bg-white shadow-lg top-20 right-3 rounded-lg ${
                hidden ? "opacity-0 hidden" : "inline-flex "
            } transition`}
        >
            <div
                className={`p-2 bg-blue-500 px-10 rounded-full cursor-pointer text-white font-black `}
                onClick={signOut}
            >
                SignOut
            </div>
        </div>
    );
}

export default SignOutDailog;

import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { useSession } from "next-auth/client";
import { useState } from "react";
import SignOutDailog from "./SignOutDailog";

function Right() {
    const [session] = useSession();
    const [signOutDailog, setSignOutDailog] = useState(true);

    return (
        <div className="flex items-center sm:space-x-2 justify-end">
            <div
                onClick={() => {
                    setSignOutDailog(!signOutDailog);
                    console.log(signOutDailog);
                }}
                className="flex items-center sm:space-x-2 justify-end cursor-pointer "
            >
                <Image
                    height={40}
                    width={40}
                    layout="fixed"
                    src={session.user.image}
                    className="rounded-lg"
                />
                <p className="font-semibold whitespace-nowrap pr-3 md:inline-flex hidden">
                    {session.user.name}
                </p>
            </div>
            <ViewGridIcon className="icon" />
            <ChatIcon className="icon" />
            <BellIcon className="icon" />
            <ChevronDownIcon className="icon" />
            <SignOutDailog hidden={signOutDailog} />
        </div>
    );
}

export default Right;

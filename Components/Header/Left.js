import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Left() {
    return (
        <div className="flex items-center ">
            <Image src="/logo.png" height={40} width={40} layout="fixed" />
            <div className=" ml-2  items-center rounded-md bg-gray-100 p-2 mr-2 hidden lg:inline-flex">
                <SearchIcon className="h-6 text-gray-400" />
                <input
                    type="text"
                    className="bg-transparent items-center ml-2  flex-shrink text-gray-700 outline-none flex"
                    placeholder="Search Facebook"
                />
            </div>
        </div>
    );
}

export default Left;

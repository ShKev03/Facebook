import Image from "next/image";

function Row({ src, title, Icon }) {
    return (
        <div className="flex items-center  p-4 cursor-pointer group transition space-x-2 hover:bg-gray-100 rounded-lg">
            {src && <Image src={src} height={30} width={30} className="rounded-full" layout="fixed"/>}
            {Icon && <Icon className="h-8 text-blue-500"/>}
            <p className="hidden sm:inline-flex font-bold text-gray-900 group-hover:text-blue-500 transition">{title}</p>
        </div>
    );
}

export default Row;

function Icon({ Ico, active }) {
    return (
        <div className="cursor-pointer md:px-10 sm:h-14 md:hover:bg-gray-100 flex items-center rounded-xl group transition">
            <Ico
                className={` text-gray-400 h-7 group-hover:text-blue-400  mx-auto  transition ${
                    active && `text-blue-500`
                }`}
            />
        </div>
    );
}

export default Icon;

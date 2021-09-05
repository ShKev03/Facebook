import { HomeIcon, UserGroupIcon } from "@heroicons/react/solid";
import { FlagIcon, PlayIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import Icon from "./Icon";

function Center() {
    return (
        <div className="flex flex-grow justify-center">
            <div className="flex space-x-6 md:space-x-2">
                <Icon active Ico={HomeIcon} />
                <Icon Ico={FlagIcon} />
                <Icon Ico={PlayIcon} />
                <Icon Ico={ShoppingCartIcon} />
                <Icon Ico={UserGroupIcon} />
            </div>
        </div>
    );
}

export default Center;

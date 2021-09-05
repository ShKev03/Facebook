import Row from "./Row";
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from "@heroicons/react/solid";

import {
    ChevronDownIcon,
    UserGroupIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

function Sidebar() {
    return (
        <div className="max-w-xl p-2">
            <Row src="/developer.png" title="Keval Shah" />
            <Row Icon={UsersIcon} title="Friends" />
            <Row Icon={UserGroupIcon} title="Groups" />
            <Row Icon={ShoppingCartIcon} title="Marketplace" />
            <Row Icon={DesktopComputerIcon} title="Watch" />
            <Row Icon={CalendarIcon} title="Events" />
            <Row Icon={ClockIcon} title="Memories" />
            <Row Icon={ChevronDownIcon} title="More" />
        </div>
    );
}

export default Sidebar;

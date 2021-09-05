import Center from "./Center";
import Left from "./Left";
import Right from "./Right";

function Header() {
    return (
        <div className="flex  p-2 sticky top-0 bg-white z-50 shadow-md">
            <Left/>
            <Center/>
            <Right/>
        </div>
    );
}

export default Header;

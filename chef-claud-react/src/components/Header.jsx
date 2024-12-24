
import icon from "./images/chef-icon.png"
import "../index.css"
export default function Header() {
    return (
        <>
            <header>
                <img id="icon" src={icon} alt="icon of chef app" />
                <h1 id="head-title">Chef Claude</h1>
            </header>
        </>
    );
}


import "../css/page.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                           <Link className="nav-link" to="/">Homepage</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/product">Products</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/topic">Topic</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header;
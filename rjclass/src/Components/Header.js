
import "../css/page.css";
import {Link} from "react-router-dom";
import routers from '../commons/routers';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                    {
                        routers.map(item =>{
                            return <li className="nav-item active" key={item.name}>
                                <Link className="nav-link" to={item.path}>{item.name}</Link>
                            </li>
                        })
                    }
                    </ul>
                </div>
            </nav>
        </header>
    )
}
export default Header;
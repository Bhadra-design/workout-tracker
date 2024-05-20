import { useLogout } from "../hooks/uselogout"
import { Link } from "react-router-dom"
import { useAuthContext } from "../hooks/userAuthContext"

const Navbar = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handelclick = () => {
        logout()
    }
    return (
        <header>
            <div className="container">
            <Link to ="/">
                <h1>WorkOut Manager</h1>
            </Link>
            <nav>
                {user && (
                    <div>
                        <span>{user.email}</span>
                        <button onClick={handelclick}>Logout</button>
                    </div>
                )}
                {!user && (
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                )}
            </nav>
        </div>
        </header>
    )
}

export default Navbar;
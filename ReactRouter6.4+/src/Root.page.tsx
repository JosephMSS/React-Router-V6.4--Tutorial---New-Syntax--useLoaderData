import { Link, Outlet } from "react-router-dom";
export const Root = () => {
    return (<>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/data'>Data</Link>
            <Link to='/contact'>Contact</Link>
        </div>
        <div>
            <Outlet />
        </div>
    </>
    )
}

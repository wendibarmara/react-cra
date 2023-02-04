import {Link, Outlet} from 'react-router-dom'
export default function About()
{
    return (
        <div>
        <h1>Halaman About</h1>
        <p>
        Halo ini halaman about untuk team bisa anda klik disini
        </p>
        <ul>
            <li>
            <Link to="/about/team">Team</Link>
            </li>
        </ul>
        <Outlet/>        </div>
        )
}
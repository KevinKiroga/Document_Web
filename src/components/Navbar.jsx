
import '../components/Navbar.css'
import { Link } from 'react-router-dom'
import { BsBoxes } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import LogoutHook from '../hook/LogoutHook';
import { MdCreateNewFolder } from "react-icons/md";

const Navbar = () => {

    const { getLogout } = LogoutHook()

    return (
        <div>
            <header className='header'>
                <a className='logo'><BsBoxes /></a>
                <nav className="navbar">
                    <Link className='a' to="#">Inicio</Link> {/* <-- cambiar aquí */}
                    <Link className='a' to="/dashboard/table">Listar Documentos<span style={{ marginLeft: '10px' }}><FaListAlt /></span></Link>
                    <Link className='a' to="/dashboard/create">Crear Documento<span style={{ marginLeft: '10px' }}><MdCreateNewFolder /></span></Link> 
                    <button onClick={getLogout} className='a'><CiLogout />Cerrar sesion</button>
                </nav>
            </header>
        </div>


    )
}

export default Navbar

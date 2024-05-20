import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogoutHook = () => {

    const navigate = useNavigate();

    const getLogout = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.log('Sin autorización');
                return;
            }
            console.log(`Bearer ${token}`);
            const response = await axios.get('http://127.0.0.1:8000/api/logout', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Cerró sesión', response);
            localStorage.removeItem('token');
            navigate('/');
        } catch (error) {
            console.error('Error al cerrar sesión:', error.response ? error.response.data : error.message);
        }
    };

  return {
    getLogout
  }
}

export default LogoutHook

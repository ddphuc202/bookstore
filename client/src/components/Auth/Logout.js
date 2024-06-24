import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../../services/AuthServices';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        handleLogout(navigate)
    }, [navigate]);

    return null;
};
export default Logout;
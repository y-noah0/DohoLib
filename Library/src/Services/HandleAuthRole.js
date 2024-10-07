import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import jwtDecode from "jwt-decode"; 
import { jwtDecode } from "jwt-decode";

const HandleAuthRole = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            try {
                const decodedToken = jwtDecode(token); 
                const userRole = decodedToken.role; 

                if (userRole === 'admin') {
                    navigate('/admin/dashboard');
                } else if (userRole === 'student') {
                    navigate('/student/Home');
                } else {
                    navigate('/unauthorized');
                }

            } catch (error) {
                console.error("Token decoding failed:", error);
                navigate('/login'); 
            }

        } else {
            navigate('/login'); 
        }
        
    }, [token, navigate]);

    return null; 
};

export default HandleAuthRole; 

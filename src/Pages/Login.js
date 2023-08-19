import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { login } from "../Services/user";
import { loginAdmin } from "../Services/admin";
import "../Styles/LoginForm.css";


const Login = ({ isAdmin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { setUser } = useOutletContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let user
        if (isAdmin) {
            user = await loginAdmin(email, password, true);
        } else {
            user = await login(email, password);
        }
        if (!user) {
            alert('Invalid credentials');
            return;
        }
        setUser(user);
        navigate((isAdmin || user.isAdmin) ? '/admin' : '/');
    };
    return (
        <div className="login-form">


            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Login</button>
            </form>

            <span>Don't have an account?</span>
            <Link style={{ color: 'yellow' }} to="/register">Register</Link>
        </div>
    );
}

export default Login;
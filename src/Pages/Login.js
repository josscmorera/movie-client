import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { login } from "../Services/user";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
   const { setUser } = useOutletContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await login(email, password);
        setUser(user);
        navigate('/');
    };
    return (
      <div>

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>

        <span>Don't have an account?</span>
        <Link to="/register">Register</Link>
      </div>
    );
}

export default Login;
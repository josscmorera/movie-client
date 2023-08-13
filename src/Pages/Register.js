import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { register } from "../Services/user";


const Register = () => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const { setUser } = useOutletContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== passwordVerify) {
          alert("Passwords don't match");
          return;
        }

        const registerData = {
            email,
            firstName,
            lastName,
            password,   
        }

        try {
            const user = await register(registerData)
            if (user) {
              setUser(user);
              navigate('/');
            }
        } catch (err) { 
            setError(err.message || err.email || err.password || "Ocurrió un error");
        }
    }

    return (
        <div className="register">
            <h1>Register a new account</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                />

                <label htmlFor="last-name">Last Name:</label>
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <label htmlFor="verify">Verify your password:</label>
                <input
                    type="password"
                    placeholder="Verify your password"

                    onChange={(e) => setPasswordVerify(e.target.value)}
                    value={passwordVerify}
                />
                {error && <span className="error-message">{error}</span>}
                <button type="submit">Register</button>
            </form>
            <span>Already have an account?</span>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Register;
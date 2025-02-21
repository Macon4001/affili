import React, { useState } from "react";

interface RegisterProps {
    mode?: string;
}

const Register: React.FC<RegisterProps> = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState<{
        email?: string;
        password?: string;
        confirmPassword?: string;
    }>({});

    const validate = () => {
        const newErrors: { email?: string; password?: string; confirmPassword?: string } = {};
        if (!email) newErrors.email = "Email is required.";
        if (!password) newErrors.password = "Password is required.";
        if (password !== confirmPassword) newErrors.confirmPassword = "Passwords must match.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            console.log("Register successful:", { email, password });
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <label>
                Email Address
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="error">{errors.email}</p>}
            </label>
            <label>
                Password
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="error">{errors.password}</p>}
            </label>
            <label>
                Confirm Password
                <input
                    type="password"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;

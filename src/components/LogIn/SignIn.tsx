import React, { useState } from "react";
import '../../styles/Login.css'; // Ensure you import the CSS file for styling

interface SignInProps {
    mode?: string;
}

// Example test accounts
const testAccounts = {
    business: {
        email: "business@example.com",
        password: "business123",
    },
    admin: {
        email: "admin@example.com",
        password: "admin123",
    },
    affiliate: {
        email: "affiliate@example.com",
        password: "affiliate123",
    },
};

// Example email-to-role mapping
const emailRoleMap: Record<string, string> = {
    "business@example.com": "business",
    "admin@example.com": "admin",
    "affiliate@example.com": "affiliate",
};

const SignIn: React.FC<SignInProps> = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

    const validate = () => {
        const newErrors: { email?: string; password?: string } = {};
        if (!email) newErrors.email = "Email is required.";
        if (!password) newErrors.password = "Password is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            const role = emailRoleMap[email];
            const account = testAccounts[role as keyof typeof testAccounts];
            if (account && account.email === email && account.password === password) {
                console.log("Sign In successful:", { email, password, role });
                handleSignInSuccess(role);
            } else {
                setErrors({ email: "Invalid email or password." });
            }
        }
    };

    const handleSignInSuccess = (role: string) => {
        switch (role) {
            case "business":
                window.location.href = "/business-dashboard";
                break;
            case "admin":
                window.location.href = "/admin-dashboard";
                break;
            case "affiliate":
                window.location.href = "/affiliate-dashboard";
                break;
            default:
                window.location.href = "/";
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Sign In</h2>
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
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignIn;

import React from "react";
import SignIn from "../components/LogIn/SignIn";
import Register from "../components/LogIn/Register";
import "../styles/Login.css";

interface LoginPageProps {
    mode: "sign-in" | "register"; // Accept either "sign-in" or "register" as a prop
}

const LoginPage: React.FC<LoginPageProps> = ({ mode }) => {
    return (
        <div className="login-page">
            {/* Information Section */}
            <div className="info-section">
                <img src="/2.png" alt="Nexaffil Logo" className="company-logo" />
                <h1>Welcome to Nexaffil</h1>
                <p>
                    Empower your business with affiliate marketing. Join a vibrant
                    community of affiliates to grow your sales and expand your reach.
                </p>
            </div>

            {/* Authentication Section */}
            <div className="auth-section">
                {mode === "register" ? <Register /> : <SignIn />}
            </div>
        </div>
    );
};

export default LoginPage;

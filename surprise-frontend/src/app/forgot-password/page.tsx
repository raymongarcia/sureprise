import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        // Add your forgot password logic here
        // For example, you can call an API to send a reset password email
        try {
            // Assume sendResetPasswordEmail is a function that sends the reset email
            await sendResetPasswordEmail(email);
            setMessage('A reset password link has been sent to your email.');
        } catch (error) {
            setMessage('Failed to send reset password email. Please try again.');
        }
    };

    const sendResetPasswordEmail = async (email: string) => {
        // Mock API call
        return new Promise((resolve) => setTimeout(resolve, 1000));
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Send Reset Link</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ForgotPassword;
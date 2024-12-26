import React, { useState } from 'react';

function SignUpForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};

        if (!formData.firstName.trim()) {
            errors.firstName = 'First Name is required';
        }

        if (!formData.lastName.trim()) {
            errors.lastName = 'Last Name is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        }

        if (!formData.phone.trim()) {
            errors.phone = 'Phone Number is required';
        }

        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        }

        if (!formData.confirmPassword.trim()) {
            errors.confirmPassword = 'Confirm Password is required';
        } else if (formData.confirmPassword !== formData.password) {
            errors.confirmPassword = 'Passwords do not match';
        }

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            // Submit the form data
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                    {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                    {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                    {formErrors.email && <span className="error">{formErrors.email}</span>}
                </div>
                <div>
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    {formErrors.phone && <span className="error">{formErrors.phone}</span>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                    {formErrors.password && <span className="error">{formErrors.password}</span>}
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                    {formErrors.confirmPassword && <span className="error">{formErrors.confirmPassword}</span>}
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;

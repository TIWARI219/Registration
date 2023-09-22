import React, { useState } from 'react';
function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName) {
      setError('Full name cannot be empty.');
    } else if (!email.includes('@')) {
      setError('Email must contain @');
    } else if (mobile.length !== 10 || !/^[0-9]+$/.test(mobile)) {
      setError('Mobile number should be 10 digits long and contain only numbers.');
    } else if (password.length < 8 || !/^[a-zA-Z0-9]+$/.test(password)) {
      setError('Password should be at least 8 characters long and alphanumeric.');
    } else if (password !== confirmPassword) {
      setError('Passwords do not match.');
    } else {
      setError('');
      // Perform signup or further actions here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700 font-semibold">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border-gray-300 border rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-gray-300 border rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700 font-semibold">
              Mobile Number:
            </label>
            <input
              type="text"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border-gray-300 border rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-gray-300 border rounded-md p-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border-gray-300 border rounded-md p-2"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-3">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

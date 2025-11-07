import React, { useState } from 'react';

const Input = ({ label, type = 'text', value, onChange, placeholder }) => (
  <label className="block text-left w-full">
    <span className="text-sm text-white/80">{label}</span>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="mt-1 w-full rounded-lg bg-white/10 text-white placeholder:text-white/50 px-3 py-2 outline-none ring-1 ring-white/20 focus:ring-2 focus:ring-purple-400"
    />
  </label>
);

const Modal = ({ open, onClose, title, children, primaryAction, primaryLabel }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-b from-gray-900 to-gray-800 p-6 shadow-2xl ring-1 ring-white/10">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="mt-4 space-y-3">{children}</div>
        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="rounded-lg px-4 py-2 text-sm text-white/80 hover:text-white">
            Cancel
          </button>
          <button onClick={primaryAction} className="rounded-lg bg-white text-gray-900 px-4 py-2 text-sm font-semibold hover:bg-gray-100">
            {primaryLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export const AuthModals = ({ openLogin, openSignup, onClose, onAuthenticated }) => {
  const [loginEmailOrPhone, setLoginEmailOrPhone] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signupEmail, setSignupEmail] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLogin = () => {
    // For now, simulate authentication success
    if (loginEmailOrPhone && loginPassword) {
      onAuthenticated({ emailOrPhone: loginEmailOrPhone });
      onClose();
    }
  };

  const handleSignup = () => {
    if (signupEmail && signupPhone && signupPassword) {
      onAuthenticated({ email: signupEmail, phone: signupPhone });
      onClose();
    }
  };

  return (
    <>
      <Modal
        open={openLogin}
        onClose={onClose}
        title="Welcome back"
        primaryLabel="Login"
        primaryAction={handleLogin}
      >
        <Input
          label="Email or Mobile Number"
          value={loginEmailOrPhone}
          onChange={setLoginEmailOrPhone}
          placeholder="name@email.com / +1 555 000 1234"
        />
        <Input
          label="Password"
          type="password"
          value={loginPassword}
          onChange={setLoginPassword}
          placeholder="••••••••"
        />
      </Modal>

      <Modal
        open={openSignup}
        onClose={onClose}
        title="Create your account"
        primaryLabel="Sign Up"
        primaryAction={handleSignup}
      >
        <Input
          label="Email"
          type="email"
          value={signupEmail}
          onChange={setSignupEmail}
          placeholder="name@email.com"
        />
        <Input
          label="Mobile Number"
          value={signupPhone}
          onChange={setSignupPhone}
          placeholder="+1 555 000 1234"
        />
        <Input
          label="Password"
          type="password"
          value={signupPassword}
          onChange={setSignupPassword}
          placeholder="Create a strong password"
        />
      </Modal>
    </>
  );
};

export default AuthModals;

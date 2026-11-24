'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight, ShieldCheck, Eye, EyeOff, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@manilifestyle.com');
  const [password, setPassword] = useState('admin@123');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      // 1. Attempt API verification via backend REST service (Port 5000)
      const res = await fetch('https://mani-life-1n34.vercel.app/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password: password.trim() }),
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem(
          'mani_admin_session',
          JSON.stringify({
            token: data.token || 'mani-jwt-verified',
            user: data.user || { email: 'admin@manilifestyle.com', role: 'SUPERADMIN' },
            loginAt: new Date().toISOString(),
          })
        );
        router.push('/');
        return;
      }

      // If backend returns error status (e.g. 401)
      const errorData = await res.json().catch(() => ({}));
      setErrorMessage(errorData.error || 'Invalid credentials. Please enter the correct admin ID and password.');
      setIsLoading(false);
    } catch {
      // Direct client fallback check against fixed credentials if backend service is connecting
      const cleanEmail = email.trim().toLowerCase();
      const cleanPassword = password.trim();

      if (cleanEmail === 'admin@manilifestyle.com' && cleanPassword === 'admin@123') {
        localStorage.setItem(
          'mani_admin_session',
          JSON.stringify({
            token: 'mani-jwt-direct-session-' + Date.now(),
            user: { email: 'admin@manilifestyle.com', role: 'SUPERADMIN', name: 'Mani Lifestyle Superadmin' },
            loginAt: new Date().toISOString(),
          })
        );
        router.push('/');
      } else {
        setErrorMessage('Invalid credentials. Correct ID: admin@manilifestyle.com & Password: admin@123');
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#06131f] flex items-center justify-center p-4 font-sans text-slate-200">
      <div className="w-full max-w-md bg-[#081a2b] border border-[#14334d] rounded-2xl p-8 shadow-2xl relative overflow-hidden">
        {/* Ambient atmospheric glows */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Brand header */}
        <div className="text-center relative z-10">
          <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-[#1b628b] to-[#164666] flex items-center justify-center font-bold text-white text-2xl shadow-lg border border-sky-400/20">
            M
          </div>
          <h1 className="text-xl font-bold text-white tracking-tight mt-4">
            mani <span className="text-sky-400 text-xs uppercase font-semibold tracking-wider">Ops Admin</span>
          </h1>
          <p className="text-xs text-slate-400 mt-1 font-normal">
            Enterprise Cosmetics Formulation & RFQ Portal
          </p>
        </div>

        {/* Error Notification Banner */}
        {errorMessage && (
          <div className="mt-6 p-3 rounded-lg bg-rose-950/60 border border-rose-800/80 text-rose-300 text-xs flex items-center gap-2.5 animate-fadeIn">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
            <span className="font-medium">{errorMessage}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4 relative z-10 text-xs">
          <div>
            <label className="block text-slate-300 font-medium mb-1.5">Admin ID / Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#06131f] border border-[#14334d] rounded-lg text-white placeholder-slate-500 focus:outline-hidden focus:border-sky-400 text-xs transition-colors font-normal"
                placeholder="admin@manilifestyle.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1.5">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-[#06131f] border border-[#14334d] rounded-lg text-white placeholder-slate-500 focus:outline-hidden focus:border-sky-400 text-xs transition-colors font-normal"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors p-0.5"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-4 py-2.5 px-4 bg-gradient-to-r from-[#164666] to-[#1e608f] hover:from-[#1b5278] hover:to-[#2271a9] text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 cursor-pointer"
          >
            <span>{isLoading ? 'Verifying Credentials...' : 'Sign In to Admin Portal'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-[#14334d] text-center relative z-10 flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-normal">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Restricted to Authorized Personnel</span>
        </div>
      </div>
    </div>
  );
}

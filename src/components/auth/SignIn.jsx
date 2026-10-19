import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <main
      className="h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat p-4 overflow-hidden relative"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/bxftzk9c/image/upload/v1791957496/bg_1.webp')`,
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" aria-hidden="true" />

      {/* Main Authentication Card */}
      {/* CHANGE CARD HEIGHT HERE: e.g. h-[80vh], h-[85vh], or h-[620px] */}
      <div className="relative z-10 w-full max-w-4xl h-[85vh] max-h-137.5 mt-20 bg-[#fbf9f4] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-amber-900/10">
        
        {/* Left Section: Visual Banner */}
        <section
          className="relative w-full md:w-1/2 min-h-50 md:h-full bg-cover bg-center flex flex-col justify-between p-6 sm:p-10 text-white"
          style={{
            backgroundImage: `url('https://res.cloudinary.com/bxftzk9c/image/upload/v1792297458/signin.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 md:bg-black/35 z-0" aria-hidden="true" />

          <div className="relative z-10 flex flex-col justify-center h-full my-auto space-y-2">
            <blockquote className="space-y-1">
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl italic leading-tight text-amber-50 drop-shadow-md">
                “Good Food <br /> Brings People <br /> Together”
              </p>
              <footer className="text-xs sm:text-sm tracking-widest uppercase text-amber-200/90 font-light pt-1">
                — Feliciano
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Right Section: Form Container */}
        <section className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-center bg-[#fbf9f4] h-full overflow-y-auto">
          <header className="mb-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 text-[10px] sm:text-xs tracking-[0.25em] text-amber-800 font-semibold uppercase mb-1">
              <span>WELCOME BACK</span>
              <span className="w-8 h-px bg-amber-800/40" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-serif text-[#1e2d24] font-bold mb-1">
              Sign In
            </h1>
            <p className="text-xs text-amber-900/70 font-sans">
              Please sign in to your account and continue enjoying our specialties.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-xs font-semibold text-[#1e2d24]">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-3.5 w-4 h-4 text-amber-900/50" />
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-stone-100/70 border border-stone-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d4035] focus:border-[#2d4035] text-stone-800 placeholder-stone-400 transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <label htmlFor="password" className="block text-xs font-semibold text-[#1e2d24]">
                Password
              </label>
              <div className="relative flex items-center">
                <Lock className="absolute left-3.5 w-4 h-4 text-amber-900/50" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-stone-100/70 border border-stone-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#2d4035] focus:border-[#2d4035] text-stone-800 placeholder-stone-400 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-amber-900/50 hover:text-amber-900 focus:outline-none cursor-pointer"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Options Row */}
            <div className="flex items-center justify-between text-xs pt-0.5">
              <label className="flex items-center space-x-2 cursor-pointer text-amber-900/80">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-3.5 h-3.5 rounded border-amber-900/30 text-[#2d4035] focus:ring-[#2d4035] accent-[#2d4035]"
                />
                <span>Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-amber-900/70 hover:text-amber-950 font-medium transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <div className="pt-1">
              <button
                type="submit"
                className="flex items-center justify-center w-full h-10 sm:h-11 rounded border border-[#2d4035] bg-[#2d4035] text-white font-medium hover:bg-white hover:text-[#2d4035] transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#2d4035] text-xs sm:text-sm shadow-sm cursor-pointer"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative my-5 flex items-center justify-center">
            <div className="w-full border-t border-stone-300" />
            <span className="absolute bg-[#fbf9f4] px-3 text-[9px] tracking-wider text-amber-900/60 uppercase">
              OR
            </span>
          </div>

          {/* Google Authentication */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 py-2.5 border border-stone-300 rounded-md bg-stone-50/50 hover:bg-stone-100/80 text-stone-700 text-xs font-semibold transition-all shadow-xs cursor-pointer"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            Continue with Google
          </button>

          {/* Footer Link */}
          <footer className="mt-5 text-center text-xs text-amber-900/70">
            Don't have an account?{" "}
            <NavLink
              to="/signup"
              className="font-semibold text-[#2d4035] hover:underline"
            >
              Sign Up
            </NavLink>
          </footer>
        </section>

      </div>
    </main>
  );
};

export default SignIn;
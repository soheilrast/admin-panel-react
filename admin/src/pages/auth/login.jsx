import InputAll from "../../components/ui/input";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const {
    username,
    password,
    send,
    errors,
    showPassword,
    setShowPassword,
    handleSubmit,
    rememberMe,
    setRememberMe,
  } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden relative px-4 sm:px-6 lg:px-8">


      <div className="absolute w-[600px] h-[600px] bg-indigo-600/20 blur-3xl rounded-full -top-40 -left-40 animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-600/20 blur-3xl rounded-full bottom-0 right-0 animate-pulse"></div>

   
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">

    
        <div className="hidden md:flex flex-col justify-center p-14 bg-gradient-to-br from-indigo-600/20 to-purple-600/10">
          <h1 className="text-4xl font-bold text-white">
            Admin Panel
          </h1>

          <p className="text-white/60 mt-4">
            Secure access to dashboard, user management, and system settings
          </p>

          <div className="mt-10 space-y-3 text-white/50 text-sm">
            <p>✓ Secure Authentication</p>
            <p>✓ User Management</p>
            <p>✓ Modern Dashboard</p>
          </div>
        </div>

       
        <div className="p-8 md:p-14">

          <h2 className="text-3xl font-bold text-white">
            Welcome Back
          </h2>

          <p className="text-white/50 mt-2 text-sm">
            Sign in to continue
          </p>


          {errors.length > 0 && (
            <div className="mt-6 bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
              {errors.map((e, i) => (
                <p key={i} className="text-red-300 text-sm">
                  {e}
                </p>
              ))}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 mt-8">

     
            <InputAll
              ref={username}
              name="username"
              label="Username"
            />

       
            <div className="relative">
              <InputAll
                ref={password}
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[42px] text-xs text-indigo-400 hover:text-indigo-300 transition"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

           
            <div className="flex items-center justify-between text-sm text-white/60">

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="accent-indigo-500"
                />
                Remember me
              </label>

              <a
                href="/"
                className="text-indigo-400 hover:text-indigo-300 transition"
              >
                Forgot password?
              </a>

            </div>
            <button
              type="submit"
              disabled={send}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600
                         text-white font-semibold shadow-lg shadow-indigo-500/20
                         hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              {send ? "Signing In..." : "Sign In"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
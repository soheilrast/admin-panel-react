import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  FiGrid,
  FiHome,
  FiUsers,
  FiUser,
  FiLogOut,
  FiMenu,
} from "react-icons/fi";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function handleLogout() {
    localStorage.clear();
    navigate("/login", { replace: true });
  }

  const links = [
    { to: "/dashboard", label: "Home", icon: FiHome, end: true },
    { to: "/dashboard/users", label: "Users", icon: FiUsers },
    { to: "/dashboard/profile", label: "Profile", icon: FiUser },
  ];

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">

   
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
        />
      )}

  
      <aside
        className={`
          fixed md:static z-50
          h-full md:h-auto
          w-72
          bg-white/5 backdrop-blur-xl border-r border-white/10 p-6
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <h1 className="flex items-center gap-3 text-2xl font-bold mb-10">
          <FiGrid className="text-blue-500" />
          Dashboard
        </h1>

        <nav className="space-y-2">

          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              <Icon />
              {label}
            </NavLink>
          ))}

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition"
          >
            <FiLogOut />
            Logout
          </button>

        </nav>
      </aside>


      <main className="flex-1 w-full">


        <header className="h-16 md:h-20 border-b border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-between px-4 md:px-8">

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-xl"
          >
            <FiMenu />
          </button>

          <h2 className="text-lg md:text-xl font-semibold">
            Admin Dashboard
          </h2>

        </header>

      
        <div className="p-4 md:p-8">
          <Outlet />
        </div>

      </main>
    </div>
  );
}
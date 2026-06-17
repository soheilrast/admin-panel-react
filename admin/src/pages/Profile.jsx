import { useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiUser,
  FiMail,
  FiShield,
  FiCalendar,
} from "react-icons/fi";

export default function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  if (!user) {
    return (
      <div className="flex items-center justify-center h-[70vh] text-white">
        No user found
      </div>
    );
  }

  const details = [
    {
      icon: FiUser,
      label: "Name",
      value: `${user.firstName} ${user.lastName}`,
    },
    {
      icon: FiMail,
      label: "Email",
      value: user.email,
    },
    {
      icon: FiShield,
      label: "Role",
      value: user.role || "Admin",
      badge: true,
    },
    {
      icon: FiCalendar,
      label: "Gender",
      value: user.gender || "Unknown",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">


      <div
        className="
          relative
          w-full
          max-w-md
          rounded-3xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-2xl
          shadow-2xl
          overflow-hidden
        "
      >

 
        <div className="absolute -top-20 -left-20 w-56 h-56 bg-blue-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-52 h-52 bg-purple-600/20 blur-3xl rounded-full" />

        <div className="relative z-10 p-8">

 
          <button
            onClick={() => navigate(-1)}
            className="
              flex
              items-center
              gap-2
              text-blue-400
              hover:text-blue-300
              transition
            "
          >
            <FiArrowLeft />
            Back
          </button>


          <div className="flex justify-center mt-8">
            <img
              src={user.image || "https://i.pravatar.cc/150"}
              alt={user.firstName}
              className="
                w-28
                h-28
                rounded-full
                border-4
                border-white/20
                object-cover
                shadow-xl
              "
            />
          </div>

 
          <div className="text-center mt-5">
            <h2 className="text-2xl font-bold text-white">
              {user.firstName} {user.lastName}
            </h2>

            <p className="text-gray-400 mt-1">
              @{user.username}
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {details.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.label}>
                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3 text-gray-400">
                      <Icon />
                      <span>{item.label}</span>
                    </div>

                    {item.badge ? (
                      <span
                        className="
                          px-3
                          py-1
                          rounded-full
                          bg-blue-500/20
                          text-blue-300
                          text-sm
                        "
                      >
                        {item.value}
                      </span>
                    ) : (
                      <span className="text-white font-medium capitalize">
                        {item.value}
                      </span>
                    )}

                  </div>

                  {index !== details.length - 1 && (
                    <div className="h-px bg-white/10 mt-5" />
                  )}
                </div>
              );
            })}
          </div>

    
          <div className="mt-10">
            <button
              onClick={() => navigate("/dashboard/users")}
              className="
                w-full
                rounded-xl
                bg-blue-600
                py-3
                font-semibold
                text-white
                transition
                hover:bg-blue-500
                shadow-lg
                shadow-blue-500/20
              "
            >
              Manage Users
            </button>
          </div>

        </div>
      </div>

    </div>
  );
}
const chartData = [35, 60, 45, 80, 55, 95, 70];

export default function Home() {

  const stats = [
    { title: "Users", value: "1,245" },
    { title: "Orders", value: "354" },
    { title: "Revenue", value: "$18,430" },
    { title: "Growth", value: "+12.5%", color: "text-green-400" },
  ];

  const activities = [
    { text: "New User Registered", time: "2 min ago" },
    { text: "Profile Updated", time: "15 min ago" },
    { text: "New Order Created", time: "1 hour ago" },
  ];

  return (
    <div className="space-y-8">


      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard Overview
        </h1>

       
      </div>

 
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-slate-900 border border-slate-800 p-6"
          >
            <p className="text-slate-400 text-sm">
              {item.title}
            </p>

            <h2 className={`text-3xl font-bold mt-2 ${item.color || "text-white"}`}>
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8">

        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-semibold text-white">
            User Activity
          </h3>

          <span className="text-sm text-slate-400">
            Last 7 Days
          </span>
        </div>

        <div className="h-72 flex items-end gap-4">

          {chartData.map((value, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center"
            >
              <div
                className="
                  w-full
                  rounded-t-xl
                  bg-gradient-to-t
                  from-indigo-600
                  to-cyan-400
                  hover:scale-105
                  transition
                  duration-300
                "
                style={{ height: `${value}%` }}
              />

              <span className="mt-3 text-xs text-slate-500">
                Day {index + 1}
              </span>
            </div>
          ))}

        </div>
      </div>


      <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8">

        <h3 className="text-xl font-semibold text-white mb-6">
          Recent Activity
        </h3>

        <div className="space-y-4">

          {activities.map((item) => (
            <div
              key={item.text}
              className="flex justify-between border-b border-slate-800 pb-3"
            >
              <span className="text-slate-300">
                {item.text}
              </span>

              <span className="text-slate-500">
                {item.time}
              </span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}
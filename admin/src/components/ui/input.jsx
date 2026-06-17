import { forwardRef } from "react";

const InputAll = forwardRef(
  ({ name, label, type = "text" }, ref) => {
    return (
      <div>
        <label className="block mb-2 text-sm text-white/70">
          {label}
        </label>

        <input
          ref={ref}
          name={name}
          type={type}
          className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-white/10
            px-4
            py-3
            text-white
            placeholder-white/30
            backdrop-blur-md
            transition
            focus:outline-none
            focus:ring-2
            focus:ring-indigo-500
            focus:border-indigo-500
          "
        />
      </div>
    );
  }
);

export default InputAll;
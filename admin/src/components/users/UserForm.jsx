import { USER_FIELDS } from "../../constants/userForm";

export default function UserForm({
  formData,
  setFormData,
  className = "",
}) {
  return (
    <div className={className}>
      {USER_FIELDS.map((key) => (
        <input
          key={key}
          placeholder={key}
          value={formData[key]}
          onChange={(e) =>
            setFormData({
              ...formData,
              [key]: e.target.value,
            })
          }
          className="p-3 rounded-xl bg-white/10 border border-white/10 w-full"
        />
      ))}
    </div>
  );
}
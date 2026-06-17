import UserForm from "./UserForm";

export default function UserCard({
  user,
  editingId,
  editForm,
  setEditForm,
  onEdit,
  onSave,
  onDelete,
}) {
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4">
      <img
        src={user.image || "https://via.placeholder.com/100"}
        alt={user.firstName}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mx-auto sm:mx-0"
      />

      <div className="flex-1 min-w-0 text-center sm:text-left">
        {editingId === user.id ? (
          <UserForm
            formData={editForm}
            setFormData={setEditForm}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2"
          />
        ) : (
          <>
            <h3 className="font-semibold break-words">
              {user.firstName} {user.lastName}
            </h3>

            <p className="text-white/50 text-sm break-all">
              {user.email}
            </p>

            <p className="text-white/50 text-sm break-all">
              {user.phone || "No phone"}
            </p>
          </>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto sm:ml-auto">
        {editingId === user.id ? (
          <button
            onClick={() => onSave(user.id)}
            className="px-4 py-2 rounded-xl bg-green-500/20 text-green-300"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => onEdit(user)}
            className="px-4 py-2 rounded-xl bg-blue-500/20 text-blue-300"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => onDelete(user.id)}
          className="px-4 py-2 rounded-xl bg-red-500/20 text-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
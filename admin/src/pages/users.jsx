import UserCard from "../components/users/UserCard";
import { useUsers } from "../hooks/useUsers";
import { INITIAL_USER_FORM } from "../constants/userForm";

const Users = () => {
  const {
    users,
    editingId,
    editForm,
    setEditForm,
    isCreating,
    setIsCreating,
    createForm,
    setCreateForm,
    handleSaveCreate,
    handleEdit,
    handleSaveEdit,
    handleDelete,
  } = useUsers();

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">


      <div className="absolute w-[400px] h-[400px] bg-indigo-600/20 blur-3xl rounded-full -top-32 -left-32" />
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-3xl rounded-full bottom-0 right-0" />

      <div className="relative max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">

        
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <h1 className="text-xl sm:text-2xl font-bold">
            Users Dashboard
          </h1>

          <button
            onClick={() => setIsCreating(true)}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 w-full sm:w-auto"
          >
            + Create
          </button>
        </div>

        
        {isCreating && (
          <div className="mb-6 bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">

            {Object.keys(INITIAL_USER_FORM).map((key) => (
              <input
                key={key}
                placeholder={key}
                value={createForm[key]}
                onChange={(e) =>
                  setCreateForm({
                    ...createForm,
                    [key]: e.target.value,
                  })
                }
                className="p-3 rounded-xl bg-white/10 border border-white/10 w-full text-white"
              />
            ))}

            <div className="sm:col-span-2 lg:col-span-5 flex gap-3">

              <button
                onClick={handleSaveCreate}
                className="flex-1 py-2 rounded-xl bg-green-500/20 text-green-300 hover:bg-green-500/30 transition"
              >
                Save
              </button>

              <button
                onClick={() => {
                  setIsCreating(false);
                  setCreateForm(INITIAL_USER_FORM);
                }}
                className="flex-1 py-2 rounded-xl bg-gray-500/20 text-gray-300 hover:bg-gray-500/30 transition"
              >
                Cancel
              </button>

            </div>
          </div>
        )}

       
        <div className="space-y-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              editingId={editingId}
              editForm={editForm}
              setEditForm={setEditForm}
              onEdit={handleEdit}
              onSave={handleSaveEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Users;
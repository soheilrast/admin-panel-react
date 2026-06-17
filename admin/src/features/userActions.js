
export function createUser(users, createForm) {
  return [
    ...users,
    {
      id: Date.now(),
      firstName: createForm.firstName,
      lastName: createForm.lastName,
      email: createForm.email,
      image: createForm.image,
      phone: createForm.phone,
    },
  ];
}


export function updateUser(users, id, editForm) {
  return users.map((user) =>
    user.id === id
      ? {
          ...user,
          firstName: editForm.firstName,
          lastName: editForm.lastName,
          email: editForm.email,
          image: editForm.image,
          phone: editForm.phone,
        }
      : user
  );
}


export function deleteUser(users, id) {
  return users.filter((user) => user.id !== id);
}
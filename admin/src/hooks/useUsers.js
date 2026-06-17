import { useState, useEffect } from "react";

import { getUsers } from "../services/userService";
import {
  createUser,
  updateUser,
  deleteUser,
} from "../features/userActions";

import { INITIAL_USER_FORM } from "../constants/userForm";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [editForm, setEditForm] =
    useState(INITIAL_USER_FORM);

  const [isCreating, setIsCreating] = useState(false);

  const [createForm, setCreateForm] =
    useState(INITIAL_USER_FORM);

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadUsers();
  }, []);


  function handleSaveCreate() {
    setUsers((prev) => createUser(prev, createForm));
    setIsCreating(false);
    setCreateForm(INITIAL_USER_FORM);
  }


  function handleEdit(user) {
    setEditingId(user.id);
    setEditForm({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      image: user.image || "",
      phone: user.phone || "",
    });
  }

  function handleSaveEdit(id) {
    setUsers((prev) => updateUser(prev, id, editForm));
    setEditingId(null);
  }


  function handleDelete(id) {
    setUsers((prev) => deleteUser(prev, id));
  }

  return {
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
  };
}
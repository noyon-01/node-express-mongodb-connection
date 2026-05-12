import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createUser = async (formData) => {
  "use server";
  const newUser = Object.fromEntries(formData.entries());

  const res = await fetch("http://localhost:8000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  const result = await res.json();

  if (result.insertedId) {
    revalidatePath("/users");
  }

  return result;
};

export const updateUserAction = async (id, formData) => {
  "use server";
  const updateUser = Object.fromEntries(formData.entries());

  const res = await fetch(`http://localhost:8000/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateUser),
  });
  const data = await res.json();

  if (data.modifiedCount > 0) {
    revalidatePath("/users");
    redirect("/users");
  }
  console.log(data);
  return data;
};

export const deleteUser = async (userId) => {
  "use server";
  const res = await fetch(`http://localhost:8000/users/${userId}`, {
    method: "DELETE",
  });
  const data = await res.json();
  console.log(data);

  if (data.deletedCount > 0) {
    revalidatePath("/users");
  }

  return data;
};

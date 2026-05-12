import { getUserById } from "@/components/Data";
import { updateUserAction } from "@/lib/actions";
import { Button, Input, Label, Modal, TextField } from "@heroui/react";

export default async function UpdateUserPage({ params }) {
  const { id } = await params;
  const user = await getUserById(id);

  const handleUpdateUser = async (formData) => {
    "use server";
    return updateUserAction(id, formData);
  };

  return (
    <div className="w-md mx-auto mt-10 shadow px-10 py-15 rounded-2xl">
      <form action={handleUpdateUser} className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Update User Details</h1>
        <TextField
          className="w-full"
          name="name"
          type="text"
          defaultValue={user?.name}
        >
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
        </TextField>
        <TextField
          className="w-full"
          name="email"
          type="email"
          defaultValue={user?.email}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
        </TextField>
        <TextField className="w-full" name="role" defaultValue={user?.role}>
          <Label>Role</Label>
          <Input placeholder="Enter your role" />
        </TextField>
        <Modal.Footer>
          <Button slot="close" variant="secondary">
            Cancel
          </Button>
          <Button type="submit" slot="close">
            Update
          </Button>
        </Modal.Footer>
      </form>
    </div>
  );
}

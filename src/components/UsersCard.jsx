"use client";

import { Plus } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import Link from "next/link";

export default function UsersCard({ user, deleteUser }) {
  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
  };

  return (
    <div className="bg-gray-200 rounded p-4">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <h3 className="text-xl font-semibold">{user.email}</h3>
      <p className="font-medium">{user.role}</p>
      <div className="flex gap-2 mt-3">
        <Link href={`/users/${user._id}`}>
          <Button className="rounded">
            <Plus />
            Details
          </Button>
        </Link>
        <Link href={`/edit`}>
          <Button className="rounded">
            <Plus />
            Edit
          </Button>
        </Link>

        <AlertDialog>
          <Button variant="danger" className={"rounded"}>
            Delete
          </Button>
          <AlertDialog.Backdrop>
            <AlertDialog.Container>
              <AlertDialog.Dialog className="sm:max-w-[400px]">
                <AlertDialog.CloseTrigger />
                <AlertDialog.Header>
                  <AlertDialog.Icon status="danger" />
                  <AlertDialog.Heading>
                    Delete {user.name} permanently?
                  </AlertDialog.Heading>
                </AlertDialog.Header>
                <AlertDialog.Body>
                  <p>
                    This will permanently delete <strong>{user.name}</strong>{" "}
                    and all of its data. This action cannot be undone.
                  </p>
                </AlertDialog.Body>
                <AlertDialog.Footer>
                  <Button slot="close" variant="tertiary" className={"rounded"}>
                    Cancel
                  </Button>
                  <Button
                    onClick={() => handleDeleteUser(user._id)}
                    slot="close"
                    variant="danger"
                    className={"rounded"}
                  >
                    Confirm Delete
                  </Button>
                </AlertDialog.Footer>
              </AlertDialog.Dialog>
            </AlertDialog.Container>
          </AlertDialog.Backdrop>
        </AlertDialog>
      </div>
    </div>
  );
}

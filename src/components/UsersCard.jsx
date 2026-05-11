import { Plus, TrashBin } from "@gravity-ui/icons";
import { Button } from "@heroui/react";

export default function UsersCard({ user }) {
  return (
    <div className="bg-gray-200 rounded p-4">
      <h1 className="text-2xl font-bold">{user.name}</h1>
      <h3 className="text-xl font-semibold">{user.email}</h3>
      <p className="font-medium">{user.role}</p>
      <div className="flex gap-2 mt-3">
        <Button>
          <Plus />
          Edit
        </Button>
        <Button>
          <Plus />
          Details
        </Button>
        <Button variant="danger">
          <TrashBin />
          Delete
        </Button>
        
      </div>
    </div>
  );
}

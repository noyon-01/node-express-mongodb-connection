import { getUserById } from "@/components/Data";
import { Button } from "@heroui/react";
import Link from "next/link";

export default async function UserDetailsPage({ params }) {
  const { id } = await params;
  const user = await getUserById(id);

  return (
    <div className="max-w-7xl mx-auto mt-10">
        <h1 className="text-4xl text-center font-bold pb-6">This is Users Details Page</h1>
      <div className="bg-gray-200 rounded p-8">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <h3 className="text-xl font-semibold">{user.email}</h3>
        <p className="font-medium">{user.role}</p>
        <div className="flex gap-2 mt-3">
          <Link href={"/users"}>
            <Button className="mt-2.5 rounded">Back To User Page</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

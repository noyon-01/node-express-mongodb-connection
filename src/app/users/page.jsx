import { usersData } from "@/components/Data"
import UsersCard from "@/components/UsersCard";

export default async function UsersPage() {
    const users = await usersData();
  return (
    <div>
        <h1 className="text-5xl text-center font-bold pt-10">This is Users Page</h1>
        <h3 className="text-3xl text-center font-bold pt-4">Users : {users.length}</h3>
        <div className="max-w-7xl mx-auto grid grid-cols-4 gap-4 mt-5">
          {
            users.map(user => <UsersCard key={user.id} user={user}/>)
          }
        </div>
    </div>
  )
}
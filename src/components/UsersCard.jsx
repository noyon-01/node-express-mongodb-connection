export default function UsersCard({user}) {
  return (
    <div className="bg-gray-200 rounded p-6">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <h3 className="text-xl font-semibold">{user.email}</h3>
    </div>
  )
}

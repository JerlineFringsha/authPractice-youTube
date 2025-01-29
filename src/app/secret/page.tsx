import { auth } from "@/auth";

export default async function Secret() {
  const session = await auth();
  const user = session?.user;
  if (!session ||!user) return <div>Your not authenticated</div>;
  return <h1>Welcome to secret Page {user.name}</h1>;
}

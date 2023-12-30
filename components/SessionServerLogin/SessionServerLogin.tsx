import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";

export const SessionServerLogin = async () => {
  const session = await getServerSession(authOptions);

  return (
    <section>
      <h2>Login Server</h2>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </section>
  );
};

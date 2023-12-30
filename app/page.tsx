import SigninWithGoogle from "@/components/SignInWithGoogle";
import LogoutButton from "@/components/LogoutButton";
import SigninWithGithub from "@/components/SignInWithGithub";
import { SessionClientLogin } from "@/components/SessionClientLogin/SessionClientLogin";
import { SessionServerLogin } from "@/components/SessionServerLogin/SessionServerLogin";

export default async function Home() {
  return (
    <main>
      <nav className="flex gap-3 justify-center">
        <SigninWithGoogle />
        <SigninWithGithub />
        <LogoutButton />
      </nav>
      <section className="flex flex-col gap-4">
        <div className="border mx-7">
          <SessionServerLogin />
        </div>
        <div className="border  mx-7">
          <SessionClientLogin />
        </div>
      </section>
    </main>
  );
}

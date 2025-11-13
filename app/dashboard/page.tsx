import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AuthenticatedNavBar from "@/components/ui/authNavBar";

export default async function page() {
  const cookieStore = await cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-black pb-8">
      {/* Header */}
      <AuthenticatedNavBar />
    </div>
  );
}

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AuthenticatedNavBar from "@/components/ui/authNavBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, History, Plus } from "lucide-react";
import WorkoutForm from "@/components/WorkoutForm";

export default async function page() {
  const cookieStore = await cookies();
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

      {/* Main Content */}
      <div className="mt-10">
        <Tabs
          defaultValue="account"
          className="w-[700px] items-center justify-center mx-auto flex "
        >
          <TabsList className="flex w-full" >
            <TabsTrigger value="workout" className="flex-1">
              <Plus /> 
              New Workout
            </TabsTrigger>
            <TabsTrigger value="history" className="flex-1" >
              <History /> 
              History
            </TabsTrigger>
            <TabsTrigger value="stats" className="flex-1">
              <BarChart3 />
              Stats
            </TabsTrigger>
          </TabsList>
          <TabsContent value="workout" className="text-white space-y-6">
            <WorkoutForm />
          </TabsContent>
          <TabsContent value="history" className="text-white space-y-6">
            History Page.
          </TabsContent>
          <TabsContent value="stats" className="text-white space-y-6">
            Status Page.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

import { LoginForm } from "@/components/login-form";

export default function SigninPage() {
  return (
    <>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 ">
        <div className="flex w-full flex-col gap-6 max-w-sm">
            <LoginForm />
        </div>
      </div>
      

    </>
  );
}

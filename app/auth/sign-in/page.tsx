import SignInForm from "@/components/auth/SigninForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next Boilerplate - Sign In",
};

const SignInPage = () => {
  return (
    <>
      <SignInForm />
      <div className="px-8 text-sm text-center text-muted-foreground">
        No account?{" "}
        <Link
          href="/auth/sign-up"
          className="underline underline-offset-4 hover:text-primary"
        >
          Create account here.
        </Link>
      </div>
    </>
  );
};

export default SignInPage;

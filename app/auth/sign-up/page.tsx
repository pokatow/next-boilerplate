import SignUpForm from "@/components/auth/SignupForm";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next Boilerplate - Sign Up",
};

const SignUpPage = () => {
  return (
    <>
      <SignUpForm />
      <div className="flex flex-col gap-2">
        <div className="px-8 text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/auth/sign-in"
            className="underline underline-offset-4 hover:text-primary"
          >
            Sign in here.
          </Link>
        </div>
        <p className="px-8 text-sm text-center text-muted-foreground">
          By clicking create, you agree to our{" "}
          <Link
            href="/terms"
            className="underline underline-offset-4 hover:text-primary"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </>
  );
};

export default SignUpPage;

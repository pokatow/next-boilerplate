import SignUpForm from "@/components/auth/sign-up-form";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next Boilerplate - Sign Up",
};

const SignUpPage = () => {
  return (
    <>
      <SignUpForm />
      <p className="px-8 text-sm text-center text-muted-foreground">
        By clicking continue, you agree to our{" "}
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
    </>
  );
};

export default SignUpPage;

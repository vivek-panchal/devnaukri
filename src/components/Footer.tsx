import Link from "next/link";
import { ImGithub, ImLinkedin2, ImTwitter } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl space-y-5 px-3 py-5">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Dev Naukri</h3>
            <p className="text-sm text-muted-foreground">
              Connecting talents with opportunities
            </p>
            <div className="flex items-center">
            <a href="https://www.linkedin.com/in/vivekpanchal2608/" className="text-white p-2 hover:bg-richblack-700 rounded-full duration-300 bg-black mx-1" target="_blank" rel="noopener noreferrer">
              <ImLinkedin2 size={17} />
            </a>
            <a href="https://www.github.com/vivek-panchal" className="text-white p-2 hover:bg-richblack-700 rounded-full duration-300 bg-black mx-1" target="_blank" rel="noopener noreferrer">
              <ImGithub size={17} />
            </a>
            <a href="https://twitter.com/Vivekpanchaal" className="text-white p-2 hover:bg-richblack-700 rounded-full duration-300 bg-black mx-1" target="_blank" rel="noopener noreferrer ">
              <ImTwitter size={17} />
            </a>
          </div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dev Naukri, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

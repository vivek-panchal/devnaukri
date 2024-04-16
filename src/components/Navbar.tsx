import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="shadow-sm">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={40} height={40} alt="Flow Jobs logo" />
          <span className="text-xl font-bold tracking-tight">Dev Naukri</span>
        </Link>
        <div className="flex gap-2">
          <Button asChild className="bg-green-600">
            <Link href="https://drive.google.com/file/d/1ti5r2Tuj6NvURKSCM9Lq1S6RHjF9T2y1/view?usp=sharing" target="_blank">Hire Me</Link>
          </Button>
          <Button asChild>
            <Link href="/jobs/new">Post a job</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}

import Image from "next/image";
import logo from "../../assets/img/logo.svg";
import { cn } from "../../lib/utils";

export const Logo = ({ className = "" }) => {
  return (
    <div className="">
      <Image className={cn("max-w-[150px]", className)} src={logo} alt="logo" />
    </div>
  );
};

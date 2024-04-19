import { ReactNode } from "react";
import Sidebar from "@/components/sidebar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;

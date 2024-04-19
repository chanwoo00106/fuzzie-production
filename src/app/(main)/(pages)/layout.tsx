import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="border-x-[1px] pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll">
      {children}
    </div>
  );
};

export default Layout;

import { ReactNode } from "react";
import { Header } from "@components/header";

export interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl mx-auto pt-10">{children}</div>
    </>
  );
};

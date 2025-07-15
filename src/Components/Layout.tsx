import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 py-10 bg-[#DFD0B8]/80 backdrop-blur-md border-2 border-[#948979] rounded-3xl shadow-2xl mt-12 mb-12">
    {children}
  </div>
);

export default Layout;

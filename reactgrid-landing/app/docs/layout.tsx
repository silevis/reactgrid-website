"use client";
import Sidebar from "@/components/docs/Sidebar";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here

  return (
    <div>
      <Sidebar />
      <div>{children}</div>;
    </div>
  );
}

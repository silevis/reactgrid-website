"use client";

export default function DocsPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-10 py-5">
      {/* <Sidebar /> */}
      {children}
    </div>
  );
}

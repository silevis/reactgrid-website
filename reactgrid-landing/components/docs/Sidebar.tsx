import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col p-10  outline-1 outline outline-neutral-200 rounded-md">
      {/* <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Click
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

function SidebarLink({
  href,
  title,
  isSectionIntroduction,
}: {
  href: string;
  title: string | number;
  isSectionIntroduction?: boolean;
}) {
  if (isSectionIntroduction)
    return (
      <Link href={""} className="text-neutral-500 font-bold">
        {title}
      </Link>
    );

  return (
    <Link href={""} className="text-neutral-500 font-normal ml-8">
      {title}
    </Link>
  );
}

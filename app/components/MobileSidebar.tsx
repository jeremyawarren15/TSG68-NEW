'use client';
import Link from 'next/link';

type SidebarItem = {
  name: string;
  href: string;
};

export default function MobileSidebar({
  drawerId,
  items,
}: {
  drawerId: string;
  items: SidebarItem[];
}) {
  const closeSidebar = () => {
    const drawerCheckbox = document.getElementById(
      drawerId
    ) as HTMLInputElement;
    if (drawerCheckbox) {
      drawerCheckbox.checked = false;
    }
  };

  return (
    <ul className="menu p-4 w-11/12 min-h-full bg-base-200">
      {items.map((item, index) => (
        <li key={item.name}>
          <Link href={item.href} onClick={closeSidebar}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

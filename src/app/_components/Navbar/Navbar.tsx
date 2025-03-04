'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  //* مش اصح حاجه
  const pathName = usePathname();
  console.log(pathName);

  const Links = [
    {
      href: '/',
      name: 'Home',
    },
    {
      href: '/blogs',
      name: 'Blogs',
    },
    {
      href: '/blogs/news',
      name: 'News',
    },
    {
      href: '/blogs/articles',
      name: 'Articles',
    },
    {
      href: '/products',
      name: 'Products',
    },
  ];
  return (
    <div className="py-5 bg-slate-200 text-black font-bold text-3xl text-center">
      <ul className="flex justify-center items-center gap-2">
        {Links.map((link) => (
          <li
            key={link.name}
            className={pathName === link.href ? 'text-red-500' : ''}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

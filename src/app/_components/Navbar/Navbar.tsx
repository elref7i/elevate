import Link from 'next/link';

export default function Navbar() {
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
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

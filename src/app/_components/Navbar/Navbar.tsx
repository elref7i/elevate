import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="py-5 bg-slate-200 text-black font-bold text-3xl text-center">
      <ul className="flex justify-center items-center gap-2">
        <li>
          <Link href={'/home'}>Home</Link>
        </li>
        <li>
          <Link href={'/blogs'}>Blogs</Link>
        </li>
        <li>
          <Link href={'/blogs/news'}>News</Link>
        </li>
        <li>
          <Link href={'/blogs/articles'}>Articles</Link>
        </li>
        <li>
          <Link href={'/products'}>Products</Link>
        </li>
      </ul>
    </div>
  );
}

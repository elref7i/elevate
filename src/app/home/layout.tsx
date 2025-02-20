import Link from 'next/link';

import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <ul>
        <li>
          <Link href="child">child home</Link>
        </li>
        <li>
          <Link href="product">product gome</Link>
        </li>
      </ul>
      <div>{children}</div>
    </>
  );
}

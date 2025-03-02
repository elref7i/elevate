'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function Navigate() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <button
      onClick={() => {
        router.push('/');
      }}
    >
      GO To Home
    </button>
  );
}

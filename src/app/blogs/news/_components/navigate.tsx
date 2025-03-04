'use client';

import { useRouter } from 'next/navigation';

export default function Navigate() {
  const router = useRouter();

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

import { ReactNode } from 'react';
import BlogsHeader from '../_components/BlogsHeader/BlogsHeader';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <BlogsHeader />
      {children}
    </div>
  );
}

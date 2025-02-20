import React from 'react';

export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug.length === 2) {
    return <div>Docs 2 {params.slug[0]}</div>;
  } else {
    return <div>Docs {params.slug[0]}</div>;
  }
}

import React from 'react';

export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug?.length === 2) {
    return <div>Docs 2 {params?.slug[0]}</div>;
  } else if (params.slug?.length === 1) {
    return <div>Docs {params?.slug[0]}</div>;
  }
  return <h1>Docs home Page</h1>;
}

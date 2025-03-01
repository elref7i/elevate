import { notFound } from 'next/navigation';

export default function ReviewDetails({
  params,
}: {
  params: { reviewId: string };
}) {
  console.log(params);

  if (Boolean(parseInt(params.reviewId) > 1000)) {
    notFound();
  }
  return <div>page review</div>;
}

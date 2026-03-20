import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Partnerships',
  description:
    'Strategic teaming arrangements and partnership opportunities for emergency management firms.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Partnerships"
      description="Strategic teaming arrangements and partnership opportunities for emergency management firms."
    />
  );
}

import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Detailed after-action reviews: situation, mission, execution, sustainment, and outcome.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Case Studies"
      description="Detailed after-action reviews: situation, mission, execution, sustainment, and outcome."
    />
  );
}

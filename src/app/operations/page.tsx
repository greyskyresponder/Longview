import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Operations',
  description: 'Active deployments, mission history, and operational proof of performance.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Operations"
      description="Active deployments, mission history, and operational proof of performance."
    />
  );
}

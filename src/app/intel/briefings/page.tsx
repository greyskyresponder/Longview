import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Briefings',
  description: 'After-action reports and operational analysis from recent deployments.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Briefings"
      description="After-action reports and operational analysis from recent deployments."
    />
  );
}

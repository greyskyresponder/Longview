import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Deployments',
  description:
    'Current and past deployment operations across the United States — tracked, measured, and mission-complete.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Deployments"
      description="Current and past deployment operations across the United States — tracked, measured, and mission-complete."
    />
  );
}

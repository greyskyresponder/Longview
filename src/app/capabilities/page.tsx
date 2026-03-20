import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Service Lines',
  description:
    'Comprehensive emergency management and disaster response capabilities, from IMT deployment to strategic resilience planning.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Service Lines"
      description="Comprehensive emergency management and disaster response capabilities, from IMT deployment to strategic resilience planning."
    />
  );
}

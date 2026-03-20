import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Services Overview',
  description:
    'Full-spectrum emergency management services designed for government agencies and critical infrastructure.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Services Overview"
      description="Full-spectrum emergency management services designed for government agencies and critical infrastructure."
    />
  );
}

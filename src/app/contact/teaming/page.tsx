import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Teaming Opportunities',
  description:
    'Partner with Longview Solutions Group on government contracts and emergency management operations.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Teaming Opportunities"
      description="Partner with Longview Solutions Group on government contracts and emergency management operations."
    />
  );
}

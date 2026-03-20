import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach Longview Solutions Group for consultation, teaming, or media inquiries.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Contact"
      description="Reach Longview Solutions Group for consultation, teaming, or media inquiries."
    />
  );
}

import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Company',
  description:
    'Longview Solutions Group — operational leadership in emergency management, disaster response, and national preparedness.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Company"
      description="Longview Solutions Group — operational leadership in emergency management, disaster response, and national preparedness."
    />
  );
}

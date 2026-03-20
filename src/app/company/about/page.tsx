import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'About Longview Solutions Group',
  description: 'Our story, our team, and the operational philosophy that drives every deployment.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="About Longview Solutions Group"
      description="Our story, our team, and the operational philosophy that drives every deployment."
    />
  );
}

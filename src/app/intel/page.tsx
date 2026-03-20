import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Intel',
  description: 'Operational briefings, situation reports, and white papers from the field.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Intel"
      description="Operational briefings, situation reports, and white papers from the field."
    />
  );
}

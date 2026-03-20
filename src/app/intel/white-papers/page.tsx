import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'White Papers',
  description:
    'Policy analysis, lessons learned, and industry research from Longview subject matter experts.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="White Papers"
      description="Policy analysis, lessons learned, and industry research from Longview subject matter experts."
    />
  );
}

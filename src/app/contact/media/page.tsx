import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Media & Speaking',
  description: 'Press inquiries, speaking engagements, and media resources.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Media & Speaking"
      description="Press inquiries, speaking engagements, and media resources."
    />
  );
}

import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Community',
  description: 'Grey Sky Responder Society, recruiting, and deployment stories from the field.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Community"
      description="Grey Sky Responder Society, recruiting, and deployment stories from the field."
    />
  );
}

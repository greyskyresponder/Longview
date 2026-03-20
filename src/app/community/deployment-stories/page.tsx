import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Deployment Stories',
  description:
    'First-person accounts from responders in the field — the human side of disaster response.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Deployment Stories"
      description="First-person accounts from responders in the field — the human side of disaster response."
    />
  );
}

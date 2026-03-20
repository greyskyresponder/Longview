import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Past Performance',
  description:
    'Documented deployment history with jurisdictions served, team sizes, and mission outcomes.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Past Performance"
      description="Documented deployment history with jurisdictions served, team sizes, and mission outcomes."
    />
  );
}

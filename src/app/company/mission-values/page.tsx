import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Mission & Values',
  description:
    'Faith, valor, and operational excellence — the principles that guide every deployment.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Mission & Values"
      description="Faith, valor, and operational excellence — the principles that guide every deployment."
    />
  );
}

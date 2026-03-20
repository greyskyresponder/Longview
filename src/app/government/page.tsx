import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Government',
  description:
    'Contract vehicles, framework compliance, past performance, and capability statements for procurement officials.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Government"
      description="Contract vehicles, framework compliance, past performance, and capability statements for procurement officials."
    />
  );
}

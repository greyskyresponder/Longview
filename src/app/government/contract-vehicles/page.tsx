import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Contract Vehicles',
  description:
    'Active contract vehicles including FL DMS State Term Contract and federal procurement pathways.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Contract Vehicles"
      description="Active contract vehicles including FL DMS State Term Contract and federal procurement pathways."
    />
  );
}

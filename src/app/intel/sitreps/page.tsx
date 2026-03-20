import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Situation Reports',
  description: 'Current situational awareness and operational updates from active missions.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Situation Reports"
      description="Current situational awareness and operational updates from active missions."
    />
  );
}

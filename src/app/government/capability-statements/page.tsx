import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Capability Statements',
  description:
    'Downloadable capability statements tailored for federal, state, and local procurement audiences.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Capability Statements"
      description="Downloadable capability statements tailored for federal, state, and local procurement audiences."
    />
  );
}

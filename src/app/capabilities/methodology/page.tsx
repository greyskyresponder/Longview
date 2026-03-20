import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Methodology & Standards',
  description:
    'NIMS/ICS-compliant frameworks, HSEEP-aligned exercises, and EMAP-ready operational standards.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Methodology & Standards"
      description="NIMS/ICS-compliant frameworks, HSEEP-aligned exercises, and EMAP-ready operational standards."
    />
  );
}

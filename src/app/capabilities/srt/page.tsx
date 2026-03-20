import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Specialty Response Teams',
  description:
    'Credentialed, deployment-ready teams for incident management, EOC staffing, and disaster housing operations.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Specialty Response Teams"
      description="Credentialed, deployment-ready teams for incident management, EOC staffing, and disaster housing operations."
    />
  );
}

import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Grey Sky Travel',
  description:
    'Managed travel logistics for emergency responders — rapid deployment, compliant booking, simplified per diem.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Grey Sky Travel"
      description="Managed travel logistics for emergency responders — rapid deployment, compliant booking, simplified per diem."
    />
  );
}

import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Recruiting',
  description:
    'Join the mission — career opportunities for experienced emergency management professionals.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Recruiting"
      description="Join the mission — career opportunities for experienced emergency management professionals."
    />
  );
}

import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Leadership Team',
  description:
    'Meet the leaders who bring decades of emergency management and disaster response experience to every mission.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Leadership Team"
      description="Meet the leaders who bring decades of emergency management and disaster response experience to every mission."
    />
  );
}

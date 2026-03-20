import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'Grey Sky Responder Society, Grey Sky Drone Program, and the National Disaster Database.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Programs"
      description="Grey Sky Responder Society, Grey Sky Drone Program, and the National Disaster Database."
    />
  );
}

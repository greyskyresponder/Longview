import type { Metadata } from 'next';
import { ComingSoonPage } from '@/components/ComingSoonPage';

export const metadata: Metadata = {
  title: 'Grey Sky Responder Society',
  description:
    'A credentialed network of emergency management professionals ready to deploy when the call comes.',
};

export default function Page() {
  return (
    <ComingSoonPage
      title="Grey Sky Responder Society"
      description="A credentialed network of emergency management professionals ready to deploy when the call comes."
    />
  );
}

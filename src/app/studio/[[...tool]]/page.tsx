'use client';

/**
 * Sanity Studio — embedded at /studio
 * This gives you a full CMS dashboard to manage all site content.
 */
import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

export default function StudioPage() {
  return <NextStudio config={config} />;
}

import { client } from './client';

export async function sanityFetch<T>(
  query: string,
  params?: Record<string, unknown>
): Promise<T | null> {
  try {
    return await client.fetch<T>(query, params ?? {}, {
      next: { revalidate: 60 },
    });
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return null;
  }
}

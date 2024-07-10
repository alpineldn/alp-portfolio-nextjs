import sanityClient from '@/utils/sanity/client';
import { WORK_QUERY } from '@/utils/sanity/queries';

export async function GET() {
  try {
    const projects = await sanityClient.fetch(WORK_QUERY, {
      start: 8,
      end: 50,
    });

    return Response.json({ projects });
  } catch (error) {
    Response.error();
  }
}

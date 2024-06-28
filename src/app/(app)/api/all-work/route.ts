import sanityClient from '@/utils/sanity/client';
import { WORK_QUERY } from '@/utils/sanity/queries';
import { NextApiRequest } from 'next';

export async function GET(req: NextApiRequest) {
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

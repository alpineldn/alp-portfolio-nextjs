import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const siteURL = 'http://localhost:3000';

    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const showTitle = searchParams.get('showTitle');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My website';

    const localImgPath = searchParams.get('img');

    const fontData = await fetch(
      new URL(
        '../../../../../public/fonts/neue-montreal/ttf/PPNeueMontreal-Regular.ttf',
        import.meta.url,
      ),
    ).then((res) => res.arrayBuffer());

    const backgroundStyle = localImgPath
      ? {
          backgroundImage: `url("${siteURL}/${localImgPath}")`,
          backgroundSize: 'cover',
        }
      : {
          background:
            'linear-gradient(135deg, #0a192f, #172a45, #0a192f, #0a192f, #1c2b4b, #0a192f)',
        };

    return new ImageResponse(
      (
        <div
          style={{
            ...backgroundStyle,
            fontFamily: '"ppneuemontreal"',
          }}
          tw="text-white w-full h-full flex items-center justify-center"
        >
          {!!showTitle && (
            <div tw="rounded-lg bg-white bg-opacity-20 p-8 text-center shadow-lg text-6xl">
              {title}
            </div>
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'ppneuemontreal',
            data: fontData,
            style: 'normal',
          },
        ],
      },
    );
  } catch (e: any) {
    return new Response('Failed to generate OG image', { status: 500 });
  }
}

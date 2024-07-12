import { SITE_URL } from '@/utils/constants';
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const showTitle = searchParams.get('showTitle');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My website';

    const imgPath = searchParams.get('img');
    const source = searchParams.get('source');

    let backgroundImageUrl = '';

    if (source === 'local') {
      backgroundImageUrl = `${SITE_URL}${imgPath}`;
    } else if (source === 'sanity' && imgPath) {
      backgroundImageUrl = imgPath;
    }
    console.log(backgroundImageUrl);

    const fontData = await fetch(
      new URL(
        '../../../../../public/fonts/neue-montreal/ttf/PPNeueMontreal-Regular.ttf',
        import.meta.url,
      ),
    ).then((res) => res.arrayBuffer());

    const backgroundStyle = backgroundImageUrl
      ? {
          backgroundImage: `url("${backgroundImageUrl}")`,
          backgroundSize: 'cover',
        }
      : {
          background:
            'linear-gradient(135deg, #0a192f, #172a45, #0a192f, #0a192f, #1c2b4b, #0a192f)',
        };

    console.log({ backgroundStyle });

    return new ImageResponse(
      (
        <div
          style={{
            ...backgroundStyle,
            fontFamily: '"ppneuemontreal"',
          }}
          tw="text-white w-full h-full flex justify-between flex-col py-16 px-8 gap-5"
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 115.76 46.48"
            width="115.76"
            height="46.48"
          >
            <path
              style={{
                fill: 'none',
                stroke: '#fff',
                strokeLinecap: 'square',
                strokeMiterlimit: 10,
                strokeWidth: '4px',
              }}
              d="m2.83 43.42 32.46-32.46 32.64 32.65H31.35l40.77-40.77 40.82 40.82"
            />
          </svg>

          {!!showTitle && <div tw="text-left text-6xl">{title}</div>}

          <a className="text-2xl" href="/">
            alpineldn.com
          </a>
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

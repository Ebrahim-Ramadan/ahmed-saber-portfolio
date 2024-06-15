import { ImageResponse } from 'next/og';

export async function GET(request) {
  return new ImageResponse(
    (
      <img
        width="100%"
              height="100%"
              style={{
                  borderRadius:'50%'
              }}
        src='/public/og.jpg'
       
      />
    ),
    {
      width: 1000,
      height: 1000,
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000', // cache for 1 year
        'Twitter-Card':'summary_large_image',
        'Twitter-Image': '/public/og.jpg',
      },
    },
  );
}
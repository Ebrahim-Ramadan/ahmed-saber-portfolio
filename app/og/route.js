import { ImageResponse } from 'next/og';
export async function GET(request) {
  return new ImageResponse(
    (
      <img
        width="100%"
              height="100%"
            
        src='https://raw.githubusercontent.com/Ebrahim-Ramadan/ahmed-saber/main/public/og.png'
       
      />
    ),
    {
      width: 1950,
      headers: {
        'Content-Type': 'image/jpeg',
        'Cache-Control': 'public, max-age=31536000', // cache for 1 year
        'Twitter-Card':'summary_large_image',
        'Twitter-Image': 'https://raw.githubusercontent.com/Ebrahim-Ramadan/ahmed-saber/main/public/og.png',
      },
    },
  );
}

import { FaceRecognition } from "@/blogs/FaceRecognition";

export default async function Home() {

    return (
       <FaceRecognition/>
        )
}
export const metadata = {
    title: "Face recognition module",
    description: "Face recognition module",
    openGraph: {
        images: ['https://avatars.githubusercontent.com/u/65041082?s=400&u=cb58112cd92067eb53afe77fc7beb1573aab869d&v=4'],
        title: 'Face recognition module',
        description: 'Face recognition module',
    },
    title: {
        default: 'Face recognition module',
        template: `%s - Face recognition module`,
    }, 
    keywords: [
        "Ebrahim Ramadan",
        "software engineer",
        "frontend engineer",
        "software blogs",
        "Face recognition module",
        "large file storage",
    ],
    description: 'Face recognition module',
    creator: "Sharmo",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: 'https://ebrahim-ramadan.vercel.app/',
        title: 'Face recognition module',
        description: ' Face recognition module',
        siteName: 'Face recognition module',
        images: [
            {
                url: 'https://ebrahim-ramadan.vercel.app/og',
                width: 1200,
                height: 630,
                alt: 'Face recognition module',
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: 'Face recognition module',
        description: 'Face recognition module',
        images: 'https://ebrahim-ramadan.vercel.app/og',
        creator: "@scoopsahoykid",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
}
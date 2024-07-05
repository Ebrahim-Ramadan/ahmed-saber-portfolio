import { DlibInstallation } from "@/blogs/DlibInstallation/DlibInstallation";

export default async function Home() {
    return (
        <DlibInstallation/>

        )
}
export const metadata = {
    title: "Dlib Installation with OpenCV",
    description: "Dlib Installation with OpenCV and how cool it is",
    openGraph: {
        images: ['https://avatars.githubusercontent.com/u/171610171?v=4'],
        title: 'Dlib Installation with OpenCV',
        description: 'Dlib Installation with OpenCV and how cool it is',
    },
    title: {
        default: 'Dlib Installation with OpenCV',
        template: `%s - Dlib Installation with OpenCV`,
    }, 
    keywords: [
        "Ebrahim Ramadan",
        "software engineer",
        "frontend engineer",
        "software blogs",
        "Dlib Installation with OpenCV",
        "large file storage",
    ],
    description: 'Dlib Installation with OpenCV',
    creator: "Sharmo",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: 'https://ahmed-saber.vercel.app/',
        title: 'Dlib Installation with OpenCV',
        description: ' Dlib Installation with OpenCV',
        siteName: 'Dlib Installation with OpenCV',
        images: [
            {
                url: 'https://ahmed-saber.vercel.app/og',
                width: 1200,
                height: 630,
                alt: 'Dlib Installation with OpenCV',
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: 'Dlib Installation with OpenCV',
        description: 'Dlib Installation with OpenCV',
        images: 'https://ahmed-saber.vercel.app/og',
        creator: "@scoopsahoykid",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
}
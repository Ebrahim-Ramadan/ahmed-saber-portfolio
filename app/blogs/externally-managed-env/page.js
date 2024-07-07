
import { MDXRemote } from "next-mdx-remote/rsc";
import { getMdxContent } from "@/utils/serveMDX";
import { Suspense } from "react";
import { BlogHeader } from "@/blogs/Blog";

export default async function Home() {
    const { content, frontmatter } = getMdxContent("ExternallyManagedEnv.mdx");

    return (
        <div className="mx-auto mb-14 w-full max-w-screen-sm flex-1 p-4 md:p-24 space-y-8 flex min-h-screen flex-col items-center">
        <BlogHeader
        title='Externally Managed Environment'
        desc='so much erros with this'
        imgPath='/Blogs/dlib.png'
        />
<Suspense  fallback={<div>Loading...</div>}>
        <MDXRemote source={content} />
    </Suspense>
    </div>
        )
}
export const metadata = {
    title: "Externally managed env",
    description: "Externally managed env",
    openGraph: {
        images: ['https://avatars.githubusercontent.com/u/65041082?s=400&u=cb58112cd92067eb53afe77fc7beb1573aab869d&v=4'],
        title: 'Externally managed env',
        description: 'Externally managed env',
    },
    title: {
        default: 'Externally managed env',
        template: `%s - Externally managed env`,
    }, 
    keywords: [
        "Ahmed Saber",
        "software engineer",
        "frontend engineer",
        "software blogs",
        "Externally managed env",
        "large file storage",
    ],
    description: 'Externally managed env',
    creator: "Sharmo",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: 'https://ebrahim-ramadan.vercel.app/',
        title: 'Externally managed env',
        description: ' Externally managed env',
        siteName: 'Externally managed env',
        images: [
            {
                url: 'https://ebrahim-ramadan.vercel.app/og',
                width: 1200,
                height: 630,
                alt: 'Externally managed env',
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: 'Externally managed env',
        description: 'Externally managed env',
        images: 'https://ebrahim-ramadan.vercel.app/og',
        creator: "@scoopsahoykid",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
}
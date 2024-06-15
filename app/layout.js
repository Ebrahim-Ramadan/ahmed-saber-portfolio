
import { GeistSans } from 'geist/font/sans';

import "./globals.css";



export const metadata = {
  title: "Ahmed Saber",
  description: "Ahmed Saber portfolio || Robotics Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans  .className}>
        {children}</body>
    </html>
  );
}

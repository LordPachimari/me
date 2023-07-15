import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { inter } from "public/fonts/font";
import Sidebar from "./components/sidebar";
import "./globals.css";

// export const metadata: Metadata = {
//   // metadataBase: new URL('https://leerob.io'),
//   title: {
//     default: "Ivan Nguyen",
//     template: "%s | Ivan Nguyen",
//   },
//   description: "Developer and businessman",
//   openGraph: {
//     title: "Ivan Nguyen",
//     description: "Developer and businessman",
//     // url: "https://leerob.io",
//     siteName: "Ivan Nguyen",
//     locale: "en-US",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   twitter: {
//     title: "Ivan Nguyen",
//     card: "summary_large_image",
//   },
//   // verification: {
//   //   google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
//   //   yandex: "14d2e73487fa6c71",
//   // },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "font-default text-black bg-white dark:text-white dark:bg-[#111010]",
        inter.variable
      )}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Sidebar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}

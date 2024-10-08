import { League_Spartan } from "next/font/google";
import "./globals.css";
import NextUi_Recoil_PROVIDER from "../components/NextUI_Recoil_providers/NextUi_Recoil_PROVIDER";

const inter = League_Spartan({ subsets: ["latin"], });

export const metadata = {
  title: "Quaid College",
  description: "Made with love by bilal567",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        <NextUi_Recoil_PROVIDER>
          <div className="">
            {children}
          </div>
        </NextUi_Recoil_PROVIDER>
      </body>
    </html>
  )
}

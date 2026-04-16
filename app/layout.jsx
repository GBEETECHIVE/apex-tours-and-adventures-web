import {  Poppins,Roboto } from "next/font/google";
import "./globals.css";
 
// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});


export const metadata = {
  title: "Apex Tours",
  description: "Explore Pakistan with us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} antialiased`}
      >
        

        {/* Pages */}
        {children}
      </body>
    </html>
  );
}
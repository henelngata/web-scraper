import localFont from "next/font/local";

export const inter = localFont({
  src: "/fonts/Inter-Regular.woff2",
  display: "swap",
  variable: "--font-inter",
  weight: "400",
  style: "normal",
});

export const spaceGrotesk = localFont({
  src: [
    {
      path: "/fonts/SpaceGrotesk-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "/fonts/SpaceGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/fonts/SpaceGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/SpaceGrotesk-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "/fonts/SpaceGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-space-grotesk",
});

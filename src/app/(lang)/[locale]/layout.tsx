import type { ReactNode } from "react";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: "fa" | "en" | "fr" }>;
}) {
  const { locale } = await params;
  const isFa = locale === "fa";

  return (
    <html lang={locale}>
      <head>
        {/* Add favicon */}
        <link rel="icon" href="/favicon.png" />
      </head>
      <body dir={isFa ? "rtl" : "ltr"} data-locale={locale} className={isFa ? "font-fa" : "font-sans"}>
        {children}
      </body>
    </html>
  );
}

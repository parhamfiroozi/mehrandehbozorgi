// src/app/(lang)/[locale]/layout.tsx
import type { ReactNode } from "react";
import { fontFa, fontCordoba } from "../../fonts"; // <- note the path

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const isFa = params.locale === "fa";

  return (
    <html lang={params.locale} dir={isFa ? "rtl" : "ltr"}>
      <body className={`${fontFa.className} ${fontCordoba.variable}`}>
        {children}
      </body>
    </html>
  );
}

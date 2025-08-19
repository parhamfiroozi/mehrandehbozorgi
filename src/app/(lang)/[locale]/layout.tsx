// src/app/(lang)/[locale]/layout.tsx
import type { ReactNode } from "react";

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
      <body className={isFa ? "font-fa" : "font-sans"}>{children}</body>
    </html>
  );
}

import type { ReactNode } from "react";
import { fontFa } from "../../fonts"; // adjust path

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
      <body className={fontFa.className}>{children}</body>
    </html>
  );
}

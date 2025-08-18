import type { ReactNode } from "react";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: "fa" | "en" | "fr" };
}) {
  const isFa = locale === "fa";
  return (
    <div
      dir={isFa ? "rtl" : "ltr"}
      data-locale={locale}
      className={isFa ? "font-fa" : "font-sans"}
    >
      {children}
    </div>
  );
}

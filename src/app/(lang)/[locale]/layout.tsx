// src/app/(lang)/[locale]/layout.tsx
import type { ReactNode } from "react";

type LocaleParams = { locale: "fa" | "en" | "fr" };
type LocaleLayoutProps = Readonly<{
  children: ReactNode;
  params: LocaleParams;
}>;

export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const isFa = params.locale === "fa";
  return (
    <div
      dir={isFa ? "rtl" : "ltr"}
      data-locale={params.locale}
      className={isFa ? "font-fa" : "font-sans"}
    >
      {children}
    </div>
  );
}

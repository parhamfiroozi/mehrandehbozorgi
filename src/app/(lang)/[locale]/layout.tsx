// src/app/(lang)/[locale]/layout.tsx
import type { ReactNode } from "react";

// CHANGE THIS LINE: Broaden the type from a specific union to string.
type LocaleParams = { locale: string };

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

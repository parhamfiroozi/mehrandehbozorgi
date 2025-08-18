// src/app/(lang)/[locale]/layout.tsx
import type { ReactNode } from "react";

export default function LocaleLayout(props: any) {
  const { children, params } = props as {
    children: ReactNode;
    params: { locale: "fa" | "en" | "fr" };
  };
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

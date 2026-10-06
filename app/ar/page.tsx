import { SiteHeader } from "@/components/SiteHeader";
import { FTCBar } from "@/components/FTCBar";
import { ProductExplorer } from "@/components/ProductExplorer";
import { SiteFooter } from "@/components/SiteFooter";
import { PRODUCTS } from "@/data/products";

export default function HomeAr() {
  return (
    <div lang="ar" dir="rtl">
      <SiteHeader lang="ar" />
      <FTCBar lang="ar" />
      <main>
        <ProductExplorer products={PRODUCTS} lang="ar" />
      </main>
      <SiteFooter lang="ar" />
    </div>
  );
}
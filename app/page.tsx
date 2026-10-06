import { SiteHeader } from "@/components/SiteHeader";
import { FTCBar } from "@/components/FTCBar";
import { ProductExplorer } from "@/components/ProductExplorer";
import { SiteFooter } from "@/components/SiteFooter";
import { PRODUCTS } from "@/data/products";

export default function Home() {
  return (
    <>
      <SiteHeader lang="en" />
      <FTCBar lang="en" />
      <main>
        <ProductExplorer products={PRODUCTS} lang="en" />
      </main>
      <SiteFooter lang="en" />
    </>
  );
}
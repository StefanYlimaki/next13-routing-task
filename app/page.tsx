import ProductSearch from "@/components/ProductSearch";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>

      <ProductSearch />
      <Link href={"/products/list"}>See Products</Link>
    </main>
  );
}

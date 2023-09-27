import Link from "next/link";
import styles from "./products.module.css";

const ProductsList = () => {
  return (
    <main>
      <h1>Products</h1>
      <ul className={styles.ul}>
        <li>
          <Link href="/products/koivuklapi">Koivuklapit</Link>
        </li>
        <li>
          <Link href="/products/mantyklapi">Mäntyklapit</Link>
        </li>
        <li>
          <Link href="/products/sekaklapi">Sekäklapit</Link>
        </li>
      </ul>
    </main>
  );
};

export default ProductsList;

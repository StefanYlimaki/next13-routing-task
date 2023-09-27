import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <p>Next.js</p>

        <ul className={styles.links}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/cart">
            <li>Shopping Cart</li>
          </Link>
          <Link href="/account">
            <li>Account</li>
          </Link>
          <Link href="/sign-in">
            <li>Sign in</li>
          </Link>
          <Link href="/register">
            <li>Register</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

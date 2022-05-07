import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Cart from "../src/components/Cart";

export default function Home() {
  return (
    <div>
      <Cart />
    </div>
  );
}

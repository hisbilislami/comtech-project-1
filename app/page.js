import styles from "./page.module.css";
import React from "react";
import Navbar from "./navbar/Navbar"


export default function Home() {
  return (
    // <main className={styles.main}>
    //   {/* content will go in here. */}
    //   {/* <h1 className="2xl">Hello world</h1> */}
    // </main>

    <div>
      <Navbar />
    </div>
  );
}

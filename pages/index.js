import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hulu 2.0</title>
        <meta
          name="Hulu 2.0"
          content="Hulu built with Next.js and TailwindCSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Nav */}

      {/* Results */}
    </div>
  );
}

import React, { Children } from "react";
import Header from "./Header";
import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";

interface Props {
  title: string;
  meta: string;
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { title, meta, children } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

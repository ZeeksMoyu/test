import React from "react";
import Header from "@/components/header/Header";
import Feature from "@/components/feature/Feature";
import Products from "@/components/products/Products";
import Inspirations from "@/components/inspirations/Inspirations";
import Tips from "@/components/tips/Tips";
import Share from "@/components/share/Share";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className={'container'}>
      <Header/>
        <Feature/>
        <Products/>
      <Inspirations/>
        <Tips/>
        <Share/>
        <Footer/>

    </main>
  )
}

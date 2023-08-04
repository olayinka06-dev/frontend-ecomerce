import NavigationBar from "@/components/navbar/NavigationBar";
import Product from "@/components/products/Product";

export default function Home() {
  return (
    <section className="px-20">
      <main className="container mx-auto">
        <NavigationBar />
        <Product />
      </main>
    </section>
  );
}

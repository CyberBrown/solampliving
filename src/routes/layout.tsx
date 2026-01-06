import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export default component$(() => {
  return (
    <>
      <Navbar />
      <main class="pt-16 min-h-screen">
        <Slot />
      </main>
      <Footer />
    </>
  );
});

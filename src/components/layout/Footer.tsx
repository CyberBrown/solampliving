import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Footer = component$(() => {
  const year = new Date().getFullYear();
  return (
    <footer class="footer footer-center p-10 bg-neutral text-neutral-content">
      <aside>
        <div class="text-2xl font-bold">
          <span class="text-primary">Sol</span>
          <span class="text-secondary">Amp</span>
          <span> Living</span>
        </div>
        <p class="font-bold">Amplify Your Life with the Power of the Sun</p>
        <p>Copyright {year} - All rights reserved</p>
      </aside>
      <nav>
        <div class="grid grid-flow-col gap-4">
          <Link href="/privacy" class="link link-hover">Privacy Policy</Link>
          <Link href="/terms" class="link link-hover">Terms of Service</Link>
          <Link href="/contact" class="link link-hover">Contact</Link>
        </div>
      </nav>
    </footer>
  );
});

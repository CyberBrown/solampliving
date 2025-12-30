import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div class="hero min-h-[80vh] bg-gradient-to-br from-primary/10 to-secondary/10">
        <div class="hero-content text-center">
          <div class="max-w-3xl">
            <h1 class="text-5xl font-bold text-primary mb-4">
              SolAmp Living
            </h1>
            <p class="text-2xl text-secondary font-semibold mb-6">
              Sustainable Solar Amplified Living Solutions
            </p>
            <p class="py-6 text-lg">
              Empowering homes and communities with innovative solar energy solutions.
              We amplify the power of the sun to create sustainable, efficient,
              and affordable living spaces for a brighter tomorrow.
            </p>
            <div class="flex gap-4 justify-center flex-wrap">
              <button class="btn btn-primary btn-lg">
                Get Started
              </button>
              <button class="btn btn-outline btn-secondary btn-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div class="py-20 px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">Our Solutions</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body items-center text-center">
                <div class="text-4xl mb-4">☀️</div>
                <h3 class="card-title">Solar Energy Systems</h3>
                <p>Custom-designed solar installations that maximize energy production for your unique space.</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body items-center text-center">
                <div class="text-4xl mb-4">🔋</div>
                <h3 class="card-title">Energy Storage</h3>
                <p>Advanced battery solutions to store solar energy and ensure 24/7 power availability.</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-xl">
              <div class="card-body items-center text-center">
                <div class="text-4xl mb-4">🏠</div>
                <h3 class="card-title">Smart Home Integration</h3>
                <p>Seamlessly integrate solar power with your home automation for optimal efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div class="bg-primary text-primary-content py-16 px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Go Solar?</h2>
          <p class="text-lg mb-8">
            Join thousands of homeowners who have already made the switch to sustainable energy.
          </p>
          <button class="btn btn-secondary btn-lg">
            Contact Us Today
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer class="footer footer-center p-10 bg-base-300 text-base-content">
        <div>
          <p class="font-bold text-lg">SolAmp Living</p>
          <p>Sustainable Solar Amplified Living Solutions</p>
          <p class="text-sm opacity-70">© 2025 SolAmp Living. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
});

export const head: DocumentHead = {
  title: "SolAmp Living - Sustainable Solar Amplified Living Solutions",
  meta: [
    {
      name: "description",
      content: "SolAmp Living provides innovative solar energy solutions for sustainable, efficient, and affordable living. Empowering homes and communities with solar power.",
    },
    {
      name: "keywords",
      content: "solar energy, sustainable living, solar panels, energy storage, green energy, renewable energy",
    },
  ],
};

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ProjectTypes } from "~/components/project-types";

export default component$(() => {
  return (
    <div class="min-h-screen bg-base-200">
      {/* Hero Section */}
      <div class="hero min-h-[80vh] bg-gradient-to-br from-solamp-forest via-forest to-solamp-green/80">
        <div class="hero-overlay bg-opacity-30"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-2xl">
            <h1 class="mb-5 text-5xl font-bold text-white drop-shadow-lg">
              Solar Amplified Living
            </h1>
            <p class="mb-5 text-xl text-white/90 drop-shadow">
              Harness the power of the sun for a sustainable future.
              We help you transition to clean, renewable energy with expert
              solar solutions tailored to your needs.
            </p>
            <div class="flex justify-center gap-4 flex-wrap">
              <button class="btn btn-primary btn-lg">Get Started</button>
              <button class="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-orange-600">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Project Types Ecosystem Section */}
      <div id="projects">
        <ProjectTypes />
      </div>

      {/* Features Section */}
      <div class="py-20 px-4 bg-base-100">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">Why Choose Solar?</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="card bg-base-200 shadow-xl">
              <div class="card-body items-center text-center">
                <div class="text-5xl mb-4">☀️</div>
                <h3 class="card-title">Clean Energy</h3>
                <p>Reduce your carbon footprint with 100% renewable solar power.</p>
              </div>
            </div>
            <div class="card bg-base-200 shadow-xl">
              <div class="card-body items-center text-center">
                <div class="text-5xl mb-4">💰</div>
                <h3 class="card-title">Save Money</h3>
                <p>Lower your electricity bills and earn from excess energy production.</p>
              </div>
            </div>
            <div class="card bg-base-200 shadow-xl">
              <div class="card-body items-center text-center">
                <div class="text-5xl mb-4">🏠</div>
                <h3 class="card-title">Increase Value</h3>
                <p>Solar installations increase your property value significantly.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div class="py-16 px-4 bg-solamp-forest text-white">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Not Sure Where to Start?</h2>
          <p class="text-lg mb-8 text-white/90">
            Our team can help you design the perfect system for your needs. Get a free consultation.
          </p>
          <a href="#contact" class="btn btn-lg bg-solamp-bronze text-solamp-forest hover:bg-bronze-light border-none">
            Get Free Quote
          </a>
        </div>
      </div>

    </div>
  );
});

export const head: DocumentHead = {
  title: "Solar Amplified Living - Clean Energy Solutions",
  meta: [
    {
      name: "description",
      content: "Solar Amplified Living offers expert solar energy solutions for homes and businesses. Transition to clean, renewable energy with our tailored solar installations.",
    },
    {
      name: "keywords",
      content: "solar energy, solar panels, renewable energy, clean energy, sustainable living",
    },
  ],
};

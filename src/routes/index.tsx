import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { ProjectTypes } from "~/components/project-types";
import { ProductCard, type ProductCardProps } from "~/components/ui";

const featuredProducts: ProductCardProps[] = [
  {
    id: "rich-solar-200w",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=400&fit=crop",
    imageAlt: "Rich Solar 200W Monocrystalline Panel",
    category: "Solar Panels",
    title: "Rich Solar 200W Mono Panel",
    specs: ["200W", "12V/24V", "Monocrystalline"],
    price: { type: "fixed", amount: 189.99 },
    stockStatus: "in_stock",
  },
  {
    id: "victron-mppt-100-30",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=400&h=400&fit=crop",
    imageAlt: "Victron SmartSolar MPPT Charge Controller",
    category: "Charge Controllers",
    title: "Victron SmartSolar MPPT 100/30",
    specs: ["100V", "30A", "Bluetooth"],
    price: { type: "starting_at", amount: 229 },
    stockStatus: "in_stock",
  },
  {
    id: "battle-born-100ah",
    image: "https://images.unsplash.com/photo-1619641805634-98e4a14d7ed0?w=400&h=400&fit=crop",
    imageAlt: "Battle Born 100Ah LiFePO4 Battery",
    category: "Batteries",
    title: "Battle Born 100Ah LiFePO4",
    specs: ["100Ah", "12V", "3000+ Cycles"],
    price: { type: "fixed", amount: 925 },
    stockStatus: "limited",
  },
  {
    id: "renogy-3000w-inverter",
    image: "https://images.unsplash.com/photo-1548075530-4be0e3e53b92?w=400&h=400&fit=crop",
    imageAlt: "Renogy 3000W Pure Sine Wave Inverter",
    category: "Inverters",
    title: "Renogy 3000W Pure Sine Inverter",
    specs: ["3000W", "12V", "Pure Sine"],
    price: { type: "call_for_quote" },
    stockStatus: "in_stock",
  },
  {
    id: "go-power-portable-kit",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=400&h=400&fit=crop",
    imageAlt: "Go Power Portable Solar Kit",
    category: "Kits",
    title: "Go Power 130W Portable Kit",
    specs: ["130W", "Foldable", "PWM Controller"],
    price: { type: "fixed", amount: 349 },
    stockStatus: "out_of_stock",
  },
  {
    id: "morningstar-tristar-60",
    image: "https://images.unsplash.com/photo-1509390144018-eeaf65052242?w=400&h=400&fit=crop",
    imageAlt: "Morningstar TriStar MPPT 60",
    category: "Charge Controllers",
    title: "Morningstar TriStar MPPT 60",
    specs: ["150V", "60A", "Industrial"],
    price: { type: "starting_at", amount: 549 },
    stockStatus: "in_stock",
  },
];

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

      {/* Featured Products Section */}
      <section class="py-16 px-4 bg-base-100">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-headline font-bold text-forest mb-3">
              Featured Products
            </h2>
            <p class="text-lg text-neutral max-w-2xl mx-auto">
              Shop our top-rated solar equipment from industry-leading brands
            </p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart$={() => {
                  console.log(`Added ${product.title} to cart`);
                }}
              />
            ))}
          </div>
          <div class="text-center mt-10">
            <a href="/products" class="btn btn-primary btn-lg">
              View All Products
            </a>
          </div>
        </div>
      </section>

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

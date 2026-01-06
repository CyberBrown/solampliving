import { component$ } from "@builder.io/qwik";

interface ProjectType {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

const projectTypes: ProjectType[] = [
  {
    id: "off-grid-cabin",
    title: "Off-Grid Cabin",
    description: "Complete independence from the grid. Power your remote retreat with reliable solar.",
    icon: "cabin",
    href: "#off-grid-cabin",
  },
  {
    id: "rv-van-life",
    title: "RV / Van Life",
    description: "Take power on the road. Mobile solar solutions for adventure seekers.",
    icon: "rv",
    href: "#rv-van-life",
  },
  {
    id: "grid-tied-backup",
    title: "Grid-Tied Backup",
    description: "Stay powered when the grid fails. Seamless backup for peace of mind.",
    icon: "grid",
    href: "#grid-tied-backup",
  },
  {
    id: "diy-starter",
    title: "DIY Starter Kit",
    description: "Learn the fundamentals. Perfect for beginners ready to build their first system.",
    icon: "starter",
    href: "#diy-starter",
  },
];

const ProjectIcon = component$<{ type: string }>(({ type }) => {
  const iconClass = "w-12 h-12 stroke-current";

  switch (type) {
    case "cabin":
      return (
        <svg class={iconClass} viewBox="0 0 48 48" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          {/* Cabin with solar panel on roof */}
          <path d="M6 24L24 8L42 24" />
          <path d="M10 22V40H38V22" />
          <rect x="18" y="28" width="12" height="12" />
          <path d="M24 28V40" />
          <path d="M18 34H30" />
          {/* Solar panel on roof */}
          <rect x="14" y="12" width="20" height="8" transform="rotate(-25 24 16)" />
          <path d="M16 14L32 10" />
          <path d="M17 18L33 14" />
          {/* Sun */}
          <circle cx="40" cy="10" r="3" />
          <path d="M40 4V6M40 14V16M34 10H36M44 10H46M35.5 5.5L37 7M43 13L44.5 14.5M35.5 14.5L37 13M43 7L44.5 5.5" />
        </svg>
      );
    case "rv":
      return (
        <svg class={iconClass} viewBox="0 0 48 48" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          {/* Van body */}
          <path d="M4 32V18C4 16 5.5 14 8 14H28L36 22V32" />
          <path d="M36 32H44V26L40 22H36" />
          {/* Wheels */}
          <circle cx="12" cy="34" r="4" />
          <circle cx="36" cy="34" r="4" />
          <path d="M16 34H32" />
          {/* Windows */}
          <rect x="8" y="18" width="8" height="6" rx="1" />
          <rect x="20" y="18" width="6" height="6" rx="1" />
          {/* Solar panel on roof */}
          <rect x="10" y="10" width="16" height="4" />
          <path d="M12 10V14M16 10V14M20 10V14M24 10V14" />
          {/* Sun rays */}
          <path d="M32 6L34 8M38 4V7M42 6L40 8" />
        </svg>
      );
    case "grid":
      return (
        <svg class={iconClass} viewBox="0 0 48 48" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          {/* House */}
          <path d="M8 22L24 10L40 22" />
          <path d="M12 20V38H36V20" />
          <rect x="20" y="26" width="8" height="12" />
          {/* Power lines */}
          <path d="M2 14H10" />
          <path d="M6 10V18" />
          <path d="M6 14L12 20" />
          {/* Battery/inverter */}
          <rect x="26" y="28" width="6" height="8" rx="1" />
          <path d="M28 28V26M32 28V26" />
          {/* Lightning bolt (power) */}
          <path d="M29 31L27 34H31L29 37" />
          {/* Connection to grid */}
          <path d="M2 14C2 14 0 14 0 16V42" stroke-dasharray="2 2" />
        </svg>
      );
    case "starter":
      return (
        <svg class={iconClass} viewBox="0 0 48 48" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          {/* Solar panel */}
          <rect x="8" y="8" width="20" height="14" rx="1" />
          <path d="M12 8V22M16 8V22M20 8V22M24 8V22" />
          <path d="M8 12H28M8 16H28" />
          {/* Stand */}
          <path d="M14 22L10 32H26L22 22" />
          {/* Battery */}
          <rect x="30" y="18" width="12" height="18" rx="2" />
          <path d="M34 18V14H38V18" />
          <path d="M33 24H39M33 28H39M33 32H39" />
          {/* Cable connecting */}
          <path d="M28 16C30 16 30 22 30 24" />
          {/* Plus/minus */}
          <circle cx="34" cy="40" r="2" />
          <circle cx="38" cy="40" r="2" />
        </svg>
      );
    default:
      return (
        <svg class={iconClass} viewBox="0 0 48 48" fill="none" stroke-width="1.5">
          <circle cx="24" cy="24" r="20" />
        </svg>
      );
  }
});

export const ProjectTypes = component$(() => {
  return (
    <section class="py-16 px-4 bg-white">
      <div class="max-w-6xl mx-auto">
        {/* Section Header */}
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-solamp-forest mb-4">
            What Are You Building?
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the right components for your project. Browse curated systems designed for your specific needs.
          </p>
        </div>

        {/* Project Type Grid */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectTypes.map((project) => (
            <a
              key={project.id}
              href={project.href}
              class="group relative bg-gray-50 rounded-xl p-6 border-2 border-transparent hover:border-solamp-green hover:bg-white transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div class="mb-4 text-solamp-forest group-hover:text-solamp-green transition-colors duration-300">
                <ProjectIcon type={project.icon} />
              </div>

              {/* Title */}
              <h3 class="text-xl font-semibold text-solamp-forest mb-2 group-hover:text-solamp-green transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Explore Link */}
              <span class="inline-flex items-center text-sm font-medium text-solamp-green group-hover:text-solamp-forest transition-colors duration-300">
                Explore
                <svg
                  class="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>

              {/* Subtle corner accent */}
              <div class="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-xl">
                <div class="absolute top-0 right-0 w-8 h-8 bg-solamp-green/0 group-hover:bg-solamp-green/10 transform rotate-45 translate-x-4 -translate-y-4 transition-colors duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
});

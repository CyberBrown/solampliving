import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export type StockStatus = "in_stock" | "out_of_stock" | "limited";

export type PriceType =
  | { type: "fixed"; amount: number }
  | { type: "starting_at"; amount: number }
  | { type: "call_for_quote" };

export interface ProductCardProps {
  /** Product unique identifier */
  id: string;
  /** Product image URL */
  image: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Product category (e.g., "Solar Panels", "Inverters") */
  category: string;
  /** Product title/name */
  title: string;
  /** Key specs as an array (will be displayed pipe-separated) */
  specs: string[];
  /** Price configuration */
  price: PriceType;
  /** Stock status */
  stockStatus: StockStatus;
  /** URL to product detail page */
  detailUrl?: string;
  /** Handler for add to cart action */
  onAddToCart$?: () => void;
}

/**
 * Formats a price value to USD currency string
 */
const formatPrice = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
};

/**
 * Returns stock badge configuration based on status
 */
const getStockBadge = (
  status: StockStatus
): { label: string; bgClass: string; textClass: string } => {
  switch (status) {
    case "in_stock":
      return {
        label: "In Stock",
        bgClass: "bg-vibrant",
        textClass: "text-white",
      };
    case "out_of_stock":
      return {
        label: "Out of Stock",
        bgClass: "bg-neutral",
        textClass: "text-white",
      };
    case "limited":
      return {
        label: "Limited Stock",
        bgClass: "bg-bronze",
        textClass: "text-forest",
      };
  }
};

export const ProductCard = component$<ProductCardProps>((props) => {
  const {
    id,
    image,
    imageAlt,
    category,
    title,
    specs,
    price,
    stockStatus,
    detailUrl,
  } = props;

  const stockBadge = getStockBadge(stockStatus);
  const productUrl = detailUrl || `/products/${id}`;
  const isAvailable = stockStatus !== "out_of_stock";

  return (
    <div class="card bg-white shadow-md hover:shadow-xl transition-shadow duration-300 group">
      {/* Image Container */}
      <figure class="relative bg-mist aspect-square overflow-hidden">
        <img
          src={image}
          alt={imageAlt || title}
          class="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          width={300}
          height={300}
          loading="lazy"
        />
        {/* Stock Badge - Top Left */}
        <div
          class={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${stockBadge.bgClass} ${stockBadge.textClass}`}
        >
          {stockBadge.label}
        </div>
      </figure>

      <div class="card-body p-4 gap-2">
        {/* Category Label */}
        <span class="text-vibrant text-xs font-semibold uppercase tracking-wider">
          {category}
        </span>

        {/* Product Title */}
        <h3 class="card-title text-forest text-lg font-medium leading-tight line-clamp-2">
          <Link href={productUrl} class="hover:text-vibrant transition-colors">
            {title}
          </Link>
        </h3>

        {/* Specs - Pipe Separated */}
        {specs.length > 0 && (
          <p class="text-neutral text-sm">
            {specs.map((spec, index) => (
              <span key={spec}>
                {spec}
                {index < specs.length - 1 && (
                  <span class="mx-2 text-base-300">|</span>
                )}
              </span>
            ))}
          </p>
        )}

        {/* Price Display */}
        <div class="mt-2">
          {price.type === "fixed" && (
            <p class="text-forest text-xl font-bold">
              {formatPrice(price.amount)}
            </p>
          )}
          {price.type === "starting_at" && (
            <p class="text-forest">
              <span class="text-sm text-neutral">Starting at </span>
              <span class="text-xl font-bold">{formatPrice(price.amount)}</span>
            </p>
          )}
          {price.type === "call_for_quote" && (
            <p class="text-solamp-blue text-lg font-semibold">
              Request a Quote
            </p>
          )}
        </div>

        {/* CTA Button */}
        <div class="card-actions mt-3">
          {isAvailable ? (
            price.type === "call_for_quote" ? (
              <Link
                href={`/contact?product=${id}`}
                class="btn btn-secondary btn-block"
              >
                Get Quote
              </Link>
            ) : (
              <button
                type="button"
                class="btn btn-secondary btn-block"
                onClick$={props.onAddToCart$}
              >
                Add to Cart
              </button>
            )
          ) : (
            <Link href={productUrl} class="btn btn-outline btn-block">
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
});

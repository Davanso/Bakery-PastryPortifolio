import Image from 'next/image';
import type { Dessert } from '@/types/dessert';

export function DessertCard({ dessert, onOpen }: { dessert: Dessert; onOpen: () => void }) {
  return (
    <article className="dessert-card">
      <button
        className="image-button"
        onClick={onOpen}
        aria-label={`View photos of ${dessert.name}`}
      >
        <Image
          src={dessert.coverImage}
          alt={dessert.alt}
          fill
          sizes="(max-width: 639px) 100vw, (max-width: 959px) 50vw, 33vw"
        />
        <span className="image-open" aria-hidden="true">
          ↗
        </span>
      </button>
      <p className="eyebrow card-category">{dessert.category}</p>
      <h3>{dessert.name}</h3>
      <p>{dessert.description}</p>
    </article>
  );
}

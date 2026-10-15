'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { desserts } from '@/data/desserts';
import type { Category, Dessert } from '@/types/dessert';
import { DessertCard } from './DessertCard';

export function PortfolioGallery() {
  const [category, setCategory] = useState<Category | 'all'>('all');
  const [selected, setSelected] = useState<Dessert | null>(null);
  const [photo, setPhoto] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const available = Array.from(new Set(desserts.map((item) => item.category)));
  const filtered = desserts.filter((item) => category === 'all' || category === item.category);
  const photos = selected
    ? Array.from(new Set([selected.coverImage, ...(selected.images ?? [])]))
    : [];
  function open(item: Dessert) {
    setSelected(item);
    setPhoto(0);
    dialog.current?.showModal();
  }
  return (
    <section id="work" className="collection shell" aria-labelledby="collection-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE COLLECTION</p>
          <h2 id="collection-title">
            From oven to <em>occasion.</em>
          </h2>
        </div>
        <p>
          A place for the bakes, the experiments,
          <br className="desktop-break" /> and the finishing touches.
        </p>
      </div>
      {desserts.length >= 6 && available.length > 1 && (
        <div className="filters" aria-label="Filter collection">
          {(['all', ...available] as const).map((value) => (
            <button
              key={value}
              aria-pressed={category === value}
              onClick={() => setCategory(value)}
            >
              {value === 'all' ? 'All work' : value}
            </button>
          ))}
        </div>
      )}
      {desserts.length ? (
        <>
          <p className="sr-only" aria-live="polite">
            {filtered.length} items shown
          </p>
          <div className="gallery">
            {filtered.map((item) => (
              <DessertCard key={item.id} dessert={item} onOpen={() => open(item)} />
            ))}
          </div>
        </>
      ) : (
        <div className="empty-collection">
          <span className="empty-emblem" aria-hidden="true">
            ✳
          </span>
          <p className="eyebrow">SOMETHING GOOD IS ON ITS WAY</p>
          <h3>The collection is taking shape.</h3>
          <p>
            Original baking and pastry photographs will be shared here soon.
            <br />A little patience — good things take time.
          </p>
          <span className="empty-tag">Photographs coming soon</span>
        </div>
      )}
      <dialog
        ref={dialog}
        className="lightbox"
        onClose={() => setSelected(null)}
        aria-labelledby="photo-title"
      >
        <div className="lightbox-top">
          <h3 id="photo-title">{selected?.name}</h3>
          <button onClick={() => dialog.current?.close()} aria-label="Close photos">
            ✕
          </button>
        </div>
        {selected && (
          <>
            <div className="lightbox-photo">
              <Image
                src={photos[photo]}
                alt={photo === 0 ? selected.alt : `${selected.name}, additional photo ${photo}`}
                fill
                sizes="90vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p>{selected.description}</p>
            {photos.length > 1 && (
              <div className="photo-controls">
                <button onClick={() => setPhoto((photo + photos.length - 1) % photos.length)}>
                  ← Previous
                </button>
                <span aria-live="polite">
                  {photo + 1} / {photos.length}
                </span>
                <button onClick={() => setPhoto((photo + 1) % photos.length)}>Next →</button>
              </div>
            )}
          </>
        )}
      </dialog>
    </section>
  );
}

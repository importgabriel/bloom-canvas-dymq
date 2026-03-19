import type React from "react";
import Flower from "@/components/Flower";

export default function Home(): React.JSX.Element {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-sky-300 via-sky-100 to-emerald-100">

      {/* Decorative background blobs */}
      <div
        className="pointer-events-none absolute top-10 left-10 w-64 h-64 rounded-full bg-pink-200 opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-20 right-16 w-48 h-48 rounded-full bg-purple-200 opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-16 left-24 w-56 h-56 rounded-full bg-emerald-200 opacity-25 blur-3xl"
        aria-hidden="true"
      />

      {/* Page heading */}
      <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-pink-600 drop-shadow-sm select-none">
        Blooming Flower
      </h1>
      <p className="mb-8 text-sm text-sky-700 tracking-widest uppercase select-none">
        An animated SVG garden
      </p>

      {/* The flower */}
      <Flower />

      {/* Footer label */}
      <p className="mt-6 text-xs text-emerald-700 opacity-60 select-none">
        Built with React &amp; SVG
      </p>
    </main>
  );
}


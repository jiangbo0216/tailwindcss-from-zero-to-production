import React from 'react';

export default function App() {
  return (
    <div className="max-w-md mx-auto">
      <img src="/img/logo-brand.svg" alt="workstation" className="h-10" />
      <img
        src="/img/beach-work.jpg"
        alt="workcationing on the beach"
        className="object-center mt-6 rounded-lg shadow-xl"
      />

      <h1 className="mt-4 text-2xl font-semibold tracking-tight text-gray-900">
        You can work from anywhere.
        <span className=""> Take advantage of it.</span>
      </h1>

      <p className="mt-2 text-gray-600">
        Workcation helps you find work-friendly rentals in beautiful locations so you can enjoy some nice weather even
        when you're not on vacation.s Workcation helps you find work-friendly rentals in beautiful locations so you can
        enjoy some nice weather even Workcation helps you find work-friendly rentals in beautiful locations so you can
        enjoy some nice weather even Workcation helps you find work-friendly rentals in beautiful locations so you can
        enjoy some nice weather even
      </p>
      <div className="mt-4 space-x-1">
        <a
          href="/good"
          className="inline-block py-3 text-sm
          fontinline-block
          font-semibold text-white uppercase rounded-lg shadow-lg bg-brand"
        >
          Book your escape
        </a>
      </div>
    </div>
  );
}

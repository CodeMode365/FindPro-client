"use client";

import { useEffect } from "react";
import ErrorButton from "@/components/reusable/ErrorButton";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">error</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Something went wrong!
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          There was some error while trying to navigate to this page!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <ErrorButton type="Reload" onClick={() => reset()} />
          <ErrorButton type="Home" variant="outline" />
        </div>
      </div>
    </main>
  );
};

export default Error;

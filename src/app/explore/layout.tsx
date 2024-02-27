import React from "react";
import Filter from "./_components/Filter";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16  flex md:flex-row flex-col ">
        <aside className="w-full md:w-[25%] border-x p-2">
          <div className="sticky top-5">
            <Filter />
          </div>
        </aside>

        {children}
      </div>
    </main>
  );
};

export default layout;

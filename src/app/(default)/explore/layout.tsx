import React from "react";
import Filter from "./_components/Filter";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <div className="mx-auto py-8 sm:px-6 sm:py-12 lg:py-16  flex md:flex-row flex-col ">
        <aside className="w-full md:w-[25%] border-x p-2">
          <div className="sticky top-24">
            <Filter />
          </div>
        </aside>

        {children}
      </div>
    </main>
  );
};

export default layout;

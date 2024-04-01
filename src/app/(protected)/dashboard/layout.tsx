import DbAuthWrapper from "./_components/DbAuthWrapper";
import PathView from "./_components/PathView";
import Sidebar from "./_components/Sidebar";
import Topbar from "./_components/Topbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DbAuthWrapper>
      <main className="grid grid-cols-12 max-h-screen overflow-hidden">
        <div className="col-span-0 md:col-span-2 h-full">
          <Sidebar />
        </div>
        <div className="col-span-12 md:col-span-10 max-h-screen overflow-y-auto">
          <Topbar />
          <div className="grid grid-cols-12 px-4">
            <PathView />
            {children}
          </div>
        </div>
      </main>
    </DbAuthWrapper>
  );
};

export default layout;

import PathView from "./_components/PathView";
import Sidebar from "./_components/Sidebar";
import Topbar from "./_components/Topbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid grid-cols-12 border min-h-screen">
      <div className="col-span-2 h-full">
        <Sidebar />
      </div>
      <div className="col-span-10">
        <Topbar />
        <div className="grid grid-cols-12 px-4">
          <PathView />
          {children}
        </div>
      </div>
    </main>
  );
};

export default layout;

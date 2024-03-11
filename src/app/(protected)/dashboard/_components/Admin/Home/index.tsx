import { Shapes, User } from "lucide-react";
import { FaSuitcase } from "react-icons/fa";
import StatCard from "./StatCard";
import StatChart from "./StatChart";
import UserStatChart from "./UserStatChart";
import ProApplication from "./ProApplications";

const AdminDashboardHome = () => {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-2">
        <StatCard colorMode="blue" icon={User} />
        <StatCard colorMode="green" icon={FaSuitcase} />
        <StatCard colorMode="red" icon={Shapes} />
        <StatCard colorMode="yellow" icon={Shapes} />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <StatChart />
      </div>
      <div className="col-span-12 lg:col-span-7">
        <UserStatChart />
      </div>
      <div className="col-span-12 lg:col-span-5">
        <ProApplication />
      </div>
    </div>
  );
};

export default AdminDashboardHome;

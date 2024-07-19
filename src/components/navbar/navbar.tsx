import React from "react";
import { DashboardIcon, NotificationIcon, AnalystIcon, ServiceIcon, FinanceIcon, Logo, TrendingIcon } from "@/assets";
import Avatar from "../avatar/avatar";

interface NavItemProps {
  icon: React.FC<{ isActive: boolean }>;
  label: string;
  active?: boolean;
  onClick: () => void;
  className?: string;
}

const Navbar: React.FC = () => {
  const [activePage, setActivePage] = React.useState<string>("trending");

  return (
    <nav className=" bg-white px-32 py-2 flex justify-between items-center fixed top-0 left-0 w-full">
      {/* Logo dan Nama Aplikasi */}
      <div className="flex items-center space-x-2 p-3 border border-gray-200 rounded-md">
        <Logo />
        <span className="text-xl font-bold">Socialabs</span>
      </div>

      {/* Menu Navigasi */}
      <div className="w-[480px] flex justify-center  cursor-pointer space-x-14">
        <NavItem icon={TrendingIcon} label="Trending" active={activePage === "trending"} onClick={() => setActivePage("trending")} className="p-2" />
        <NavItem icon={DashboardIcon} label="Dashboard" active={activePage === "dashboard"} onClick={() => setActivePage("dashboard")} className="p-2" />
        <NavItem icon={AnalystIcon} label="Analyst" active={activePage === "analyst"} onClick={() => setActivePage("analyst")} className="p-2" />
        <NavItem icon={ServiceIcon} label="Service" active={activePage === "service"} onClick={() => setActivePage("service")} className="p-2" />
      </div>

      {/* Ikon Notifikasi, Keuangan, dan Profil */}
      <div className="flex items-center space-x-4 cursor-pointer">
        <NotificationIconWrapper icon={NotificationIcon} hasNotification />
        <FinanceIcon isActive />
        <div className="relative">
          <Avatar src="https://source.unsplash.com/random" size={40} />
        </div>
      </div>
    </nav>
  );
};

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, active = false, onClick, className }) => {
  return (
    <div className={`flex flex-col items-center ${active ? "text-red-500" : "text-gray-500"} ${className}`} onClick={onClick}>
      <Icon isActive={active} />
      <span className="text-sm">{label}</span>
      {active && <div className="w-full h-1 bg-red-500 mt-1 rounded-full"></div>}
    </div>
  );
};

interface NotificationIconWrapperProps {
  icon: React.FC<{ isActive: boolean }>;
  hasNotification?: boolean;
}

const NotificationIconWrapper: React.FC<NotificationIconWrapperProps> = ({ icon: Icon, hasNotification }) => {
  return (
    <div className="relative">
      <Icon isActive={!!hasNotification} />
      {hasNotification && <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>}
    </div>
  );
};

export default Navbar;

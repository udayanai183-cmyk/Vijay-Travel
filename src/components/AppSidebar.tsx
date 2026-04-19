import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Truck,
  ClipboardList,
  Users,
  Receipt,
  BarChart3,
  Settings,
  ParkingCircle,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Contract Management", url: "/contracts" },
  { title: "Vehicle Management", url: "/vehicles", icon: Truck },
  { title: "Log Sheets", url: "/logsheets", icon: ClipboardList },
  { title: "Driver Management", url: "/drivers", icon: Users },
  { title: "Invoices", url: "/invoices", icon: Receipt },
  { title: "Reports", url: "/reports", icon: BarChart3 },
  { title: "Toll & Parking", url: "/toll-parking", icon: ParkingCircle },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarHeader className="border-b border-sidebar-border px-4 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-accent shadow-glow shrink-0">
            <Truck className="h-5 w-5 text-white" />
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-bold text-sidebar-foreground tracking-tight">
                Vijay Travel
              </span>
              <span className="text-[11px] text-sidebar-foreground/60">
                Transport Management
              </span>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-3">
        <SidebarGroup>
          {!collapsed && (
            <SidebarGroupLabel className="text-sidebar-foreground/50 text-[11px] uppercase tracking-wider px-2">
              Workspace
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {items.map((item) => {
                const isActive =
                  item.url === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`h-10 rounded-lg transition-all ${
                        isActive
                          ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-glow font-medium"
                          : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                      }`}
                    >
                      <NavLink to={item.url} end={item.url === "/"}>
                        {item.icon && <item.icon className="h-[18px] w-[18px] shrink-0" />}
                        {!collapsed && <span className="text-sm">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

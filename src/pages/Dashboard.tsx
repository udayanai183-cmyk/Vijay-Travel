import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  Users,
  Route,
  IndianRupee,
  TrendingUp,
  ArrowUpRight,
  FileText,
  ClipboardList,
  Receipt,
  UserPlus,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  tripsChartData,
  revenueChartData,
  recentActivity,
} from "@/lib/mockData";

const stats = [
  { label: "Total Vehicles", value: "128", change: "+4", icon: Truck, color: "from-blue-500 to-blue-700" },
  { label: "Active Drivers", value: "86", change: "+2", icon: Users, color: "from-emerald-500 to-emerald-700" },
  { label: "Running Trips", value: "47", change: "+8", icon: Route, color: "from-amber-500 to-amber-600" },
  { label: "Monthly Revenue", value: "₹38.5L", change: "+12%", icon: IndianRupee, color: "from-violet-500 to-violet-700" },
];

const activityIcon = {
  contract: FileText,
  logsheet: ClipboardList,
  invoice: Receipt,
  driver: UserPlus,
  vehicle: Truck,
};

export default function Dashboard() {
  return (
    <AppLayout>
      <PageHeader
        title="Dashboard"
        description="Welcome back — here's what's happening across your fleet today."
      />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {stats.map((s) => (
          <Card key={s.label} className="p-5 border-border/60 hover:shadow-elegant transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className={`h-11 w-11 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center shadow-md`}>
                <s.icon className="h-5 w-5 text-white" />
              </div>
              <Badge variant="secondary" className="bg-success/10 text-success border-0 font-medium">
                <TrendingUp className="h-3 w-3 mr-1" /> {s.change}
              </Badge>
            </div>
            <div className="text-2xl font-bold tracking-tight">{s.value}</div>
            <div className="text-sm text-muted-foreground mt-0.5">{s.label}</div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
        <Card className="lg:col-span-3 p-6 border-border/60">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-semibold">Trips Overview</h3>
              <p className="text-xs text-muted-foreground">Trips completed vs target</p>
            </div>
            <Badge variant="secondary" className="bg-primary/10 text-primary border-0">Last 7 months</Badge>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={tripsChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Line type="monotone" dataKey="trips" stroke="hsl(var(--primary))" strokeWidth={2.5} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              <Line type="monotone" dataKey="target" stroke="hsl(var(--accent))" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card className="lg:col-span-2 p-6 border-border/60">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-semibold">Revenue Breakdown</h3>
              <p className="text-xs text-muted-foreground">Revenue vs expenses (₹)</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={revenueChartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={11} tickFormatter={(v) => `${v / 1000}k`} />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8 }} />
              <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
              <Bar dataKey="expenses" fill="hsl(var(--accent))" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent activity */}
      <Card className="border-border/60">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div>
            <h3 className="font-semibold">Recent Activity</h3>
            <p className="text-xs text-muted-foreground">Latest events across your operations</p>
          </div>
          <button className="text-xs text-primary hover:underline flex items-center gap-1">
            View all <ArrowUpRight className="h-3 w-3" />
          </button>
        </div>
        <div className="divide-y divide-border">
          {recentActivity.map((a) => {
            const Icon = activityIcon[a.type as keyof typeof activityIcon];
            return (
              <div key={a.id} className="flex items-center gap-4 p-4 hover:bg-muted/40 transition-colors">
                <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{a.action}</div>
                  <div className="text-xs text-muted-foreground truncate">{a.target}</div>
                </div>
                <div className="text-xs text-muted-foreground shrink-0">{a.time}</div>
              </div>
            );
          })}
        </div>
      </Card>
    </AppLayout>
  );
}

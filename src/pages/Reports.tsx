import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { FileSpreadsheet, BarChart3 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { revenueChartData } from "@/lib/mockData";

export default function Reports() {
  return (
    <AppLayout>
      <PageHeader
        title="Reports"
        description="Generate and export operational reports."
        actions={
          <Button size="sm" className="bg-gradient-primary shadow-elegant">
            <FileSpreadsheet className="h-4 w-4 mr-2" /> Export to Excel
          </Button>
        }
      />

      <Card className="p-6 border-border/60 mb-6">
        <h3 className="font-semibold mb-4">Filters</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1.5">
            <Label className="text-xs">From Date</Label>
            <Input type="date" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">To Date</Label>
            <Input type="date" />
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Vehicle</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="All vehicles" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All vehicles</SelectItem>
                <SelectItem value="v1">MH-12-AB-1234</SelectItem>
                <SelectItem value="v2">MH-12-CD-5678</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Driver</Label>
            <Select>
              <SelectTrigger><SelectValue placeholder="All drivers" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All drivers</SelectItem>
                <SelectItem value="d1">Ramesh Patil</SelectItem>
                <SelectItem value="d2">Suresh Jadhav</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button className="bg-gradient-primary"><BarChart3 className="h-4 w-4 mr-2" /> Generate Report</Button>
          <Button variant="outline">Reset</Button>
        </div>
      </Card>

      <Card className="p-6 border-border/60">
        <h3 className="font-semibold mb-4">Monthly Revenue vs Expenses</h3>
        <ResponsiveContainer width="100%" height={340}>
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
    </AppLayout>
  );
}

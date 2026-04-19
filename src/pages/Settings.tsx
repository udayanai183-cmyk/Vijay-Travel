import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Settings as Cog, Plus, Building2 } from "lucide-react";

const users = [
  { name: "Admin User", email: "admin@vijaytravel.in", role: "Admin", status: "Active" },
  { name: "Rohan Mehta", email: "rohan@vijaytravel.in", role: "Manager", status: "Active" },
  { name: "Priya Singh", email: "priya@vijaytravel.in", role: "Operator", status: "Active" },
  { name: "Karan Shah", email: "karan@vijaytravel.in", role: "Accountant", status: "Inactive" },
];

export default function Settings() {
  return (
    <AppLayout>
      <PageHeader title="Settings" description="Manage users, organization details, and system preferences." />

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList className="bg-muted/60">
          <TabsTrigger value="users"><Users className="h-4 w-4 mr-2" /> User Management</TabsTrigger>
          <TabsTrigger value="org"><Building2 className="h-4 w-4 mr-2" /> Organization</TabsTrigger>
          <TabsTrigger value="system"><Cog className="h-4 w-4 mr-2" /> System</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <Card className="border-border/60">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-semibold text-sm">Users</h3>
              <Button size="sm" className="bg-gradient-primary"><Plus className="h-4 w-4 mr-2" /> Add User</Button>
            </div>
            <div className="divide-y divide-border">
              {users.map((u) => (
                <div key={u.email} className="flex items-center gap-4 p-4 hover:bg-muted/30">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xs font-semibold">
                      {u.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{u.name}</div>
                    <div className="text-xs text-muted-foreground">{u.email}</div>
                  </div>
                  <Badge variant="secondary">{u.role}</Badge>
                  <Badge variant="outline" className={u.status === "Active" ? "bg-success/10 text-success border-success/30" : "bg-muted text-muted-foreground"}>
                    {u.status}
                  </Badge>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="org">
          <Card className="p-6 border-border/60">
            <h3 className="font-semibold mb-4">Organization Details</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { l: "Company Name", v: "Vijay Travel Pvt. Ltd." },
                { l: "GSTIN", v: "27AABCV1234L1Z5" },
                { l: "PAN", v: "AABCV1234L" },
                { l: "Phone", v: "+91 22 4567 8900" },
                { l: "Email", v: "info@vijaytravel.in" },
                { l: "Address", v: "Andheri East, Mumbai 400069" },
              ].map((f) => (
                <div key={f.l} className="space-y-1.5">
                  <Label className="text-xs">{f.l}</Label>
                  <Input defaultValue={f.v} />
                </div>
              ))}
            </div>
            <Button className="mt-4 bg-gradient-primary">Save Changes</Button>
          </Card>
        </TabsContent>

        <TabsContent value="system">
          <Card className="p-6 border-border/60">
            <h3 className="font-semibold mb-4">System Configuration</h3>
            <div className="space-y-4">
              {[
                { l: "Auto-generate invoices monthly", d: "Generate invoices on the 1st of each month" },
                { l: "Email notifications", d: "Send PUC/insurance expiry alerts via email" },
                { l: "OCR auto-correction", d: "Use AI to correct OCR errors in log sheets" },
                { l: "Two-factor authentication", d: "Require OTP for admin logins" },
              ].map((s, i) => (
                <div key={s.l} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/30">
                  <div>
                    <div className="font-medium text-sm">{s.l}</div>
                    <div className="text-xs text-muted-foreground">{s.d}</div>
                  </div>
                  <Switch defaultChecked={i < 2} />
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}

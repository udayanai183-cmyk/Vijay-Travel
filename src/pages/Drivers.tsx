import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Phone, IndianRupee } from "lucide-react";
import { drivers } from "@/lib/mockData";

export default function Drivers() {
  return (
    <AppLayout>
      <PageHeader
        title="Driver Management"
        description="All drivers, licenses, contacts and salary records."
        actions={
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-gradient-primary shadow-elegant">
                <Plus className="h-4 w-4 mr-2" /> Add Driver
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader><DialogTitle>Add Driver</DialogTitle></DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-2">
                {["Name", "License Number", "Contact", "Join Date", "Salary", "Assigned Vehicle"].map((l) => (
                  <div key={l} className="space-y-1.5">
                    <Label className="text-xs">{l}</Label>
                    <Input placeholder={l} />
                  </div>
                ))}
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button className="bg-gradient-primary">Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
        {drivers.slice(0, 4).map((d) => (
          <Card key={d.id} className="p-5 border-border/60 hover:shadow-elegant transition-all">
            <div className="flex items-center gap-3 mb-3">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                  {d.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <div className="font-semibold truncate">{d.name}</div>
                <div className="text-xs text-muted-foreground font-mono truncate">{d.license}</div>
              </div>
            </div>
            <div className="space-y-1.5 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-3.5 w-3.5" /> {d.contact}
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <IndianRupee className="h-3.5 w-3.5" /> {d.salary.toLocaleString()} / month
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
              <Badge variant="outline" className={d.status === "Active" ? "bg-success/10 text-success border-success/30" : "bg-warning/10 text-warning border-warning/30"}>
                {d.status}
              </Badge>
              <span className="text-xs text-muted-foreground font-mono">{d.vehicle}</span>
            </div>
          </Card>
        ))}
      </div>

      <Card className="border-border/60 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/40 hover:bg-muted/40">
              <TableHead>Driver</TableHead>
              <TableHead>License</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead className="text-right">Salary</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {drivers.map((d) => (
              <TableRow key={d.id} className="hover:bg-muted/30">
                <TableCell className="font-medium">{d.name}</TableCell>
                <TableCell className="font-mono text-xs">{d.license}</TableCell>
                <TableCell>{d.contact}</TableCell>
                <TableCell className="text-muted-foreground">{d.joinDate}</TableCell>
                <TableCell className="text-right font-semibold">₹{d.salary.toLocaleString()}</TableCell>
                <TableCell className="font-mono text-xs">{d.vehicle}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={d.status === "Active" ? "bg-success/10 text-success border-success/30" : "bg-warning/10 text-warning border-warning/30"}>
                    {d.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </AppLayout>
  );
}

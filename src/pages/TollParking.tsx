import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, ParkingCircle, Receipt as ReceiptIcon } from "lucide-react";
import { tollExpenses } from "@/lib/mockData";

export default function TollParking() {
  const totalToll = tollExpenses.filter((t) => t.type === "Toll").reduce((s, t) => s + t.amount, 0);
  const totalParking = tollExpenses.filter((t) => t.type === "Parking").reduce((s, t) => s + t.amount, 0);

  return (
    <AppLayout>
      <PageHeader
        title="Toll & Parking"
        description="Linked with log sheets — add expenses manually or through trip uploads."
        actions={
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-gradient-primary shadow-elegant">
                <Plus className="h-4 w-4 mr-2" /> Add Expense
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader><DialogTitle>Add Toll / Parking</DialogTitle></DialogHeader>
              <div className="grid grid-cols-2 gap-4 py-2">
                <div className="space-y-1.5"><Label className="text-xs">Date</Label><Input type="date" /></div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Type</Label>
                  <Select>
                    <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="toll">Toll</SelectItem>
                      <SelectItem value="parking">Parking</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5"><Label className="text-xs">Vehicle No</Label><Input /></div>
                <div className="space-y-1.5"><Label className="text-xs">Driver</Label><Input /></div>
                <div className="space-y-1.5 col-span-2"><Label className="text-xs">Location</Label><Input /></div>
                <div className="space-y-1.5"><Label className="text-xs">Amount (₹)</Label><Input type="number" /></div>
                <div className="space-y-1.5"><Label className="text-xs">Contract ID</Label><Input /></div>
              </div>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button className="bg-gradient-primary">Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
      />

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <Card className="p-5 border-border/60 flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <ReceiptIcon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Total Toll</div>
            <div className="text-2xl font-bold">₹{totalToll.toLocaleString()}</div>
          </div>
        </Card>
        <Card className="p-5 border-border/60 flex items-center gap-4">
          <div className="h-12 w-12 rounded-lg bg-accent/15 flex items-center justify-center">
            <ParkingCircle className="h-6 w-6 text-accent" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider">Total Parking</div>
            <div className="text-2xl font-bold">₹{totalParking.toLocaleString()}</div>
          </div>
        </Card>
      </div>

      <Card className="border-border/60 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/40 hover:bg-muted/40">
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Driver</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Contract</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tollExpenses.map((t) => (
              <TableRow key={t.id} className="hover:bg-muted/30">
                <TableCell>{t.date}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={t.type === "Toll" ? "bg-primary/10 text-primary border-primary/30" : "bg-accent/10 text-accent border-accent/30"}>
                    {t.type}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono text-xs">{t.vehicle}</TableCell>
                <TableCell>{t.driver}</TableCell>
                <TableCell>{t.location}</TableCell>
                <TableCell className="font-mono text-xs text-primary">{t.contractId}</TableCell>
                <TableCell className="text-right font-semibold">₹{t.amount.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </AppLayout>
  );
}

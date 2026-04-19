import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, Upload, Search, Truck, FileSpreadsheet, Wallet, ShieldCheck, Calendar } from "lucide-react";
import { vehicles } from "@/lib/mockData";
import { useState } from "react";

const statusColor = {
  Active: "bg-success/15 text-success border-success/30",
  Maintenance: "bg-warning/15 text-warning border-warning/30",
  Idle: "bg-muted text-muted-foreground border-border",
};

export default function Vehicles() {
  const [search, setSearch] = useState("");
  const filtered = vehicles.filter((v) =>
    [v.vehicleNo, v.name, v.type].join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout>
      <PageHeader
        title="Vehicle Management"
        description="Track every vehicle, document, and FASTag in your fleet."
        actions={
          <>
            <Button variant="outline" size="sm"><Upload className="h-4 w-4 mr-2" /> Upload Excel</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-gradient-primary shadow-elegant">
                  <Plus className="h-4 w-4 mr-2" /> Add Vehicle
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader><DialogTitle>Add Vehicle</DialogTitle></DialogHeader>
                <div className="grid grid-cols-2 gap-4 py-2">
                  {["Vehicle No", "Name", "Model", "Chassis No", "Key", "Vehicle Type", "Insurance", "Insurance Start", "Insurance End", "PUC Start", "PUC End", "Fastag Number"].map((l) => (
                    <div key={l} className="space-y-1.5">
                      <Label className="text-xs">{l}</Label>
                      <Input placeholder={l} />
                    </div>
                  ))}
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-gradient-primary">Save Vehicle</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        }
      />

      <Tabs defaultValue="list" className="space-y-4">
        <TabsList className="bg-muted/60">
          <TabsTrigger value="list"><Truck className="h-4 w-4 mr-2" /> Vehicle List</TabsTrigger>
          <TabsTrigger value="docs"><ShieldCheck className="h-4 w-4 mr-2" /> Documents</TabsTrigger>
          <TabsTrigger value="fastag"><Wallet className="h-4 w-4 mr-2" /> FASTag</TabsTrigger>
        </TabsList>

        <TabsContent value="list">
          <Card className="border-border/60">
            <div className="flex gap-3 p-4 border-b border-border">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search vehicle..." className="pl-9 h-9" />
              </div>
              <Button variant="outline" size="sm"><FileSpreadsheet className="h-4 w-4 mr-2" /> Export</Button>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/40 hover:bg-muted/40">
                    <TableHead>Sr</TableHead>
                    <TableHead>Vehicle No</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Model</TableHead>
                    <TableHead>Chassis</TableHead>
                    <TableHead>Key</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">FASTag (₹)</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((v) => (
                    <TableRow key={v.vehicleNo} className="hover:bg-muted/30">
                      <TableCell className="text-muted-foreground">{v.srNo}</TableCell>
                      <TableCell className="font-mono font-semibold">{v.vehicleNo}</TableCell>
                      <TableCell>{v.name}</TableCell>
                      <TableCell>{v.model}</TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground">{v.chassisNo}</TableCell>
                      <TableCell><Badge variant="outline">{v.key}</Badge></TableCell>
                      <TableCell><Badge variant="secondary">{v.type}</Badge></TableCell>
                      <TableCell className="text-right font-medium">₹{v.fastagBalance.toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={statusColor[v.status as keyof typeof statusColor]}>
                          {v.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="docs">
          <Card className="border-border/60 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/40 hover:bg-muted/40">
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Insurance</TableHead>
                  <TableHead>Insurance Period</TableHead>
                  <TableHead>PUC Period</TableHead>
                  <TableHead>FASTag Ref</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vehicles.map((v) => (
                  <TableRow key={v.vehicleNo} className="hover:bg-muted/30">
                    <TableCell>
                      <div className="font-medium">{v.vehicleNo}</div>
                      <div className="text-xs text-muted-foreground">{v.name}</div>
                    </TableCell>
                    <TableCell>{v.insurance}</TableCell>
                    <TableCell className="text-xs">
                      <Calendar className="inline h-3 w-3 mr-1 text-muted-foreground" />
                      {v.startDate} → {v.endDate}
                    </TableCell>
                    <TableCell className="text-xs">
                      <Calendar className="inline h-3 w-3 mr-1 text-muted-foreground" />
                      {v.pucStart} → {v.pucEnd}
                    </TableCell>
                    <TableCell className="font-mono text-xs">{v.fastagNo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        <TabsContent value="fastag">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vehicles.map((v) => (
              <Card key={v.vehicleNo} className="p-5 border-border/60 hover:shadow-elegant transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold">{v.vehicleNo}</div>
                    <div className="text-xs text-muted-foreground">{v.name}</div>
                  </div>
                  <Wallet className="h-5 w-5 text-primary" />
                </div>
                <div className="text-2xl font-bold">₹{v.fastagBalance.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground mt-1 font-mono">{v.fastagNo}</div>
                <Button variant="outline" size="sm" className="w-full mt-4">Recharge</Button>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}

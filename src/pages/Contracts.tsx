import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Filter, Download, Eye } from "lucide-react";
import { contracts } from "@/lib/mockData";
import { useState } from "react";

const fields: { key: string; label: string; type?: string }[] = [
  { key: "contractId", label: "Contract ID" },
  { key: "party", label: "Name of Party" },
  { key: "startDate", label: "Contract Start Date", type: "date" },
  { key: "endDate", label: "Contract End Date", type: "date" },
  { key: "vehicleName", label: "Vehicle Name" },
  { key: "vehicleId", label: "Vehicle ID" },
  { key: "vehicleType", label: "Vehicle Type" },
  { key: "kmDaily", label: "KM Daily", type: "number" },
  { key: "kmMonth", label: "KM Month", type: "number" },
  { key: "hoursDaily", label: "Hours Daily", type: "number" },
  { key: "hoursMonthly", label: "Hours Monthly", type: "number" },
  { key: "package", label: "Package" },
  { key: "gstIncluded", label: "GST Included In Package" },
  { key: "gstType", label: "GST Type" },
  { key: "rate", label: "Rate", type: "number" },
  { key: "days", label: "Days", type: "number" },
  { key: "extraMiles", label: "Extra Miles Charges", type: "number" },
  { key: "extraHours", label: "Extra Hours Charges", type: "number" },
  { key: "ratePerKm", label: "Rate Per Km / Per Day", type: "number" },
  { key: "nightAllowance", label: "Night Allowance", type: "number" },
  { key: "incentiveEme", label: "Incentive of Eme Break", type: "number" },
  { key: "deductionUnused", label: "Deduction for Not Used Km", type: "number" },
  { key: "commonKey", label: "Common Key" },
];

export default function Contracts() {
  const [search, setSearch] = useState("");
  const filtered = contracts.filter((c) =>
    [c.contractId, c.party, c.vehicleName].join(" ").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AppLayout>
      <PageHeader
        title="Contract Management"
        description="Manage all your client contracts, rates, and terms."
        actions={
          <>
            <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-2" /> Export</Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="bg-gradient-primary shadow-elegant">
                  <Plus className="h-4 w-4 mr-2" /> Add New Contract
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Contract</DialogTitle>
                  <DialogDescription>Fill all the contract details below.</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                  {fields.map((f) => (
                    <div key={f.key} className="space-y-1.5">
                      <Label className="text-xs">{f.label}</Label>
                      <Input type={f.type || "text"} placeholder={f.label} />
                    </div>
                  ))}
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button className="bg-gradient-primary">Save Contract</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        }
      />

      <Card className="border-border/60">
        <div className="flex flex-col sm:flex-row gap-3 p-4 border-b border-border">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by ID, party, vehicle..."
              className="pl-9 h-9"
            />
          </div>
          <Button variant="outline" size="sm"><Filter className="h-4 w-4 mr-2" /> Filter</Button>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40 hover:bg-muted/40">
                <TableHead className="w-12">Sr</TableHead>
                <TableHead>Contract ID</TableHead>
                <TableHead>Party</TableHead>
                <TableHead>Vehicle</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Package</TableHead>
                <TableHead>GST</TableHead>
                <TableHead className="text-right">Rate (₹)</TableHead>
                <TableHead className="text-right">KM/Day</TableHead>
                <TableHead className="text-right">Hrs/Day</TableHead>
                <TableHead>Common Key</TableHead>
                <TableHead className="w-16"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((c) => (
                <TableRow key={c.contractId} className="hover:bg-muted/30">
                  <TableCell className="text-muted-foreground">{c.srNo}</TableCell>
                  <TableCell className="font-mono text-xs font-medium text-primary">{c.contractId}</TableCell>
                  <TableCell className="font-medium">{c.party}</TableCell>
                  <TableCell>
                    <div className="text-sm">{c.vehicleName}</div>
                    <div className="text-[11px] text-muted-foreground font-mono">{c.vehicleId}</div>
                  </TableCell>
                  <TableCell><Badge variant="secondary">{c.vehicleType}</Badge></TableCell>
                  <TableCell className="text-xs">
                    <div>{c.startDate}</div>
                    <div className="text-muted-foreground">to {c.endDate}</div>
                  </TableCell>
                  <TableCell>{c.package}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-normal">
                      {c.gstIncluded === "Yes" ? "Incl." : "Excl."} {c.gstType}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-semibold">₹{c.rate.toLocaleString()}</TableCell>
                  <TableCell className="text-right">{c.kmDaily}</TableCell>
                  <TableCell className="text-right">{c.hoursDaily}</TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">{c.commonKey}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </AppLayout>
  );
}

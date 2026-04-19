import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { FileText, Download, Plus } from "lucide-react";
import { invoices } from "@/lib/mockData";

const statusStyle = {
  Paid: "bg-success/10 text-success border-success/30",
  Pending: "bg-warning/10 text-warning border-warning/30",
  Overdue: "bg-destructive/10 text-destructive border-destructive/30",
};

export default function Invoices() {
  const total = invoices.reduce((s, i) => s + i.total, 0);
  const paid = invoices.filter((i) => i.status === "Paid").reduce((s, i) => s + i.total, 0);
  const pending = total - paid;

  return (
    <AppLayout>
      <PageHeader
        title="Invoices"
        description="Auto-generated from log sheets and contract terms."
        actions={
          <Button size="sm" className="bg-gradient-primary shadow-elegant">
            <Plus className="h-4 w-4 mr-2" /> Generate Invoice
          </Button>
        }
      />

      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total Billed", value: total, color: "text-primary" },
          { label: "Collected", value: paid, color: "text-success" },
          { label: "Outstanding", value: pending, color: "text-warning" },
        ].map((s) => (
          <Card key={s.label} className="p-5 border-border/60">
            <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
            <div className={`text-2xl font-bold mt-1 ${s.color}`}>₹{s.value.toLocaleString()}</div>
          </Card>
        ))}
      </div>

      <Card className="border-border/60 overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/40 hover:bg-muted/40">
              <TableHead>Invoice ID</TableHead>
              <TableHead>Party</TableHead>
              <TableHead>Contract</TableHead>
              <TableHead>Period</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">GST</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((i) => (
              <TableRow key={i.id} className="hover:bg-muted/30">
                <TableCell className="font-mono font-medium text-primary">{i.id}</TableCell>
                <TableCell className="font-medium">{i.party}</TableCell>
                <TableCell className="font-mono text-xs">{i.contract}</TableCell>
                <TableCell>{i.period}</TableCell>
                <TableCell className="text-right">₹{i.amount.toLocaleString()}</TableCell>
                <TableCell className="text-right text-muted-foreground">₹{i.gst.toLocaleString()}</TableCell>
                <TableCell className="text-right font-bold">₹{i.total.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant="outline" className={statusStyle[i.status as keyof typeof statusStyle]}>
                    {i.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8"><FileText className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="h-4 w-4" /></Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </AppLayout>
  );
}

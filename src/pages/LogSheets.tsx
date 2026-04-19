import { AppLayout } from "@/components/AppLayout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ScanText,
  FileSpreadsheet,
  Pencil,
  Download,
  Upload,
  Settings2,
  ListChecks,
} from "lucide-react";
import { logSheets } from "@/lib/mockData";

const templateFields = [
  { label: "Package", options: ["Monthly", "Daily", "Per KM", "Per Hour"] },
  { label: "Contract ID", options: ["VT-C-1001", "VT-C-1002", "VT-C-1003", "VT-C-1004", "VT-C-1005"] },
  { label: "Customer Name", options: ["TCS", "Infosys", "Wipro", "Accenture", "Capgemini"] },
  { label: "Vehicle Type", options: ["SUV", "Sedan", "Tempo", "Bus"] },
  { label: "Officer Name", options: ["Rohan Mehta", "Priya Singh", "Karan Shah"] },
  { label: "Driver Name", options: ["Ramesh Patil", "Suresh Jadhav", "Vikas Shinde"] },
  { label: "Month", options: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
  { label: "Billing Type", options: ["Pre-paid", "Post-paid", "Credit"] },
];

export default function LogSheets() {
  return (
    <AppLayout>
      <PageHeader
        title="Log Sheets"
        description="Capture daily trip logs via OCR, Excel upload or manual entry."
        actions={
          <>
            <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-2" /> Template</Button>
            <Button size="sm" className="bg-gradient-primary shadow-elegant">
              <Upload className="h-4 w-4 mr-2" /> Upload Log Sheet
            </Button>
          </>
        }
      />

      <Tabs defaultValue="template" className="space-y-4">
        <TabsList className="bg-muted/60">
          <TabsTrigger value="template"><Settings2 className="h-4 w-4 mr-2" /> Template Setup</TabsTrigger>
          <TabsTrigger value="entries"><ListChecks className="h-4 w-4 mr-2" /> Log Entries</TabsTrigger>
        </TabsList>

        {/* Tab 1 — Template */}
        <TabsContent value="template">
          <div className="grid lg:grid-cols-3 gap-4">
            <Card className="lg:col-span-1 p-6 border-border/60">
              <h3 className="font-semibold mb-1">Log Sheet Template</h3>
              <p className="text-xs text-muted-foreground mb-4">
                Configure dropdown values that pre-fill every new log sheet.
              </p>
              <div className="space-y-3">
                {templateFields.map((f) => (
                  <div key={f.label} className="space-y-1.5">
                    <Label className="text-xs">{f.label}</Label>
                    <Select>
                      <SelectTrigger className="h-9">
                        <SelectValue placeholder={`Select ${f.label}`} />
                      </SelectTrigger>
                      <SelectContent>
                        {f.options.map((o) => (
                          <SelectItem key={o} value={o}>{o}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                ))}
                <Button className="w-full bg-gradient-primary mt-2">Save Template</Button>
              </div>
            </Card>

            <Card className="lg:col-span-2 p-6 border-border/60">
              <h3 className="font-semibold mb-1">Upload Methods</h3>
              <p className="text-xs text-muted-foreground mb-4">Choose how to ingest your log sheet data.</p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { icon: ScanText, title: "OCR Upload", desc: "Image / PDF scan" },
                  { icon: FileSpreadsheet, title: "Excel Upload", desc: "Bulk .xlsx import" },
                  { icon: Pencil, title: "Manual Entry", desc: "Type rows yourself" },
                ].map((m) => (
                  <button key={m.title} className="rounded-xl border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-all p-6 text-center group">
                    <div className="h-12 w-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <m.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="font-semibold text-sm">{m.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{m.desc}</div>
                  </button>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-lg bg-muted/40 border border-border">
                <div className="text-sm font-medium mb-2">Quick Tips</div>
                <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                  <li>OCR works best with high-resolution scans</li>
                  <li>Excel files must follow the downloaded template format</li>
                  <li>You can edit any row after upload before saving</li>
                </ul>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Tab 2 — Entries */}
        <TabsContent value="entries">
          <Card className="border-border/60">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div>
                <h3 className="font-semibold text-sm">Recent Log Entries</h3>
                <p className="text-xs text-muted-foreground">Editable after upload — click any row.</p>
              </div>
              <Button variant="outline" size="sm"><Pencil className="h-4 w-4 mr-2" /> Edit Mode</Button>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/40 hover:bg-muted/40">
                    <TableHead>Sr</TableHead>
                    <TableHead>Vehicle No</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Start KM</TableHead>
                    <TableHead className="text-right">Close KM</TableHead>
                    <TableHead className="text-right">Total KM</TableHead>
                    <TableHead className="text-right">Start Hrs</TableHead>
                    <TableHead className="text-right">Close Hrs</TableHead>
                    <TableHead className="text-right">Total Hrs</TableHead>
                    <TableHead className="text-right">Extra KM</TableHead>
                    <TableHead className="text-right">Extra Hrs</TableHead>
                    <TableHead>Driver</TableHead>
                    <TableHead className="text-right">Toll (₹)</TableHead>
                    <TableHead>Contract</TableHead>
                    <TableHead>Common Key</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {logSheets.map((l) => (
                    <TableRow key={l.srNo} className="hover:bg-muted/30">
                      <TableCell className="text-muted-foreground">{l.srNo}</TableCell>
                      <TableCell className="font-mono font-medium">{l.vehicleNo}</TableCell>
                      <TableCell>{l.date}</TableCell>
                      <TableCell className="text-right">{l.startKm.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{l.closeKm.toLocaleString()}</TableCell>
                      <TableCell className="text-right font-semibold">{l.totalKm}</TableCell>
                      <TableCell className="text-right">{l.startHrs}</TableCell>
                      <TableCell className="text-right">{l.closeHrs}</TableCell>
                      <TableCell className="text-right font-semibold">{l.totalHrs}</TableCell>
                      <TableCell className="text-right">{l.extraMiles}</TableCell>
                      <TableCell className="text-right">{l.extraHrs}</TableCell>
                      <TableCell>{l.driver}</TableCell>
                      <TableCell className="text-right">₹{l.toll}</TableCell>
                      <TableCell className="font-mono text-xs text-primary">{l.contractId}</TableCell>
                      <TableCell className="font-mono text-xs text-muted-foreground">{l.commonKey}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
}

import { useNavigate } from "react-router-dom";
import { Truck, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Brand panel */}
      <div className="hidden lg:flex relative bg-gradient-primary p-12 flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="relative flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm">
            <Truck className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-lg leading-tight">Vijay Travel</div>
            <div className="text-white/70 text-xs">Transport Management System</div>
          </div>
        </div>
        <div className="relative space-y-4 max-w-md">
          <h2 className="text-4xl font-bold text-white leading-tight">
            Manage your fleet with confidence.
          </h2>
          <p className="text-white/80 text-base leading-relaxed">
            Contracts, vehicles, log sheets, invoices and reports — everything your transport business needs in one elegant dashboard.
          </p>
        </div>
        <div className="relative grid grid-cols-3 gap-6 text-white">
          {[
            { v: "120+", l: "Vehicles" },
            { v: "85+", l: "Drivers" },
            { v: "₹38L", l: "Monthly" },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-2xl font-bold">{s.v}</div>
              <div className="text-xs text-white/60 uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Form panel */}
      <div className="flex items-center justify-center p-6 sm:p-12 bg-background">
        <Card className="w-full max-w-md p-8 shadow-large border-border/60">
          <div className="flex lg:hidden items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <Truck className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-lg">Vijay Travel</span>
          </div>
          <h1 className="text-2xl font-bold mb-1">Welcome back</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Sign in to your TMS dashboard
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="email" type="email" defaultValue="admin@vijaytravel.in" className="pl-9 h-11" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input id="password" type="password" defaultValue="password" className="pl-9 h-11" />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox defaultChecked /> Remember me
              </label>
              <a href="#" className="text-primary hover:underline">Forgot password?</a>
            </div>
            <Button type="submit" className="w-full h-11 bg-gradient-primary hover:opacity-95 shadow-elegant">
              Sign in
            </Button>
          </form>
          <p className="text-xs text-muted-foreground text-center mt-6">
            Demo build — any credentials will sign you in.
          </p>
        </Card>
      </div>
    </div>
  );
}

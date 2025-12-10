import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  LogOut,
  Settings,
  Home,
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Demo bookings data
const demoBookings = [
  {
    id: "1",
    customerName: "Sarah Johnson",
    venue: "Grand Ballroom",
    date: "2024-02-14",
    guests: 250,
    eventType: "Wedding",
    status: "confirmed",
    amount: 15000,
  },
  {
    id: "2",
    customerName: "Tech Corp Inc.",
    venue: "Executive Conference Center",
    date: "2024-02-20",
    guests: 150,
    eventType: "Corporate",
    status: "pending",
    amount: 8000,
  },
  {
    id: "3",
    customerName: "Michael Chen",
    venue: "Private Dining Room",
    date: "2024-02-25",
    guests: 25,
    eventType: "Birthday",
    status: "confirmed",
    amount: 3000,
  },
  {
    id: "4",
    customerName: "Emily Davis",
    venue: "Grand Ballroom",
    date: "2024-03-05",
    guests: 400,
    eventType: "Gala",
    status: "pending",
    amount: 15000,
  },
  {
    id: "5",
    customerName: "Global Solutions",
    venue: "Executive Conference Center",
    date: "2024-03-10",
    guests: 100,
    eventType: "Conference",
    status: "cancelled",
    amount: 8000,
  },
];

const stats = [
  {
    label: "Total Bookings",
    value: "24",
    icon: Calendar,
    change: "+12%",
  },
  {
    label: "Total Guests",
    value: "4,850",
    icon: Users,
    change: "+8%",
  },
  {
    label: "Revenue",
    value: "$245,000",
    icon: DollarSign,
    change: "+18%",
  },
  {
    label: "Growth",
    value: "23%",
    icon: TrendingUp,
    change: "+5%",
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("adminAuth");
    if (auth !== "true") {
      navigate("/admin");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    sessionStorage.removeItem("adminAuth");
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate("/admin");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-500/20 text-green-700 border-green-500/30">Confirmed</Badge>;
      case "pending":
        return <Badge className="bg-amber-500/20 text-amber-700 border-amber-500/30">Pending</Badge>;
      case "cancelled":
        return <Badge className="bg-red-500/20 text-red-700 border-red-500/30">Cancelled</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <main className="min-h-screen bg-muted">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-secondary text-secondary-foreground p-6 hidden lg:block">
        <div className="mb-8">
          <h1 className="font-display text-xl font-bold text-gold">
            Grand Majestic
          </h1>
          <p className="font-body text-sm text-cream/60">Admin Dashboard</p>
        </div>

        <nav className="space-y-2">
          <a
            href="/admin/dashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-cream/10 text-cream font-body"
          >
            <Calendar size={20} />
            Bookings
          </a>
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-cream/70 hover:bg-cream/5 hover:text-cream transition-colors w-full font-body">
            <Settings size={20} />
            Settings
          </button>
          <a
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-cream/70 hover:bg-cream/5 hover:text-cream transition-colors font-body"
          >
            <Home size={20} />
            View Website
          </a>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <Button
            variant="outline"
            className="w-full border-cream/30 text-cream hover:bg-cream/10"
            onClick={handleLogout}
          >
            <LogOut size={18} className="mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-card border-b border-border p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground">
                Dashboard
              </h1>
              <p className="font-body text-muted-foreground">
                Welcome back, Admin
              </p>
            </div>
            <Button variant="hero" size="lg" className="lg:hidden" onClick={handleLogout}>
              <LogOut size={18} />
            </Button>
          </div>
        </header>

        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-lg p-6 shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-green-600 font-body text-sm font-medium">
                    {stat.change}
                  </span>
                </div>
                <p className="font-body text-muted-foreground text-sm">
                  {stat.label}
                </p>
                <p className="font-display text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Bookings Table */}
          <div className="bg-card rounded-lg shadow-card overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="font-display text-xl font-semibold text-foreground">
                Recent Bookings
              </h2>
            </div>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-display">Customer</TableHead>
                    <TableHead className="font-display">Venue</TableHead>
                    <TableHead className="font-display">Date</TableHead>
                    <TableHead className="font-display">Guests</TableHead>
                    <TableHead className="font-display">Type</TableHead>
                    <TableHead className="font-display">Status</TableHead>
                    <TableHead className="font-display text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {demoBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="font-body font-medium">
                        {booking.customerName}
                      </TableCell>
                      <TableCell className="font-body">{booking.venue}</TableCell>
                      <TableCell className="font-body">{booking.date}</TableCell>
                      <TableCell className="font-body">{booking.guests}</TableCell>
                      <TableCell className="font-body">{booking.eventType}</TableCell>
                      <TableCell>{getStatusBadge(booking.status)}</TableCell>
                      <TableCell className="font-body text-right font-medium">
                        ${booking.amount.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, User, AlertCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// Demo credentials - In production, use Lovable Cloud for proper authentication
const DEMO_ADMIN_ID = "admin";
const DEMO_ADMIN_PASS = "grandmajestic2024";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    id: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (credentials.id === DEMO_ADMIN_ID && credentials.password === DEMO_ADMIN_PASS) {
      // Store auth state in sessionStorage (demo only)
      sessionStorage.setItem("adminAuth", "true");
      toast({
        title: "Welcome back!",
        description: "Successfully logged in to admin dashboard.",
      });
      navigate("/admin/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <main className="min-h-screen bg-secondary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl font-bold text-gold mb-2">
            Grand Majestic
          </h1>
          <p className="font-body text-cream/80">Admin Portal</p>
        </div>

        {/* Login Card */}
        <div className="bg-card rounded-lg shadow-elevated p-8">
          <h2 className="font-display text-2xl font-semibold text-foreground text-center mb-6">
            Sign In
          </h2>

          <form onSubmit={handleLogin} className="space-y-6">
            {error && (
              <div className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive">
                <AlertCircle size={18} />
                <span className="font-body text-sm">{error}</span>
              </div>
            )}

            <div className="space-y-2">
              <Label className="font-display">Admin ID</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  placeholder="Enter admin ID"
                  className="h-12 pl-10"
                  value={credentials.id}
                  onChange={(e) =>
                    setCredentials({ ...credentials, id: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="font-display">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  type="password"
                  placeholder="Enter password"
                  className="h-12 pl-10"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Demo Credentials Hint */}
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="font-body text-sm text-muted-foreground text-center">
              <strong>Demo Credentials:</strong><br />
              ID: <code className="text-primary">admin</code><br />
              Password: <code className="text-primary">grandmajestic2024</code>
            </p>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <a
            href="/"
            className="font-body text-cream/80 hover:text-gold transition-colors"
          >
            ← Back to Website
          </a>
        </div>
      </div>
    </main>
  );
};

export default AdminLoginPage;

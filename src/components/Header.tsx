import { Button } from "@/components/ui/button";
import { LogIn, LogOut, User, FileText } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import egyptLogo from "@/assets/egypt-telecom-logo.png";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="bg-card border-b border-border shadow-soft" dir="rtl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <img 
              src={egyptLogo} 
              alt="وزارة الاتصالات المصرية" 
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">
                نظام مساعد الموظفين الذكي
              </h1>
              <p className="text-sm text-muted-foreground">
                وزارة الاتصالات وتكنولوجيا المعلومات
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              الرئيسية
            </Link>
            <Link 
              to="/form" 
              className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              النموذج
            </Link>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">أحمد محمد</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLoggedIn(false)}
                  className="flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  تسجيل خروج
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => setIsLoggedIn(true)}
                className="btn-primary flex items-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                تسجيل دخول
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
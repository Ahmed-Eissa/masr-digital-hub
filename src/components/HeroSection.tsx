import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";
import egyptLogo from "@/assets/egypt-telecom-logo.png";

export function HeroSection() {
  return (
    <section className="hero-gradient py-20 text-center" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo and Badge */}
          <div className="flex flex-col items-center gap-4">
            <img 
              src={egyptLogo} 
              alt="وزارة الاتصالات المصرية" 
              className="w-24 h-24 rounded-full shadow-card"
            />
            <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-medium">
                مدعوم بالذكاء الاصطناعي
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              نظام مساعد الموظفين الذكي
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              منصة متطورة تساعد موظفي وزارة الاتصالات في إنجاز مهامهم بكفاءة عالية باستخدام تقنيات الذكاء الاصطناعي
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg font-semibold shadow-card">
              ابدأ الاستخدام الآن
              <ArrowLeft className="mr-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
              تعرف على المزيد
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">١٠٠٠+</div>
              <div className="text-white/80">موظف مستخدم</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">٥٠٠٠+</div>
              <div className="text-white/80">مهمة مكتملة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">٩٨٪</div>
              <div className="text-white/80">معدل الرضا</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
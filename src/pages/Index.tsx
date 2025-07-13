import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ActivitiesGrid } from "@/components/ActivitiesGrid";
import { RecentActivities } from "@/components/RecentActivities";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ActivitiesGrid />
      
      {/* Recent Activities Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <RecentActivities />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">وزارة الاتصالات وتكنولوجيا المعلومات</h3>
              <p className="text-primary-foreground/80">
                نحو مستقبل رقمي متطور للجمهورية العربية المصرية
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">روابط مفيدة</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>الموقع الرسمي للوزارة</li>
                <li>دليل المستخدم</li>
                <li>الدعم الفني</li>
                <li>سياسة الخصوصية</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p>القاهرة، مصر</p>
                <p>هاتف: ٠٢-٢٥٧٤٦٦٦٦</p>
                <p>البريد الإلكتروني: info@mcit.gov.eg</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/80">
              © ٢٠٢٤ وزارة الاتصالات وتكنولوجيا المعلومات - جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

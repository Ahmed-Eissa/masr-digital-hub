import { 
  Calendar,
  Users, 
  Mic,
  FileText,
  Presentation,
  BookOpen,
  Languages,
  Handshake
} from "lucide-react";
import { ActivityCard } from "./ActivityCard";
import { useToast } from "@/hooks/use-toast";

const activities = [
  {
    id: 1,
    title: "تحضير جدول أعمال الاجتماعات",
    description: "إنشاء جداول أعمال شاملة ومنظمة للاجتماعات الرسمية",
    icon: Calendar
  },
  {
    id: 2,
    title: "تحضير زيارة أو اجتماع",
    description: "تخطيط وتنظيم الزيارات الرسمية والاجتماعات الهامة",
    icon: Users
  },
  {
    id: 3,
    title: "تحضير مقترح كلمة لحدث",
    description: "صياغة كلمات رسمية مناسبة للأحداث والمناسبات المختلفة",
    icon: Mic
  },
  {
    id: 4,
    title: "تلخيص محتوى",
    description: "تلخيص التقارير والوثائق الطويلة بشكل مختصر ومفيد",
    icon: FileText
  },
  {
    id: 5,
    title: "تحضير عرض تقديمي لحدث",
    description: "إعداد عروض تقديمية احترافية للأحداث والمؤتمرات",
    icon: Presentation
  },
  {
    id: 6,
    title: "تحضير محتوى تقارير طويلة",
    description: "إنشاء تقارير مفصلة وشاملة للمشاريع والأنشطة",
    icon: BookOpen
  },
  {
    id: 7,
    title: "ترجمة محتوى",
    description: "ترجمة الوثائق والنصوص بين اللغات المختلفة بدقة عالية",
    icon: Languages
  },
  {
    id: 8,
    title: "دراسة أوجه التعاون مع شركة أو دولة",
    description: "تحليل فرص التعاون والشراكات الاستراتيجية",
    icon: Handshake
  }
];

export function ActivitiesGrid() {
  const { toast } = useToast();

  const handleActivityClick = (activity: typeof activities[0]) => {
    toast({
      title: "تم اختيار النشاط",
      description: `سيتم تشغيل: ${activity.title}`,
    });
  };

  return (
    <section className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            الخدمات المتاحة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مجموعة شاملة من الأدوات الذكية لمساعدتك في إنجاز مهامك اليومية بكفاءة عالية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              title={activity.title}
              description={activity.description}
              icon={activity.icon}
              onClick={() => handleActivityClick(activity)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
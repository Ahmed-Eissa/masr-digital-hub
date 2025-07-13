import { Clock, FileText, Users, Presentation } from "lucide-react";
import { Card } from "@/components/ui/card";

const recentActivities = [
  {
    id: 1,
    title: "جدول أعمال اجتماع مجلس الإدارة",
    date: "منذ ساعة",
    icon: Users,
    status: "مكتمل"
  },
  {
    id: 2,
    title: "ترجمة تقرير التعاون مع الإمارات",
    date: "منذ ٣ ساعات",
    icon: FileText,
    status: "قيد المراجعة"
  },
  {
    id: 3,
    title: "عرض تقديمي لمؤتمر القاهرة التقني",
    date: "أمس",
    icon: Presentation,
    status: "مكتمل"
  },
  {
    id: 4,
    title: "تلخيص تقرير الربع الثالث",
    date: "منذ يومين",
    icon: FileText,
    status: "مكتمل"
  }
];

export function RecentActivities() {
  return (
    <div className="space-y-6" dir="rtl">
      <h2 className="text-2xl font-bold text-foreground">الأنشطة الأخيرة</h2>
      
      <div className="grid gap-4">
        {recentActivities.map((activity) => (
          <Card key={activity.id} className="p-4 hover:shadow-card transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <activity.icon className="w-5 h-5 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-medium text-card-foreground">
                  {activity.title}
                </h3>
                <div className="flex items-center gap-4 mt-1">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {activity.date}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activity.status === 'مكتمل' 
                      ? 'bg-accent/20 text-accent-foreground' 
                      : 'bg-secondary/20 text-secondary-foreground'
                  }`}>
                    {activity.status}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
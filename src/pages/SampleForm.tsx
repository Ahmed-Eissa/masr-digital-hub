import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload, FileText, Send } from "lucide-react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "الاسم يجب أن يكون مكون من حرفين على الأقل"),
  email: z.string().email("البريد الإلكتروني غير صحيح"),
  department: z.string().min(1, "يجب اختيار القسم"),
  subject: z.string().min(5, "الموضوع يجب أن يكون مكون من 5 أحرف على الأقل"),
  message: z.string().min(10, "الرسالة يجب أن تكون مكونة من 10 أحرف على الأقل"),
});

const SampleForm = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      department: "",
      subject: "",
      message: "",
    },
  });

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      toast({
        title: "تم رفع الملف بنجاح",
        description: `الملف: ${file.name}`,
      });
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    console.log("Uploaded file:", uploadedFile);
    
    toast({
      title: "تم إرسال النموذج بنجاح",
      description: "شكراً لك، سيتم الرد عليك في أقرب وقت ممكن.",
    });
    
    // Reset form
    form.reset();
    setUploadedFile(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="hero-gradient py-16" dir="rtl">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            نموذج عينة
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            يرجى ملء النموذج التالي بالمعلومات المطلوبة
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20" dir="rtl">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-semibold text-primary">
                نموذج التواصل والاستفسارات
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">الاسم الكامل</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="أدخل اسمك الكامل"
                              {...field}
                              className="h-12 text-lg"
                              dir="rtl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">البريد الإلكتروني</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="example@domain.com"
                              {...field}
                              className="h-12 text-lg"
                              dir="ltr"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Department Select */}
                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">القسم</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 text-lg">
                                <SelectValue placeholder="اختر القسم" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="tech">القسم التقني</SelectItem>
                              <SelectItem value="admin">القسم الإداري</SelectItem>
                              <SelectItem value="hr">الموارد البشرية</SelectItem>
                              <SelectItem value="finance">القسم المالي</SelectItem>
                              <SelectItem value="support">الدعم الفني</SelectItem>
                              <SelectItem value="other">أخرى</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Subject */}
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg">موضوع الرسالة</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="أدخل موضوع رسالتك"
                              {...field}
                              className="h-12 text-lg"
                              dir="rtl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Message Textarea */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">نص الرسالة</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="اكتب رسالتك هنا..."
                            {...field}
                            className="min-h-[120px] text-lg resize-none"
                            dir="rtl"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* File Upload */}
                  <div className="space-y-2">
                    <label className="text-lg font-medium text-foreground">
                      رفع المستندات (اختياري)
                    </label>
                    <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-8 text-center transition-colors hover:border-primary/50">
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                        accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                      />
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer flex flex-col items-center gap-4"
                      >
                        <Upload className="w-12 h-12 text-muted-foreground" />
                        <div>
                          <p className="text-lg font-medium text-foreground">
                            انقر لرفع ملف
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            PDF, DOC, DOCX, TXT, JPG, PNG (أقصى حجم: 10MB)
                          </p>
                        </div>
                      </label>
                    </div>

                    {uploadedFile && (
                      <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                        <FileText className="w-6 h-6 text-primary" />
                        <div className="flex-1">
                          <p className="font-medium">{uploadedFile.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => setUploadedFile(null)}
                        >
                          حذف
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="btn-primary min-w-[200px] text-lg gap-2"
                    >
                      <Send className="w-5 h-5" />
                      إرسال النموذج
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
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

export default SampleForm;
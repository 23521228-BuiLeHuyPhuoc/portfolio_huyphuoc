"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, CheckCircle2 } from "lucide-react";

const info = [
  { icon: Mail, label: "Email", value: "huyphuoc@example.com" },
  { icon: Phone, label: "Điện thoại", value: "+84 123 456 789" },
  { icon: MapPin, label: "Địa điểm", value: "TP. Hồ Chí Minh, Việt Nam" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    setError("");
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-accent mb-1">Liên hệ</p>
          <h1 className="font-dancing text-5xl text-primary">Cùng làm việc nhé!</h1>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Bạn đang tìm ứng viên cho vị trí lập trình? Hãy để lại lời nhắn, tôi
            sẽ phản hồi sớm nhất.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            {info.map((i) => (
              <div key={i.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <i.icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{i.label}</p>
                  <p className="text-foreground">{i.value}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground transition-colors"><Github size={18} /></a>
              <a href="#" className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground transition-colors"><Linkedin size={18} /></a>
              <a href="mailto:huyphuoc@example.com" className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground transition-colors"><Mail size={18} /></a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl bg-card border border-border p-6 space-y-4">
            <div>
              <label className="block text-sm mb-1 text-foreground">Họ tên</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Nguyễn Văn A"
                className="w-full rounded-lg border border-border bg-input-background px-4 py-2.5 outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-foreground">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="email@congty.com"
                className="w-full rounded-lg border border-border bg-input-background px-4 py-2.5 outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-foreground">Lời nhắn</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Nội dung công việc / cơ hội..."
                className="w-full rounded-lg border border-border bg-input-background px-4 py-2.5 outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            {sent && (
              <p className="text-sm text-green-600 flex items-center gap-2">
                <CheckCircle2 size={16} /> Cảm ơn bạn! Tin nhắn đã được gửi.
              </p>
            )}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:bg-accent transition-colors"
            >
              Gửi tin nhắn <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

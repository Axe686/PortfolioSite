import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">
              Контакты
            </p>
            <h2 className="section-title font-semibold">
              Давайте обсудим следующую сцену
            </h2>
            <p className="text-muted">
              Напишите в Telegram или оставьте заявку — подготовим план, сроки и
              предложение.
            </p>
          </div>
          <div className="scene-panel space-y-4 p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Telegram</p>
              <a
                href="https://t.me/inkpaper"
                className="text-lg font-semibold text-accent"
              >
                @inkpaper
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">Email</p>
              <a
                href="mailto:hello@inkpaper.studio"
                className="text-lg font-semibold"
              >
                hello@inkpaper.studio
              </a>
            </div>
            <div className="rounded-2xl border border-line bg-bg-2/60 px-4 py-3 text-sm text-muted">
              Отвечаем в течение 1 рабочего дня.
            </div>
          </div>
        </div>
        <form className="scene-panel space-y-4 p-6">
          <div className="grid gap-3">
            <label className="text-sm font-medium text-text" htmlFor="name">
              Имя
            </label>
            <Input id="name" name="name" placeholder="Как к вам обращаться" />
          </div>
          <div className="grid gap-3">
            <label className="text-sm font-medium text-text" htmlFor="email">
              Email
            </label>
            <Input id="email" name="email" type="email" placeholder="name@company.com" />
          </div>
          <div className="grid gap-3">
            <label className="text-sm font-medium text-text" htmlFor="message">
              О проекте
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Что нужно сделать, какие сроки, примеры"
            />
          </div>
          <Button type="submit" className="w-full">
            Отправить запрос
          </Button>
          <p className="text-xs text-muted">
            Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
          </p>
        </form>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-bg/90 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link href="#top" className="flex items-center gap-3">
          <span className="text-lg font-semibold text-text">Ink & Paper</span>
          <span className="hidden text-xs uppercase tracking-[0.3em] text-muted md:block">
            editorial studio
          </span>
        </Link>
        <nav className="hidden items-center gap-2 lg:flex">
          {services.map((service) => (
            <Button
              key={service.id}
              variant="ghost"
              size="sm"
              asChild
              className="text-sm"
            >
              <Link href={`#${service.id}`}>{service.navLabel}</Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild className="hidden md:inline-flex">
            <Link href="#contact">Обсудить проект</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden">
                <Menu className="h-4 w-4" />
                Меню
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Навигация</SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-2">
                {services.map((service) => (
                  <Button key={service.id} variant="ghost" asChild>
                    <Link href={`#${service.id}`}>{service.navLabel}</Link>
                  </Button>
                ))}
              </div>
              <div className="mt-auto">
                <Button className="w-full" asChild>
                  <Link href="#contact">Обсудить проект</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

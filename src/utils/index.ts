import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Home, Stethoscope, Scissors, Syringe, GraduationCap } from 'lucide-react';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateWhatsAppLink(phone: string, message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

export function getIcon(iconName: string) {
  const icons: { [key: string]: any } = {
    Home,
    Stethoscope,
    Scissors,
    Syringe,
    GraduationCap
  };
  return icons[iconName] || Home;
}

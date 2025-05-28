import {
  LayoutDashboard,
  SquareStack,
  MessageSquareDiff,
  TrendingUp,
  Phone,
  CalendarRange,
  MessageCircleMore,
  Settings,
} from "lucide-react";

export const MENU_ITEMS = Object.freeze({
  general: [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "History", icon: SquareStack },
    { name: "Calendar", icon: CalendarRange },
    { name: "Appointments", icon: MessageSquareDiff },
    { name: "Statistics", icon: TrendingUp },
  ],
  tools: [
    { name: "Chat", icon: MessageCircleMore },
    { name: "Support", icon: Phone },
  ],
  settings: [{ name: "Setting", icon: Settings }],
});

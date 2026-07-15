import { navigation } from "@/data/navigation";
import NavItem from "./NavItem";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <NavItem key={item.href} {...item} />
      ))}
    </nav>
  );
}

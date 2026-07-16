import { navigation } from "@/data/navigation";

import NavLink from "./NavLink";
import ResumeButton from "./ResumeButton";

export default function DesktopNav() {
  return (
    <div className="hidden items-center gap-2 lg:flex">
      {navigation.map((item) => (
        <NavLink key={item.href} href={item.href} label={item.label} />
      ))}

      <ResumeButton />
    </div>
  );
}

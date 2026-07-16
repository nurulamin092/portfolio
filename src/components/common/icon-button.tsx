import { Button } from "./button";
import { cn } from "@/lib/utils";

interface IconButtonProps extends React.ComponentProps<typeof Button> {
  icon: React.ReactNode;
}

export default function IconButton({
  icon,
  className,
  children,
  ...props
}: IconButtonProps) {
  return (
    <Button {...props} className={cn("gap-2", className)}>
      {icon}
      {children}
    </Button>
  );
}

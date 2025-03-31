import { Button } from "./ui/moving-border";
import { ReactNode } from "react";

// Define a proper interface for the component props
interface MovingBorderDemoProps {
  content?: ReactNode;
  icon?: ReactNode;
}

export function MovingBorderDemo({ content, icon }: MovingBorderDemoProps) {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {content && content}
        {icon && icon}
      </Button>
    </div>
  );
}

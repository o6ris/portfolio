import { ReactNode } from "react";
import { icons } from "lucide-react";
import Icon from "@/core/ui/Icons/Icon";

interface TasksListProps {
  text: ReactNode;
  iconName: keyof typeof icons;
}

function TasksList({ text, iconName }: TasksListProps) {
  return (
    <article className="flex items-center gap-4 ">
      <div className="p-2 rounded-full bg-gradiant-primary">
        <Icon name={iconName} strokeWidth={2} size={12} color="white" />
      </div>
      <p>{text}</p>
    </article>
  );
}

export default TasksList;

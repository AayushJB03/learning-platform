import { CheckCircle, Lock, PlayCircle, ProgressRing } from "./icons";

const statuses = {
  "in-progress": { label: "In Progress", icon: <ProgressRing className="size-5" /> },
  completed: { label: "Completed", icon: <CheckCircle className="size-5 text-success" /> },
  "now-playing": { label: "Now Playing", icon: <PlayCircle filled className="size-5 text-primary-500" /> },
  locked: { label: "Locked", icon: <Lock className="size-5 text-neutral-500" /> },
};

export function StatusIndicator({ status }: { status: keyof typeof statuses }) {
  const s = statuses[status];
  return (
    <span className="inline-flex items-center gap-2 text-body text-neutral-700">
      {s.icon}
      {s.label}
    </span>
  );
}

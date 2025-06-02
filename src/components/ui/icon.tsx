import { LucideProps, icons } from "lucide-react";

interface IconProps extends LucideProps {
  name: keyof typeof icons;
  fallback?: keyof typeof icons;
}

const Icon = ({ name, fallback = "AlertCircle", ...props }: IconProps) => {
  const LucideIcon = icons[name] || icons[fallback];
  return <LucideIcon {...props} />;
};

export default Icon;

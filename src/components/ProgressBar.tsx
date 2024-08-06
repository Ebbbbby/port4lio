import { useEffect, useState } from "react";

interface ProgressBarProps {
  value: number;
  color: string;
}

const ProgressBar = ({ value = 0, color }: ProgressBarProps) => {
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setPercent(Math.min(100, Math.max(value, 0)));
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [value]);

  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 h-4">
      <div
        className={`text-xs font-medium text-white text-center p-0.5 leading-none rounded-full w-full ${color}`}
        style={{ width: `${percent}%`, transition: "width 1.5s ease-in-out" }}
      >
        <span>{percent.toFixed()}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;

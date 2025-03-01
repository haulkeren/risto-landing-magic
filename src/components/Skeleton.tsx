// src/components/Skeleton.tsx
import { FC } from "react";

interface SkeletonProps {
  className?: string;
}

export const Skeleton: FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded-lg ${className}`}
      style={{ animationDuration: "1.5s" }}
    />
  );
};
import { useMemo } from "react";

const indicatorSizes = {
  small: 20,
  medium: 35,
  big: 50,
};

const strokeSize = 5;
const visiblePercentage = 40;

type SizeType = keyof typeof indicatorSizes;

type ActivityIndicatorProps = {
  size: SizeType;
};

export const ActivityIndicator = ({ size }: ActivityIndicatorProps) => {
  const sizeNum = indicatorSizes[size];
  const { viewBox, radius, dash } = useMemo(() => {
    console.log("run memo");
    const radius = (sizeNum - strokeSize) / 2;
    const circumference = radius * Math.PI * 2;
    const strokeLength = (visiblePercentage * circumference) / 100;
    return {
      viewBox: `0 0 ${sizeNum} ${sizeNum}`,
      radius,
      dash: circumference - strokeLength,
    };
  }, [sizeNum]);

  return (
    <svg width={sizeNum} height={sizeNum} viewBox={viewBox}>
      <circle
        fill="none"
        stroke="#FF5733"
        cx={sizeNum / 2}
        cy={sizeNum / 2}
        r={radius}
        strokeWidth={`${strokeSize}px`}
        strokeDasharray={dash}
        strokeLinecap="round"
      />
    </svg>
  );
};

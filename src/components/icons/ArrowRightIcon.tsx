import { memo } from 'react';

// stroke
type Props = {
  className: string;
};
export default memo(function ArrowRightIcon({ className }: Props) {
  return (
    <svg
      //   width="13"
      //   height="11"
      className={className}
      viewBox="0 0 13 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.3125 5.79395L1.0625 5.79395"
        // stroke="white"
        strokeWidth="1.125"
        className={className}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.77539 1.27575L12.3129 5.79375L7.77539 10.3125"
        // stroke="white"
        strokeWidth="1.125"
        className={className}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

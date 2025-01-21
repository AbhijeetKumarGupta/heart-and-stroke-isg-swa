'use client';

import { useRouter } from 'next/navigation';

export default function RoutingButton({ buttonText, route, className, onClick }:
  { buttonText: string, route: string, className: string, onClick?: () => void }) {
  const router = useRouter();

  const handleStartSurvey = () => {
    onClick?.()
    router.push(route);
  };

  return (
    <button id="button" onClick={handleStartSurvey} className={className}>
      {buttonText}
    </button>
  );
}
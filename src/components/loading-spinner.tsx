'use client';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="loader" />
      <style jsx>{`
            .loader {
              border: 8px solid rgba(75, 192, 192, 0.2);
              border-left-color: rgba(75, 192, 192, 1);
              border-radius: 50%;
              width: 40px;
              height: 40px;
              animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
    </div>
  );
}

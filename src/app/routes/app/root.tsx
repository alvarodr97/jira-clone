import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import { MainErrorFallback } from "@/components/errors/MainError";
import { Navigation } from "@/components/navigation/Navigation";

export const AppRoot = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <Suspense
        fallback={
          <div className="flex size-full items-center justify-center">
            <p>Cargando...</p>
          </div>
        }
      >
        {/* TODO: Change error project fallback */}
        <ErrorBoundary key={location.pathname} fallback={<MainErrorFallback />}>
          <Navigation />
          <div className="flex-1 min-w-0 z-0 overflow-auto">
            <Outlet />
          </div>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};

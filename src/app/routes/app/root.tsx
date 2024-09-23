import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Outlet, useLocation } from "react-router-dom";
import { AppLayout } from "@/components/layouts/app-layout";
import { MainErrorFallback } from "@/components/errors/MainError";

export const AppRoot = () => {
  const location = useLocation();

  return (
    <AppLayout>
      <Suspense
        fallback={
          <div className="flex size-full items-center justify-center">
            <p>Cargando...</p>
          </div>
        }
      >
        {/* TODO: Change error project fallback */}
        <ErrorBoundary key={location.pathname} fallback={<MainErrorFallback />}>
          <Outlet />
        </ErrorBoundary>
      </Suspense>
    </AppLayout>
  );
};

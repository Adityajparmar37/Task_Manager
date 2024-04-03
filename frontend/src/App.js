import React from "react";
import AppRoutes from "./AppRoutes/AppRoutes";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./Components/ErrorFallback/ErrorFallback";

export default function App() {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.reload();
        }}>
        <AppRoutes />
      </ErrorBoundary>
    </>
  );
}

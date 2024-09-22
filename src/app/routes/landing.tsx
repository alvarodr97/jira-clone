import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const LandingRoute = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/project/board");
  };
  return (
    // TODO: Make landing page
    <div className="flex h-screen items-center">
      <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8 lg:py-16">
        <Button onClick={handleStart}>Get started</Button>
      </div>
    </div>
  );
};

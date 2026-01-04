import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n";

export function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  // Don't show on home page
  if (location.pathname === "/") {
    return null;
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleBack}
      className="gap-2 mb-4"
    >
      <ArrowLeft className="w-4 h-4" />
      {t.common.back}
    </Button>
  );
}

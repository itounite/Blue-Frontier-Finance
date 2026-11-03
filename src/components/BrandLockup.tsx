import React from "react";
import beyondDark from "@/assets/beyond-impact-crisp-dark.png";
import beyondLight from "@/assets/beyond-impact-crisp-light.png";
import umitoBlue from "@/assets/umito-vector-crisp-blue.png";
import umitoWhite from "@/assets/umito-vector-crisp-white.png";

interface BrandLockupProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  align?: "start" | "center";
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLockup: React.FC<BrandLockupProps> = ({
  variant = "light",
  size = "sm",
  align = "start",
  className = "",
  showSubtitle = true,
}) => {
  const isDark = variant === "dark";

  // Dimensions tuned for optical harmony between the two brand marks
  const beyondHeight = {
    sm: "h-7 sm:h-8",
    md: "h-10 sm:h-12",
    lg: "h-14 sm:h-16",
  }[size];

  const umitoHeight = {
    sm: "h-7 sm:h-8",
    md: "h-9 sm:h-11",
    lg: "h-13 sm:h-15",
  }[size];

  const dividerHeight = {
    sm: "h-5 sm:h-6",
    md: "h-7 sm:h-8",
    lg: "h-10 sm:h-12",
  }[size];

  const textSize = {
    sm: "text-[9.5px] sm:text-[10.5px] tracking-[0.2em] sm:tracking-[0.22em]",
    md: "text-xs sm:text-sm tracking-[0.22em]",
    lg: "text-sm sm:text-base tracking-[0.24em]",
  }[size];

  const textColor = isDark ? "text-white" : "text-[#002237]";

  return (
    <div
      className={`inline-flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      } gap-1.5 transition-all ${className}`}
    >
      <div className="flex items-center gap-2.5 sm:gap-3.5">
        <img
          src={isDark ? beyondLight : beyondDark}
          alt="Beyond Impact"
          className={`${beyondHeight} w-auto object-contain select-none`}
          loading="eager"
          decoding="async"
        />
        <span
          className={`${dividerHeight} w-px ${
            isDark ? "bg-white/35" : "bg-[#002237]/25"
          }`}
          aria-hidden="true"
        />
        <img
          src={isDark ? umitoWhite : umitoBlue}
          alt="UMITO Partners"
          className={`${umitoHeight} w-auto object-contain select-none`}
          loading="eager"
          decoding="async"
        />
      </div>

      {showSubtitle && (
        <span
          className={`font-black uppercase leading-tight ${textSize} ${textColor} transition-colors`}
        >
          BLUE FRONTIER FINANCE
        </span>
      )}
    </div>
  );
};

export default BrandLockup;

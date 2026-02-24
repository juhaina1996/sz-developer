"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import FooterMobile from "./FooterMobile";
import FooterDesktop from "./FooterDesktop";

export default function Footer() {
  const isMobile = useIsMobile();

  return isMobile ? <FooterMobile /> : <FooterDesktop />;
}

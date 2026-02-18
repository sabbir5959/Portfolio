"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export default function ThreeDPin({
  children,
  title,
  href,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
}) {
  return (
    <div className="w-full flex items-center justify-center">
      <PinContainer title={title} href={href}>
        {children}
      </PinContainer>
    </div>
  );
}
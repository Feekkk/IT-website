import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import Information from "../pages/information";

export const Route = createFileRoute("/information")({
  component: Information,
});

export default function InformationRoute() {
  return <Information />;
}

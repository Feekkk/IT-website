import { createFileRoute } from "@tanstack/react-router";
import AboutUs from "../pages/AboutUs";
import { createSeoHead, webPageJsonLd } from "@/lib/seo";

const title = "About Us";
const description =
  "Learn about the RCMP IT Department — audio and visual support, campus network help, and internal system development.";

export const Route = createFileRoute("/about")({
  head: () =>
    createSeoHead({
      title,
      description,
      path: "/about",
      jsonLd: webPageJsonLd({ title, description, path: "/about" }),
    }),
  component: AboutUs,
});


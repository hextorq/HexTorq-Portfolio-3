import { createFileRoute } from "@tanstack/react-router";
import { HextorqSite } from "@/components/hextorq/HextorqSite";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <HextorqSite />;
}

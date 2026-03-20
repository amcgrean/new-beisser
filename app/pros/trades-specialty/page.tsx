import type { Metadata } from "next";
import ProAudiencePage from "../pro-template";

// breadcrumb schema handled in ProAudiencePage
export const metadata: Metadata = {
  title: "Trades & Specialty Contractors | Beisser Lumber",
  description: "Beisser Lumber support for deck builders, siding crews, framers, and specialty trades with hardware, envelope products, and branch service.",
};

export default function TradesSpecialtyPage() {
  return (
    <ProAudiencePage
      breadcrumbLabel="Trades & Specialty Contractors"
      path="/pros/trades-specialty"
      h1="Trades & Specialty Contractors — Building Materials from Beisser Lumber"
      intro="Beisser supports deck builders, siding installers, framers, and specialty trades with hardware, envelope products, flexible branch support, and quick access to the materials tied to their scope."
      body={[
        "Trades contractors often need speed, dependable will-call support, and a branch team that understands the specialty items tied to their work.",
        "Beisser supports those crews with hardware and screws, building envelope products, siding accessories, and the day-to-day items specialty contractors need to complete the job without improvising from a big-box aisle.",
        "That branch-based support extends to decking, framing, siding, and concrete-related categories so specialty trades can bundle more of the scope through one local partner.",
      ]}
      highlights={[
        "Hardware & screws for deck, framing, and exterior work",
        "Building envelope products and accessories",
        "Branch-based support and will-call flexibility",
        "Materials for deck builders, siding installers, framers, and specialty trades",
      ]}
    />
  );
}

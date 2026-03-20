import type { Metadata } from "next";
import ProAudiencePage from "../pro-template";

// breadcrumb schema handled in ProAudiencePage
export const metadata: Metadata = {
  title: "Commercial & Multi-Family Builders | Beisser Lumber",
  description: "Commercial and multifamily support from Beisser Lumber, including estimating, wall panelization, and engineered wood solutions.",
};

export default function CommercialMultifamilyPage() {
  return (
    <ProAudiencePage
      breadcrumbLabel="Commercial & Multi-Family Builders"
      path="/pros/commercial-multifamily"
      h1="Commercial & Multi-Family Builders — Building Materials from Beisser Lumber"
      intro="Beisser Lumber supports commercial and multifamily work with estimating, engineered wood, and a Components Division built around wall panelization and installation-ready delivery."
      body={[
        "Beisser's commercial differentiator is the Components Division, which produces panelized walls for commercial and residential construction with more than 15 years of experience.",
        "Those wall panels are built in a climate-controlled environment and custom-designed for applications ranging from interior walls to finished exterior wall assemblies.",
        "The result is a turnkey product ready to install upon arrival, giving project teams a cleaner framing workflow and a better handoff from estimating through field installation.",
      ]}
      highlights={[
        "Panelized walls for commercial and residential projects",
        "15+ years of wall-panel experience",
        "Climate-controlled Components Division",
        "Custom-designed wall panels for nearly any application",
        "Turnkey product ready to install on arrival",
      ]}
    />
  );
}

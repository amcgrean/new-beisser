import type { Metadata } from "next";
import Link from "next/link";
import ProAudiencePage from "../pro-template";

// breadcrumb schema handled in ProAudiencePage
export const metadata: Metadata = {
  title: "Remodelers | Beisser Lumber",
  description: "See how Beisser Lumber supports Iowa remodelers with profile matching, custom doors, visualizers, and product selection help.",
};

export default function RemodelersPage() {
  return (
    <ProAudiencePage
      breadcrumbLabel="Remodelers"
      path="/pros/remodelers"
      h1="Remodelers — Building Materials from Beisser Lumber"
      intro="Beisser Lumber is a strong fit for remodeling contractors who need historical profile matching, custom door support, and product selections that work within lived-in homes and phased remodel schedules."
      body={[
        "As a premier Des Moines Remodelers Council member, Beisser Lumber is an excellent fit for remodeling contractors across Central Iowa.",
        "Our sales staff brings more than 400 years of combined industry experience, giving remodelers a practical sounding board when a project involves matching existing trim, replacing windows, or building custom door solutions around older openings.",
        "Beisser's millwork shop can match historical profiles, the door shop can custom-build doors, and free product visualizers help homeowners understand how selections will look before the order is released.",
      ]}
      highlights={[
        "Premier Des Moines Remodelers Council member",
        "400+ years of combined sales-staff experience",
        "Historical profile matching through the millwork shop",
        "Custom-built doors from the Grimes door shop",
        "Free product visualizers for homeowner-facing selection work",
      ]}
      extraSection={(
        <section className="rounded-xl border bg-white p-5 shadow-sm text-sm text-slate-700">
          <h2 className="text-xl font-semibold text-slate-900">Visualize Your Deck</h2>
          <p className="mt-2">Not sure what composite decking will look like on your home? Use our deck visualizer to try different colors and styles before you buy.</p>
          <p className="mt-2 text-xs text-slate-500">Aaron: update the placeholder link below once the final visualizer URL is confirmed.</p>
          <Link href="/tools/deck-visualizer" className="mt-3 inline-flex rounded-md bg-brand-green px-4 py-2 text-sm font-semibold text-white hover:bg-brand-greenDark">Open the Deck Visualizer</Link>
        </section>
      )}
    />
  );
}

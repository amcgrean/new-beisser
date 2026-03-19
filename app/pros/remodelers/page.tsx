import ProAudiencePage from "../pro-template";

export default function RemodelersPage() {
  return (
    <ProAudiencePage
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
    />
  );
}

import ProAudiencePage from "../pro-template";

export default function ResidentialBuildersPage() {
  return (
    <ProAudiencePage
      h1="Residential Builders — Building Materials from Beisser Lumber"
      intro="Beisser gives residential builders a wide product selection backed by in-house services, dedicated sales support, and delivery coordination that keeps materials aligned to the build schedule."
      body={[
        "Residential builders get the benefit of both breadth and service at Beisser Lumber: a wide selection of products backed by high-quality customer support.",
        "Builders can lean on in-house design services, full estimating services, and delivery directly to the jobsite rather than juggling separate partners for every phase of the build.",
        "Each builder can work with a dedicated sales rep and support team, including experts in windows, decking, and other core product lines, to keep the project moving from first takeoff through final selections.",
      ]}
      highlights={[
        "In-house design services",
        "Full estimating and takeoff support",
        "Delivery to the jobsite",
        "Dedicated sales rep",
        "Support-team specialists in windows, decking, and major product lines",
      ]}
    />
  );
}

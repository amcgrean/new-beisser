// Small inline icon set (24px grid, 1.75 stroke, currentColor) so the site has
// one consistent icon style without adding a dependency.
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 20, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ChevronDown = (p: IconProps) => <Icon {...p}><path d="m6 9 6 6 6-6" /></Icon>;
export const ArrowRight = (p: IconProps) => <Icon {...p}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Icon>;
export const Phone = (p: IconProps) => (
  <Icon {...p}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </Icon>
);
export const MenuIcon = (p: IconProps) => <Icon {...p}><path d="M4 6h16M4 12h16M4 18h16" /></Icon>;
export const CloseIcon = (p: IconProps) => <Icon {...p}><path d="M18 6 6 18M6 6l12 12" /></Icon>;
export const MapPin = (p: IconProps) => (
  <Icon {...p}><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></Icon>
);
export const Clock = (p: IconProps) => <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Icon>;
export const Truck = (p: IconProps) => (
  <Icon {...p}>
    <path d="M10 17h4V5H2v12h3" /><path d="M14 9h4l4 4v4h-2" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" />
  </Icon>
);
export const Ruler = (p: IconProps) => (
  <Icon {...p}>
    <path d="M21.3 15.3 8.7 2.7a1 1 0 0 0-1.4 0L2.7 7.3a1 1 0 0 0 0 1.4l12.6 12.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4Z" />
    <path d="m7.5 10.5 2-2M10.5 13.5l2-2M13.5 16.5l2-2" />
  </Icon>
);
export const PencilRuler = (p: IconProps) => (
  <Icon {...p}><path d="M3 21l3.5-1 11-11-2.5-2.5-11 11L3 21Z" /><path d="m14 6 2.5 2.5" /><path d="M14 21h7" /></Icon>
);
export const Hammer = (p: IconProps) => (
  <Icon {...p}>
    <path d="m15 12-8.4 8.4a2 2 0 1 1-3-3L12 9" /><path d="M17.6 15 22 10.6 19.4 8l-1-1L14 2.6 9.6 7l1 1L13 10.4l1 1Z" />
  </Icon>
);
export const HardHat = (p: IconProps) => (
  <Icon {...p}>
    <path d="M2 18h20v2H2z" /><path d="M4 18v-3a8 8 0 0 1 16 0v3" /><path d="M10 7V5h4v2" /><path d="M10 7v5M14 7v5" />
  </Icon>
);
export const Home = (p: IconProps) => (
  <Icon {...p}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9v11h14V9" /><path d="M10 20v-6h4v6" /></Icon>
);
export const Layers = (p: IconProps) => (
  <Icon {...p}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5" /></Icon>
);

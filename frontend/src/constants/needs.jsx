import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "The platform has been a game-changer for us. From startup KYC management to progress tracking, it made our workflow smooth and efficient. I highly recommend it!",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "The ability to manage grants and monthly reports all in one place has saved us so much time. The platform’s intuitive design and reliable notifications keep us on top of everything",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "The progress tracking feature is fantastic. We’ve been able to visualize our growth effectively and present clean, professional reports to our investors every month.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Incredible! The startup KYC process has never been easier. The team behind the platform really understands the needs of startups and offers exactly what we were looking for.",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "This platform has streamlined our entire startup management process. The grant management tools are especially impressive, and the push notifications keep us informed instantly.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "Managing multiple startups has been effortless with this platform. From KYC to grants, everything is in one place, making it easier to track and stay organized. Fantastic service!",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Startup KYC Management",
    description:
      " Easily collect and manage crucial Know Your Customer information from startups, including company details, address, and contact information.",
  },
  {
    icon: <Fingerprint />,
    text: "Progress Tracking",
    description:
      "Monitor and visualize the growth and development of startups over time with intuitive progress tracking tools.",
  },
  {
    icon: <ShieldHalf />,
    text: "Monthly Reporting",
    description:
      "Streamline the collection and review of monthly performance reports from startups, supporting various file formats and text submissions.",
  },
  {
    icon: <BatteryCharging />,
    text: "Push Notifications",
    description:
      "Keep startups informed with a robust messaging system, allowing admins to send important updates and information directly to users.",
  },
  {
    icon: <PlugZap />,
    text: "EIR Scheme Management",
    description:
      "Efficiently manage Entrepreneur-in-Residence programs, from application collection to selection status updates.",
  },
  {
    icon: <GlobeLock />,
    text: " Grants Management",
    description:
      "Comprehensive tools for managing grant schemes, including application processing, shortlisting, selection, and fund disbursement tracking.",
  },
];

export const checklistItems = [
  {
    title: "Comprehensive Startup KYC Management:",
    description:
      " Easily gather and manage essential KYC details for startups, including company info and contacts.",
  },
  {
    title: "Progress Tracking Made Simple:",
    description:
      "Track startup growth and key milestones with intuitive tools for easy visualization.",
  },
  {
    title: "Streamlined Monthly Reporting:",
    description:
      "Simplify monthly report collection with support for multiple file formats and text submissions.",
  },
  {
    title: "Effective Grants Management:",
    description:
      "Manage grant applications, shortlisting, selection, and fund tracking efficiently.",
  },
];

export const pricingOptions = [
  {
    title: "Startups",
    price: "StartHub",
    features: [
      "Seamless Connections with EIRs",
      "Notification about Status and Updates",
      "KYC Form and report generation",
      "Progress Tracking",
    ],
  },
  {
    title: "Admin",
    price: "StartHub",
    features: [
      "Validate Startups for the EIRs",
      "Push messages/info on go to all Startups",
      "Maintain and Control the platform",
      "Keep the EIRs and Startups Updated",
    ],
  },
  {
    title: "EIRs",
    price: "StartHub",
    features: [
      "Access to Shortlisted Startups",
      "Seamless Grants Management",
      "Track Progress of Startups",
      "Recieve notification about Schemes from Admin",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "FAQs" },
  { href: "#", text: "Community Forums" },
  { href: "#", text: "Updates" }
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Release Notes" },
  { href: "#", text: "Github" }
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "About Us" },
  { href: "#", text: "Contact Us" },
];

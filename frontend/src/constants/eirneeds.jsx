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
  { label: 'Progress', href: '/ProgressE' },
  { label: 'Shortlisted', href: '/ShortListed'},
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  }
];

export const features = [
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
  }
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
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

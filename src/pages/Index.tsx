import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SubgroupSection } from "@/components/SubgroupSection";
import { Footer } from "@/components/Footer";

// Import logos
import izriPicLogo from "@/assets/izri-pic-logo.png";
import izriOraLogo from "@/assets/izri-ora-logo.png";
import izriArtisanalLogo from "@/assets/izri-artisanal-logo.png";
import izriCommunityLogo from "@/assets/izri-community-logo.png";

// Import section images
import galleryImage from "@/assets/gallery-portrait.jpg";
import saffronImage from "@/assets/saffron-product.jpg";
import carpetImage from "@/assets/carpet-artisanal.jpg";
import communityImage from "@/assets/community-gathering.jpg";

const subgroupData = [
  {
    id: "pic",
    name: "IZRI.pic",
    tagline: "Visual Art & Photography",
    description:
      "A visual journey through the soul of Amazigh culture. Our lens captures the poetry of everyday life, the dignity of our elders, and the timeless beauty of our landscapes. Black and white compositions meet contemporary perspectives.",
    logo: izriPicLogo,
    image: galleryImage,
    features: [
      "Fine art photography collections",
      "Documentary series on Amazigh life",
      "Editorial and artistic collaborations",
      "Exhibition curation",
    ],
    variant: "dark" as const,
    imagePosition: "right" as const,
  },
  {
    id: "ora",
    name: "IZRI.ora",
    tagline: "Natural Treasures of the Land",
    description:
      "From the sacred saffron fields to the wild roses of the Atlas, we bring you the purest gifts of our ancestral lands. Each product carries the essence of centuries-old cultivation traditions, harvested with reverence and care.",
    logo: izriOraLogo,
    image: saffronImage,
    features: [
      "Premium Moroccan saffron",
      "Wild rose water and derivatives",
      "Ethically sourced and handpicked",
      "Direct from local cooperatives",
    ],
    variant: "light" as const,
    imagePosition: "left" as const,
  },
  {
    id: "artisanal",
    name: "IZRI.artisanal",
    tagline: "Handmade Heritage",
    description:
      "Every thread tells a story. From the iconic Taznakht carpets, where geometric symbols encode ancient wisdom, to curated vintage jackets that bridge generations — we celebrate craftsmanship as a living art form.",
    logo: izriArtisanalLogo,
    image: carpetImage,
    features: [
      "Authentic Taznakht carpets",
      "Curated vintage collection",
      "Artisan partnerships",
      "Custom commissions",
    ],
    variant: "dark" as const,
    imagePosition: "right" as const,
  },
  {
    id: "community",
    name: "IZRI.community",
    tagline: "Dialogue & Connection",
    description:
      "A gathering space for those who share our vision. Here, conversations become bridges between cultures, and stories become the fabric of our collective memory. Join us in building a community rooted in respect, curiosity, and shared heritage.",
    logo: izriCommunityLogo,
    image: communityImage,
    features: [
      "Cultural articles and essays",
      "Community events and gatherings",
      "Educational initiatives",
      "Cross-cultural dialogues",
    ],
    variant: "light" as const,
    imagePosition: "left" as const,
  },
];

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      {subgroupData.map((subgroup) => (
        <SubgroupSection key={subgroup.id} {...subgroup} />
      ))}
      <Footer />
    </main>
  );
};

export default Index;

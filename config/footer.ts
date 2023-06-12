import { FooterInterface } from "@/types";

export const footerElements: FooterInterface[] = [
    {
      title: "About",
      childrens: [
        { id: "1", title: "How it works", href: "/how-it-works" },
        { id: "2", title: "Featured", href: "/featured" },
        { id: "3", title: "Partnership", href: "/partnership" },
        { id: "4", title: "Business Relation", href: "/business-relation" }
      ]
    },
    {
      title: "Company",
      childrens: [
        { id: "5", title: "Events", href: "/events" },
        { id: "6", title: "Blog", href: "/blog" },
        { id: "7", title: "Podcast", href: "/podcast" },
        { id: "8", title: "Invite a friend", href: "/invite-a-friend" }
      ]
    },
    {
      title: "Social",
      childrens: [
        { id: "9", title: "Discord", href: "https://discord.com" },
        { id: "10", title: "Instagram", href: "https://instagram.com" },
        { id: "11", title: "Twitter", href: "https://twitter.com" },
        { id: "12", title: "Facebook", href: "https://facebook.com" }
      ]
    }
  ];
  
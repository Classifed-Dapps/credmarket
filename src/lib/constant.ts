export const homePageLists = [
  {
    id: 1,
    title: "For Sale",
    lists: ["General Items", "Clothing & Accessories", "Cars & Vehicles"],
  },
  {
    id: 2,
    title: "Jobs",
    lists: ["Full-Time/Remote", "Advertisement and Hire", "Freelance"],
  },
  {
    id: 3,
    title: "Pets",
    lists: ["Pets for Sale", "Pet Services"],
  },
  {
    id: 4,
    title: "Community",
    lists: ["Events", "Activities", "Missed Connections", "Lost + Found"],
  },
  {
    id: 5,
    title: "Real Estate",
    lists: ["Rentals", "For Sale"],
  },
  {
    id: 6,
    title: "Free Stuff",
    lists: ["Free to collect", "Giveaways"],
  },
  {
    id: 7,
    title: "Services",
    lists: ["Cleaning Services", "Moving & Transportation"],
  },
] as const;

export const footerLinks: Array<Footer> = [
  {
    title: "ABOUT US",
    links: [
      {
        name: "About CredList",
        id: 4,
      },
      {
        name: "Best of CredList",
        id: 5,
      },
      {
        name: "What's New",
        id: 6,
      },
      {
        name: "System Status",
        id: 7,
      },
    ],

    id: 1,
  },
  {
    title: "QUICK LINKS",
    links: [
      {
        name: "Advertise with Us",
        id: 8,
      },
      {
        name: "Join Us",
        id: 9,
      },
      {
        name: "Find Jobs",
        id: 10,
      },
      {
        name: "Post ads",
        id: 15,
      },
    ],

    id: 2,
  },
  {
    title: "SUPPORT",
    links: [
      {
        name: "FAQs",
        id: 11,
      },
      {
        name: "Report Abuse",
        id: 12,
      },
      {
        name: "Safety Tips",
        id: 13,
      },
    ],

    id: 3,
  },
];
export const items: { id: string; label: string }[] = [
  {
    id: "titles",
    label: "Search titles only",
  },
  {
    id: "image",
    label: "has image",
  },
  {
    id: "posted",
    label: "posted today",
  },
  {
    id: "hide",
    label: "hide duplicate",
  },
] as const;

// export const buttons: { id: number; label: string }[] = [
//   { id: 1, label: "price" },
//   { id: 2, label: "condition" },
//   { id: 3, label: "sold by" },
// ];

// export const dashboardDemo: DashProduct[] = [
//   {
//     id: 1,
//     price: 250,
//     totalImage: 3,
//     productName: "Bimo 2012, 4 gears",
//     date: "2 days ago",
//     profilePhoto: user.src,
//     profileLabel: "20 CRED",
//     profileName: "James Mand",
//     location: "London, UK",
//     photo: demoImg.src,
//   },
//   {
//     id: 2,
//     price: 250,
//     totalImage: 3,
//     productName: "Bimo 2012, 4 gears",
//     date: "2 days ago",
//     profilePhoto: user.src,
//     profileLabel: "20 CRED",
//     profileName: "James Mand",
//     location: "London, UK",
//     photo: demoImg.src,
//   },
//   {
//     id: 3,
//     price: 250,
//     totalImage: 3,
//     productName: "Bimo 2012, 4 gears",
//     date: "2 days ago",
//     profilePhoto: user.src,
//     profileLabel: "20 CRED",
//     profileName: "James Mand",
//     location: "London, UK",
//     photo: demoImg.src,
//   },
//   {
//     id: 6,
//     price: 250,
//     totalImage: 3,
//     productName: "Bimo 2012, 4 gears",
//     date: "2 days ago",
//     profilePhoto: user.src,
//     profileLabel: "20 CRED",
//     profileName: "James Mand",
//     location: "London, UK",
//     photo: demoImg.src,
//   },
//   {
//     id: 5,
//     price: 250,
//     totalImage: 3,
//     productName: "Bimo 2012, 4 gears",
//     date: "2 days ago",
//     profilePhoto: user.src,
//     profileLabel: "20 CRED",
//     profileName: "James Mand",
//     location: "London, UK",
//     photo: demoImg.src,
//   },
//   {
//     id: 6,
//     price: 250,
//     totalImage: 3,
//     productName: "Bimo 2012, 4 gears",
//     date: "2 days ago",
//     profilePhoto: user.src,
//     profileLabel: "20 CRED",
//     profileName: "James Mand",
//     location: "London, UK",
//     photo: demoImg.src,
//   },
// ];

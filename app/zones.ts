// Single source of truth for travel-fee zones. Used by the zone cards, the map,
// and the county count in the page description and footer.
export type Zone = {
  name: string;
  fee: string;
  counties: string[];
  fill: string; // map fill and card swatch
  dark: boolean; // true if map labels on this fill need to be white
};

export const ZONES: Zone[] = [
  {
    name: "Zone 1",
    fee: "No travel fee",
    counties: ["Dooly", "Pulaski", "Crisp", "Bleckley", "Wilcox", "Macon", "Houston", "Peach"],
    fill: "#bfdbfe",
    dark: false,
  },
  {
    name: "Zone 2",
    fee: "$40 travel fee",
    counties: ["Sumter", "Turner", "Dodge", "Twiggs", "Crawford", "Schley", "Lee"],
    fill: "#60a5fa",
    dark: false,
  },
  {
    name: "Zone 3",
    fee: "$75 travel fee",
    counties: ["Bibb", "Worth", "Ben Hill"],
    fill: "#1e3a8a",
    dark: true,
  },
];

export const COUNTY_COUNT = ZONES.reduce((n, z) => n + z.counties.length, 0);

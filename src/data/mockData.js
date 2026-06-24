const today = new Date();
today.setHours(0, 0, 0, 0);

function daysFromNow(days) {
  const date = new Date(today);
  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0];
}

export const initialSubscriptions = [
  {
    id: "1",
    name: "Netflix",
    price: 15.49,
    billingCycle: "Monthly",
    nextBillingDate: daysFromNow(2),
    category: "Entertainment",
  },
  {
    id: "2",
    name: "Spotify",
    price: 10.99,
    billingCycle: "Monthly",
    nextBillingDate: daysFromNow(5),
    category: "Music",
  },
  {
    id: "3",
    name: "Adobe Creative Cloud",
    price: 54.99,
    billingCycle: "Monthly",
    nextBillingDate: daysFromNow(12),
    category: "Productivity",
  },
  {
    id: "4",
    name: "iCloud+",
    price: 2.99,
    billingCycle: "Monthly",
    nextBillingDate: daysFromNow(1),
    category: "Cloud Storage",
  },
  {
    id: "5",
    name: "Notion",
    price: 96,
    billingCycle: "Yearly",
    nextBillingDate: daysFromNow(28),
    category: "Productivity",
  },
  {
    id: "6",
    name: "Peloton",
    price: 44,
    billingCycle: "Monthly",
    nextBillingDate: daysFromNow(18),
    category: "Fitness",
  },
];

export const categories = [
  "Entertainment",
  "Productivity",
  "Music",
  "Cloud Storage",
  "Fitness",
  "News",
  "Other",
];

export const billingCycles = ["Monthly", "Yearly"];

export const STORAGE_KEY = "sublytics-subscriptions";

import data from "../../data/mockWebsites";

export async function fetchWebsitesByCategory(category) {
  await new Promise((res) => setTimeout(res, 500));
  return data[category];
}

// src/utils/fetchProducts.js
export async function fetchProductsJson(path = "src\\data\\mockProductsPages.json") {
  const res = await fetch(path, { cache: "no-cache" });
  if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`);
  const contentType = res.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) {
    const text = await res.text();
    throw new Error(`Expected JSON but got ${contentType}. Preview: ${text.slice(0,300)}`);
  }
  return res.json();
}
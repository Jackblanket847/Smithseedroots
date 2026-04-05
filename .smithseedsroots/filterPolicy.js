// logical ruleset for traffic + data flow
export const filterPolicy = {
  allowedCategories: ["seeds", "vegetables", "fruit_trees"],
  defaultCategory: "seeds",
  sortRule: "name_asc"
};

export function filterProducts(products, category) {
  if (!filterPolicy.allowedCategories.includes(category)) {
    category = filterPolicy.defaultCategory;
  }
  return products
    .filter(p => p.category === category)
    .sort((a, b) => a.name.localeCompare(b.name));
}
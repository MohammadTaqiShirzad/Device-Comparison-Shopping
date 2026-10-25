// shared catalogue helpers. all catalogue data lives in db.json.

// pick a professional photo for a category from the public folder
export const imageForCategory = (category) => {
  if (category === "Phones") return "/phone.webp"
  if (category === "Laptops") return "/laptop.webp"
  return "/tablet.webp"
}

// show a number as afn money
export const formatAFN = (value) =>
  `${new Intl.NumberFormat("en-US").format(value)} AFN`

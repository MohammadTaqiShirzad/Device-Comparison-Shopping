// shared catalogue helpers. all catalogue data lives in db.json.

// pick a professional photo for a category from the public folder
export const imageForCategory = (category) => {
  if (category === "Phones") return "/images/phone.webp"
  if (category === "Laptops") return "/images/laptop.webp"
  return "/images/tablet.webp"
}

// show a number as afn money
export const formatAFN = (value) =>
  `${new Intl.NumberFormat("en-US").format(value)} AFN`

// shared catalogue helpers. the device list lives in public/db.json.

// categories offered by the filters and the device form
export const categories = ["Phones", "Laptops", "Tablets"]

// starting values for a new catalogue record
export const deviceDefaults = {
  title: "",
  category: "Phones",
  image: "",
  priceAFN: 0,
  storageGB: 0,
  memoryGB: 0,
  stock: 0,
  description: "",
}

// pick a professional photo for a category from the public folder
export const imageForCategory = (category) => {
  if (category === "Phones") return "/images/phone.webp"
  if (category === "Laptops") return "/images/laptop.webp"
  return "/images/tablet.webp"
}

// show a number as afn money
export const formatAFN = (value) =>
  `${new Intl.NumberFormat("en-US").format(value)} AFN`

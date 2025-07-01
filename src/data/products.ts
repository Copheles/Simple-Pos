export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
}

export type CartItem = Product & { quantity: number };

export interface CartSummary {
  subtotal: number;
  shippingCost: number;
  discountPercentage: number;
  taxPercentage: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Earbuds",
    price: 79.99,
    category: "Electronics",
    imageUrl:
      "https://img.drz.lazcdn.com/static/mm/p/f334671b6c86d76ba66ca93d5f953545.jpg_960x960q80.jpg_.webp",
  },
  {
    id: 2,
    name: "Stainless Steel Water Bottle",
    price: 24.95,
    category: "Home & Kitchen",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38jJfvMNty0Kjj4GA7BRnxwlAt_ybxGR9iQ&s",
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    category: "Clothing",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVdTkAP0zLxpBBD14OphglNGkwZf4bVBrWDGLscLAo_F_npzTNNemYUGsAsPtQT-xa0o&usqp=CAU",
  },
  {
    id: 4,
    name: "Smart Fitness Tracker",
    price: 89.5,
    category: "Electronics",
    imageUrl:
      "https://fitvii.com/cdn/shop/products/FitVII-HM08-SpO2-Wearable-Fitness-Tracker-with-Screen-Protector-MorePro-1681713866.jpg?v=1720606630&width=1445",
  },
  {
    id: 5,
    name: "Non-Stick Cookware Set",
    price: 149.99,
    category: "Home & Kitchen",
    imageUrl:
      "https://i5.walmartimages.com/asr/a4ff4b94-d176-4dcd-8509-abb865b2475b.b9b4f3080e2a08d66b5818c1616149e7.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },
  {
    id: 6,
    name: "Memory Foam Pillow",
    price: 39.95,
    category: "Home & Kitchen",
    imageUrl:
      "https://www.jysk.ca/media/catalog/product/w/e/wellpur-viglen-memory-foam-pillow-white.jpg?quality=80&fit=bounds&height=520&width=520&canvas=520:520",
  },
  {
    id: 7,
    name: "Fast Wireless Charger",
    price: 34.99,
    category: "Electronics",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAbOrwCAzn8RVed--J5tbtyI_ftw9Re13plg&s",
  },
  {
    id: 8,
    name: "Genuine Leather Wallet",
    price: 49.99,
    category: "Accessories",
    imageUrl:
      "https://www.judaicawebstore.com/media/catalog/product/cache/2924dcbf4775c7dc730d6a3aa7c3ac8d/l/s/ls-13543s_brown_1_1.jpg",
  },
  {
    id: 9,
    name: "Digital Air Fryer",
    price: 99.99,
    category: "Home & Kitchen",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnFx-colw5O6agCO6_5hs69iaIgucCb0QppQ&s",
  },
  {
    id: 10,
    name: "Premium Yoga Mat",
    price: 44.5,
    category: "Sports & Fitness",
    imageUrl:
      "https://www.vanbinnen.com/cdn/shop/files/love-generation-yogamat-sacred-sand-beige.jpg?v=1712068775",
  },
  {
    id: 11,
    name: "High-Speed Blender",
    price: 69.95,
    category: "Home & Kitchen",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIb606Cm8QTUkEI7Ui675eJgpMMIMidOeygA&s",
  },
  {
    id: 12,
    name: "Running Shoes",
    price: 89.99,
    category: "Footwear",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXouLJ3CVlwf_h01M6I5BzJNTwnNPcK1dzU1o3MB0-s4QIGIUp0e72Rq0Z7D1jktXC5sI&usqp=CAU",
  },
  {
    id: 13,
    name: "Mechanical Keyboard",
    price: 59.99,
    category: "Electronics",
    imageUrl:
      "https://ghostkeyboards.com/cdn/shop/files/BelleDelphineK1A1Perspnoshadow1x1.png?v=1732748802",
  },
  {
    id: 14,
    name: "Ceramic Coffee Mug",
    price: 14.99,
    category: "Home & Kitchen",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGdxBQ_Yxi3V18hbB3AcTFaER-SkSakxYan6JBdUosZmwpBiUNfdXcTIOMnLkLu4SZFhU&usqp=CAU",
  },
  {
    id: 15,
    name: "Portable Power Bank",
    price: 39.99,
    category: "Electronics",
    imageUrl:
      "https://aicdn.speedsize.com/be9d134b-a342-47d7-bd5b-bf753f6bded2/www.scosche.com/media/catalog/product/p/b/pbpi_ps1.png?speedsize=w_700",
  },
  {
    id: 16,
    name: "Slim Fit Jeans",
    price: 49.95,
    category: "Clothing",
    imageUrl:
      "https://larrimors.com/cdn/shop/files/Hudson_BlakeJeans_KDIRPT2275_Riptide_Front.jpg?v=1709597288",
  },
  {
    id: 17,
    name: "Essential Oil Diffuser",
    price: 29.5,
    category: "Home & Kitchen",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8U17-ZN8d8g7jXgz0uTRx1zI1O69sJ0fLZT3PzJfJg1RpjqiLiA2CQk1yHdU6bsP7s&usqp=CAU",
  },
  {
    id: 18,
    name: "Smart LED Bulb",
    price: 19.99,
    category: "Home & Kitchen",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6dxmCRYytb89hn51mgQoB8N4vrseTyZd0Mg&s",
  },
  {
    id: 19,
    name: "Travel Backpack",
    price: 54.99,
    category: "Accessories",
    imageUrl:
      "https://lewhisper.com/cdn/shop/products/Traveler_Backpack_khaki_02_1024_47b497c6-8213-400b-99d7-4896a3f91ce3.png?v=1533590459",
  },
  {
    id: 20,
    name: "Resistance Bands Set",
    price: 24.95,
    category: "Sports & Fitness",
    imageUrl:
      "https://ado-fitness.com/cdn/shop/products/ADO1_2048x.jpg?v=1657804451",
  },
  {
    id: 21,
    name: "Electric Toothbrush",
    price: 45.99,
    category: "Personal Care",
    imageUrl:
      "https://images.philips.com/is/image/philipsconsumer/432c0d31c51e4f6e94daadba0091acd7?$pnglarge$&wid=1250",
  },
  {
    id: 22,
    name: "Polarized Sunglasses",
    price: 39.5,
    category: "Accessories",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkypVSMJZsMiUtG7YuHUszU8crynDYuQCCYLBGnSPmPRk8fAC-zY4pEuquFDoLj8fkjs&usqp=CAU",
  },
  {
    id: 23,
    name: "1TB External SSD",
    price: 129.99,
    category: "Electronics",
    imageUrl:
      "https://gameone.ph/media/catalog/product/cache/d378a0f20f83637cdb1392af8dc032a2/l/e/lexar-1tb-sl300-usb-3.2-gen-2-portable-ssd-_lsl300001t-rnbng_-cover.jpg",
  },
  {
    id: 24,
    name: "Egyptian Cotton Sheets",
    price: 69.95,
    category: "Home & Kitchen",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAh86sYVV7CWSAw7tj12ZrLkCd1GQ5cvYgtAiXSIcLrQKJa-cwy2H3iFpUi-HpRwWI5g&usqp=CAU",
  },
  {
    id: 25,
    name: "Ergonomic Mouse",
    price: 29.99,
    category: "Electronics",
    imageUrl:
      "https://www.humanscale.com/userFiles/images/ergo_accessories/pro_click/pro_click_2.jpg",
  },
  {
    id: 26,
    name: "Insulated Lunch Box",
    price: 22.5,
    category: "Home & Kitchen",
    imageUrl:
      "https://thermos.com/cdn/shop/files/N123401006_Athleisure_Gray_Inset_wFood_PDP_efa17f83-3e20-4944-ad4a-14571b5729f6.jpg?v=1746641927&width=720",
  },
  {
    id: 27,
    name: "Adjustable Dumbbells",
    price: 149.0,
    category: "Sports & Fitness",
    imageUrl:
      "https://i5.walmartimages.com/asr/2ca41580-034b-4113-be6b-41148163f94f.ccfc5eff9cced3c1c2296e670813f5a2.png",
  },
  {
    id: 28,
    name: "Hooded Sweatshirt",
    price: 39.95,
    category: "Clothing",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbdAFCUn1oUQQX6VRISBd8w7jI6CweVc24w&s",
  },
  {
    id: 29,
    name: "Adjustable Desk Lamp",
    price: 37.99,
    category: "Home & Kitchen",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrr4nvpzamX1ylKYzqBMc_imdU9mYd9Y4axw&s",
  },
  {
    id: 30,
    name: "Smart Watch Pro",
    price: 199.99,
    category: "Electronics",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuLIAFToN1ktfFgDeNmIYuyq3jZLJEjRWHDQgCX5q0zzRCDoTEh0nxj2EU4XovYaj1ZuY&usqp=CAU",
  },
  {
    id: 31,
    name: "Ceramic Cookware Set",
    price: 179.95,
    category: "Home & Kitchen",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0dJUqZDLHL_A3j-LQcEMlJOTsQKGgH3s-Wzv7B9sL8clhOAC1aTOkhbJUdHXFrrNGGIU&usqp=CAU",
  },
  {
    id: 32,
    name: "Noise Cancelling Headphones",
    price: 229.99,
    category: "Electronics",
    imageUrl:
      "https://pandaear.com/cdn/shop/products/61HyIWIS9QL.jpg?v=1710393736",
  },
  {
    id: 33,
    name: "Yoga Block Set",
    price: 19.99,
    category: "Sports & Fitness",
    imageUrl:
      "https://cdn02.plentymarkets.com/mrt54q44tptl/item/images/10820/full/Yoga-Block-2er-Set-pink-Anzeigebild.jpg",
  },
  {
    id: 34,
    name: "Reusable Grocery Bags",
    price: 12.99,
    category: "Home & Kitchen",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkCHrdq1VOCdQFi8ZI50lZapjkmDwKhT1LEwg84uYx-ttg7mR7l_yQjwqoSsbRI5VCV-o&usqp=CAU",
  },
  {
    id: 35,
    name: "Bestselling Novel",
    price: 14.5,
    category: "Books",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdDhH2TnyIbBZBP4nGfqiumSvb2w4XkHTLQ&s",
  },
];

export default products;

// All product data - Update this file to manage all products without touching UI

export interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  images: string[];
  category: string;
  description?: string;
  inStock: boolean;
  featured?: boolean;
  discount?: number;
  sizes?: string[];
  colors?: string[];
  material?: string;
  careInstructions?: string;
}

export const products: Product[] = [
  {
    id: "1",
    title: "Semi kanchivaram Pattu Saree",
    price: "₹2599",
    originalPrice: "₹5599",
    images: [
      "/image copy 51.png", 
      "/image copy 4.png", 
    ],
    category: "Kanchipuram",
    description:
       "Sem Kanchi pattu sarees beautifully blend traditional elegance with modern comfort. Inspired by authentic Kanchipuram designs, these sarees feature rich zari borders, classic temple motifs, and elegant pallus. Made with a silk-blend fabric, they are lightweight, soft, and easy to drape, making them perfect for long wear.",
    inStock: true,
    featured: true,
    discount: 21,
    material: "semi pattu sarees with Pure Zari",
    careInstructions:
      "Dry clean only. Store in a cool, dry place wrapped in muslin cloth."
  },
  {
    id: "2",
    title: "Semi kanchi Pattu saree",
    price: "₹2549",
    originalPrice: "₹5099",
    images: [ "/image copy 47.png", "/image copy 3.png", "/image copy 6.png"],
    category: "Kanchipuram",
    description: "Sem Kanchi pattu sarees beautifully blend traditional elegance with modern comfort. Inspired by authentic Kanchipuram designs, these sarees feature rich zari borders, classic temple motifs, and elegant pallus. Made with a silk-blend fabric, they are lightweight, soft, and easy to drape, making them perfect for long wear.",
    inStock: true,
    featured: true,
    discount: 50,
    material: "semi pattu sarees",
    careInstructions: "wash by rolling machine"
  },
  {
   id: "3",
    title: "Banaras viscous silk saree",
    price: "₹1423",
    originalPrice:"₹1800",
    images: ["/image copy 52.png","/image copy 7.png", "/image copy 8.png"],
    category: "Fancy sarees",
    description: "Banaras viscose silk sarees are known for their rich look and smooth texture. Designed with traditional Banarasi motifs, intricate weaving, and elegant borders, these sarees offer a luxurious silk finish with lightweight comfort. Perfect for weddings, festive occasions, and special events, they give a graceful and timeless appeal at an affordable price.",
    inStock: true,
    featured: true,
    discount: 21,
    material: "Banaras fancy sarees",
    careInstructions: "Dry wash only"
  },
  {
    id: "4",
    title: "Banaras viscous silk saree",
    price: "₹1500",
    originalPrice:"₹1900",
    images: ["/image copy 53.png", "/image copy 9.png", "/image copy 10.png"],
    category: "Fancy sarees",
    description: "Banaras viscose silk sarees are known for their rich look and smooth texture. Designed with traditional Banarasi motifs, intricate weaving, and elegant borders, these sarees offer a luxurious silk finish with lightweight comfort. Perfect for weddings, festive occasions, and special events, they give a graceful and timeless appeal at an affordable price.",
    inStock: true,
    featured: true,
    discount: 21,
    material: "Banaras fancy sarees",
    careInstructions: "Dry wash only"
  },
  {
    id: "5",
    title: "Banaras viscous silk saree",
    price: "₹1500",
    originalPrice:"₹1900",
    images: ["/image copy 54.png","/image copy 11.png", "/image copy 12.png"],
    category: "Fancy sarees",
    description: "Banaras viscose silk sarees are known for their rich look and smooth texture. Designed with traditional Banarasi motifs, intricate weaving, and elegant borders, these sarees offer a luxurious silk finish with lightweight comfort. Perfect for weddings, festive occasions, and special events, they give a graceful and timeless appeal at an affordable price.",
    inStock: true,
    featured: true,
    discount: 21,
    material: "Banaras fancy sarees",
    careInstructions: "Dry wash only."
  },
  {
    id: "6",
    title: "Banaras Kota silk saree",
    price: "₹1800",
    originalPrice:"2250",
    images: ["/image copy 55.png","/image copy 13.png", "/image copy 14.png"],
    category: "Fancy sarees",
    description: "Banaras Kota Silk sarees combine the light, airy feel of Kota fabric with rich Banarasi designs. Featuring traditional motifs, elegant borders, and a graceful pallu, these sarees are comfortable, breathable, and easy to drape. Perfect for festive wear, weddings, and special occasions, they offer a classy look with all-day comfort.",
    inStock: true,
    featured: true,
    discount: 21,
    material: "Banaras fancy sarees",
    careInstructions: "Dry wash only."
  },
  {
    id: "7",
    title: "Banaras Kota silk saree",
    price: "₹1800",
    originalPrice:"2250",
    images: ["/image copy 56.png","/image copy 15.png", "/image copy 16.png"],
    category: "Fancy sarees",
    description: "Banaras Kota Silk sarees combine the light, airy feel of Kota fabric with rich Banarasi designs. Featuring traditional motifs, elegant borders, and a graceful pallu, these sarees are comfortable, breathable, and easy to drape. Perfect for festive wear, weddings, and special occasions, they offer a classy look with all-day comfort.",
    inStock: true,
    featured: true,
    discount: 21,
    material: "Banaras fancy sarees",
    careInstructions: "Dry wash only"
  },
  {
   id: "8",
    title: "Semi kanchi Pattu saree",
    price: "₹2500",
    originalPrice: "₹5000",
    images: ["/image copy 57.png","/image copy 17.png", "/image copy 18.png"],
    category: "Kanchipuram",
    description: "Sem Kanchi pattu sarees beautifully blend traditional elegance with modern comfort. Inspired by authentic Kanchipuram designs, these sarees feature rich zari borders, classic temple motifs, and elegant pallus. Made with a silk-blend fabric, they are lightweight, soft, and easy to drape, making them perfect for long wear.",
    inStock: true,
    featured: true,
    discount: 50,
    material: "semi pattu sarees with Pure Zari",
    careInstructions: "wash by rolling machine"
  },
  {
    id: "9",
    title: "Semi kanchi Pattu saree",
    price:"₹2500",
    originalPrice: "₹5000",
    images: ["/image copy 58.png","/image copy 19.png", "/image copy 20.png"],
    category: "Kanchipuram",
    description: "Sem Kanchi pattu sarees beautifully blend traditional elegance with modern comfort. Inspired by authentic Kanchipuram designs, these sarees feature rich zari borders, classic temple motifs, and elegant pallus. Made with a silk-blend fabric, they are lightweight, soft, and easy to drape, making them perfect for long wear.",
    inStock: true,
    featured: true,
    discount: 50,
    material: "semi pattu sarees",
    careInstructions: "wash by rolling machine"
  },
  {
    id: "10",
    title: "Banaras Kota silk saree",
    price: "₹1800",
    originalPrice:"2250",
    images: ["/image copy 59.png","/image copy 21.png", "/image copy 22.png"],
    category: "Fancy sarees",
    description: "Banaras Kota Silk sarees combine the light, airy feel of Kota fabric with rich Banarasi designs. Featuring traditional motifs, elegant borders, and a graceful pallu, these sarees are comfortable, breathable, and easy to drape. Perfect for festive wear, weddings, and special occasions, they offer a classy look with all-day comfort.",
    inStock: true,
    featured: true,
    discount: 21,
    material: "Banaras fancy sarees",
    careInstructions: "Dry wash only"
  },
  {
    id: "11",
    title: "Banaras Kota silk saree",
    price: "₹1200",
    originalPrice:"1549",
    images: ["/image copy 60.png","/image copy 23.png", "/image copy 24.png"],
    category: "Fancy sarees",
    description: "Banaras Kota Silk sarees combine the light, airy feel of Kota fabric with rich Banarasi designs. Featuring traditional motifs, elegant borders, and a graceful pallu, these sarees are comfortable, breathable, and easy to drape. Perfect for festive wear, weddings, and special occasions, they offer a classy look with all-day comfort.",
    inStock: true,
    featured: true,
    discount: 21,
    material: "Banaras fancy sarees",
    careInstructions: "Dry wash only"
  },
  {
    id: "12",
    title: "Banaras mesmerized cotton saree",
    price: "₹1200",
    originalPrice:"1549",
    images: ["/image copy 25.png", "/image copy 26.png"],
    category: "Fancy sarees",
    description: "Banaras mesmerized cotton sarees blend the richness of Banarasi designs with the comfort of soft cotton fabric. Adorned with traditional motifs, elegant borders, and a graceful pallu, these sarees are lightweight, breathable, and easy to drape. Ideal for daily wear, festive occasions, and special gatherings, they offer a classy yet comfortable look.",
    inStock: true,
    featured: true,
    discount: 21,
    material: "Banaras fancy sarees",
    careInstructions: "Dry wash only"
  },
  {
    id: "13",
    title: "Semi kanchi Pattu saree",
    price: "₹2500",
    originalPrice: "₹5000",
    images: ["/image copy 27.png", "/image copy 28.png"],
    category: "Kanchipuram",
    description: "Sem Kanchi pattu sarees beautifully blend traditional elegance with modern comfort. Inspired by authentic Kanchipuram designs, these sarees feature rich zari borders, classic temple motifs, and elegant pallus. Made with a silk-blend fabric, they are lightweight, soft, and easy to drape, making them perfect for long wear.",
    inStock: true,
    featured: true,
    discount: 50,
    material: "semi pattu sarees",
    careInstructions: "wash by rolling machine"
  },
  {
    id: "14",
    title: "Semi kanchi Pattu saree",
    price: "₹2500",
    originalPrice: "₹5000",
    images: ["/image copy 29.png", "/image copy 30.png"],
    category: "Kanchipuram",
    description: "Sem Kanchi pattu sarees beautifully blend traditional elegance with modern comfort. Inspired by authentic Kanchipuram designs, these sarees feature rich zari borders, classic temple motifs, and elegant pallus. Made with a silk-blend fabric, they are lightweight, soft, and easy to drape, making them perfect for long wear.",
    inStock: true,
    featured: true,
    discount: 50,
    material: "semi pattu sarees ",
    careInstructions: "wash by rolling machine"
  },
  {
    id: "15",
    title: "Semi kanchi Pattu saree",
    price: "₹2500",
    originalPrice: "₹5000",
    images: ["/image copy 31.png", "/image copy 32.png"],
    category: "Kanchipuram",
    description: "Sem Kanchi pattu sarees beautifully blend traditional elegance with modern comfort. Inspired by authentic Kanchipuram designs, these sarees feature rich zari borders, classic temple motifs, and elegant pallus. Made with a silk-blend fabric, they are lightweight, soft, and easy to drape, making them perfect for long wear.",
    inStock: true,
    featured: true,
    discount: 50,
    material: "semi pattu sarees ",
    careInstructions: "wash by rolling machine"
  },
  {
    id: "16",
    title: "Semi kanchi Pattu saree",
    price: "₹2500",
    originalPrice: "₹5000",
    images: ["/image copy 33.png", "/image copy 34.png"],
    category: "Kanchipuram",
    description: "Sem Kanchi pattu sarees beautifully blend traditional elegance with modern comfort. Inspired by authentic Kanchipuram designs, these sarees feature rich zari borders, classic temple motifs, and elegant pallus. Made with a silk-blend fabric, they are lightweight, soft, and easy to drape, making them perfect for long wear.",  
    inStock: true,
    featured: true,
    discount: 50,
    material: "semi pattu sarees ",
    careInstructions: "wash by rolling machine"
  },
  {
    id: "17",
    title: "Semi kanchi Pattu saree",
    price: "₹2500",
    originalPrice: "₹5000",
    images: ["/image copy 35.png", "/image copy 36.png"],
    category: "Kanchipuram",
    description: "Sem Kanchi pattu sarees beautifully blend traditional elegance with modern comfort. Inspired by authentic Kanchipuram designs, these sarees feature rich zari borders, classic temple motifs, and elegant pallus. Made with a silk-blend fabric, they are lightweight, soft, and easy to drape, making them perfect for long wear.",
    inStock: true,
    featured: true,
    discount: 50,
    material: "semi pattu sarees",
    careInstructions: "wash by rolling machine"
  },
  {
    id: "18",
    title: "Semi kanchi Pattu saree",
    price: "₹2500",
    originalPrice: "₹5000",
    images: ["/image copy 37.png", "/image copy 38.png"],
    category: "Kanchipuram",
    description: "Sem Kanchi pattu sarees beautifully blend traditional elegance with modern comfort. Inspired by authentic Kanchipuram designs, these sarees feature rich zari borders, classic temple motifs, and elegant pallus. Made with a silk-blend fabric, they are lightweight, soft, and easy to drape, making them perfect for long wear.",
    inStock: true,
    featured: true,
    discount: 50,
    material: "semi pattu sarees",
    careInstructions: "wash by rolling machine"
  },
  {
    id: "2",
    title: "Semi kanchi Pattu saree",
    price: "₹2500",
    originalPrice: "₹5000",
    images: ["/image copy 39.png", "/image copy 40.png"],
    category: "Kanchipuram",
    description: "Sem Kanchi pattu sarees beautifully blend traditional elegance with modern comfort. Inspired by authentic Kanchipuram designs, these sarees feature rich zari borders, classic temple motifs, and elegant pallus. Made with a silk-blend fabric, they are lightweight, soft, and easy to drape, making them perfect for long wear.",
    inStock: true,
    featured: true,
    discount: 50,
    material: "semi pattu sarees",
    careInstructions: "wash by rolling machine"
  },
  

 
    

];

export const categories = [
  {
    id: "kanchipuram-semi sarees",
    title: "Semi Pattu Kanchipuram",
    image: "/image copy 41.png",
    description: "Traditional handwoven sarees with semi pattu work"
  },
  {
    id: "kanchipuram pure silk",
    title: "Pure Silk Kanchipuram",
    image: "/image copy 42.png",
    description: "Kanchipuram silk sarees with rich zari work"
  },
  {
    id: "banarasi-fancy",
    title: "Fancy Banarasi",
    image: "/image copy 43.png",
    description: "Handmade Banarasi sarees with intricate designs"
  },
  {
    id: "Dharmavaeam pattu sarees",
    title: "Dharmavaeam Pattu Sarees",
    image: "/image copy 44.png",
    description: "Elegant Dharmavaeam pattu sarees with traditional motifs"
  },
 {
    id: "Heavy Zari Work Sarees",
    title: "Heavy Zari Work Sarees",
    image: "/image copy 48.png",
    description: "Elegant Heavy Zari Work Sarees with traditional motifs"
  },
  {
    id: "Silk-Cotton Blends",
    title: "Silk-Cotton Blends",
    image: "/image copy 49.png",
    description: "Elegant Silk-Cotton Blends with traditional motifs"
  },
  {
    id: "Wedding/Bridal Collection",
    title: "Wedding/Bridal Collection",
    image: "/image copy 50.png",
    description: "Wedding/Bridal Collection with traditional motifs"
  },

];

export const priceRanges = [
  {
    id: "under-3k",
    label: "Under ₹3k",
    min: 0,
    max: 3000,
    image: "/image copy 45.png"
  },
  {
    id: "3k-5k",
    label: "₹3k - ₹5k",
    min: 3000,
    max: 5000,
    image: "/image copy 46.png"
  },
  
];

export const WHATSAPP_NUMBER = "+91 9949912828";

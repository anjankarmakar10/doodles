export const BASE_URL = "https://api.spoonacular.com";
export const API_KEY = process.env.API_KEY;

export const categories = [
  {
    id: "83644",
    name: "Pizza",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
    label: "restaurants curated for pizza",
  },
  {
    id: "83649",
    name: "Biryani",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
    label: "restaurants curated for biryani",
  },
  {
    id: "83637",
    name: "Burger",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
    label: "restaurants curated for burger",
  },
  {
    id: "80462",
    name: "Momos",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
    label: "restaurant curated for momos",
  },
  {
    id: "83670",
    name: "Roll",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
    label: "restaurants curated for roll",
  },
  {
    id: "80464",
    name: "Noodles",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
    label: "restaurant curated for noodles",
  },
  {
    id: "80397",
    name: "Samosa",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
    label: "restaurants curated for samosa",
  },
  {
    id: "83647",
    name: "Chinese",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
    label: "restaurant curated for chinese",
  },
  {
    id: "83667",
    name: "Sandwich",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
    label: "restaurants curated for sandwich",
  },
  {
    id: "83656",
    name: "Cakes",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
    label: "restaurant curated for cakes",
  },
  {
    id: "80426",
    name: "Dosa",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
    label: "restaurants curated for dosa",
  },
  {
    id: "83646",
    name: "South Indian",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png",
    label: "restaurants curated for south indian",
  },
  {
    id: "80480",
    name: "Pasta",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
    label: "restaurant curated for pasta",
  },
  {
    id: "80403",
    name: "Shawarma",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
    label: "restaurant curated for shawarma",
  },
  {
    id: "83674",
    name: "Shakes",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
    label: "restaurant curated for shakes",
  },
  {
    id: "80439",
    name: "Veg",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
    label: "restaurants curated for veg",
  },
  {
    id: "80364",
    name: "Pav Bhaji",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
    label: "restaurant curated for pav bhaji",
  },
  {
    id: "80395",
    name: "Salad",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
    label: "restaurant curated for salad",
  },
  {
    id: "80450",
    name: "Kachori",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Kachori.png",
    label: "restaurant curated for kachori",
  },
  {
    id: "80358",
    name: "Pastry",
    image:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
    label: "restaurant curated for Pastry",
  },
];

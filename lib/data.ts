export interface dataTypes {
  heading: string;
  description: string;
  buttonText: string;
  template: "template1" | "template2" | "template3" | "template4";
  image: string;
}

export const dummyData: dataTypes[] = [
  {
    heading: "Nebula Poster",
    description: "Vibrant space poster featuring a stunning nebula.",
    buttonText: "Shop Now",
    template: "template4",
    image: "/image1.jpeg",
  },
  {
    heading: "Mountain Sunrise",
    description: "Breathtaking view of sun rising over misty peaks.",
    buttonText: "Shop Now",
    template: "template3",
    image: "/image2.jpeg",
  },
  {
    heading: "Minimalist Cityscape",
    description: "Clean lines depict urban skyline at twilight.",
    buttonText: "Shop Now",
    template: "template2",
    image: "/image3.jpeg",
  },
  {
    heading: "Tropical Beach",
    description: "Serene ocean view with palm trees and white sand.",
    buttonText: "Shop Now",
    template: "template1",
    image: "/image4.jpeg",
  },
  {
    heading: "Abstract Patterns",
    description: "Colorful geometric shapes in harmonious design.",
    buttonText: "Shop Now",
    template: "template4",
    image: "/image5.jpeg",
  },
  {
    heading: "Vintage World Map",
    description: "Antique-style map with intricate continental details.",
    buttonText: "Shop Now",
    template: "template3",
    image: "/image6.jpeg",
  },
  {
    heading: "Inspirational Quote",
    description: "Motivational words in elegant typography.",
    buttonText: "Shop Now",
    template: "template2",
    image: "/image7.jpeg",
  },
  {
    heading: "Cherry Blossom",
    description: "Delicate pink flowers against soft blue sky.",
    buttonText: "Shop Now",
    template: "template1",
    image: "/image8.jpeg",
  },
];

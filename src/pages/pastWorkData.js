// src/data/pastWorkData.js
import Project1 from "@/assets/DAY1/DJI_20251215134903_0010_D.jpg"

const generateImages = (baseImage) =>
  Array.from({ length: 9 }, () => baseImage)

export const pastWorkData = [
  {
    slug: "past-project-1",
    name: "Project 1 - fall 2024",
    coverImage: Project1,
    images: generateImages(Project1),
  },
  {
    slug: "past-project-2",
    name: "Project 2 - Fall 2022",
    coverImage: Project1,
    images: generateImages(Project1),
  },
  {
    slug: "past-project-3",
    name: "Project 3 - Spring 2025",
    coverImage: Project1,
    images: generateImages(Project1),
  },
  {
    slug: "past-project-4",
    name: "Project 4 - Summer 2025",
    coverImage: Project1,
    images: generateImages(Project1),
  },
  {
    slug: "past-project-5",
    name: "Project 5 - Fall 2025",
    coverImage: Project1,
    images: generateImages(Project1),
  },
  {
    slug: "past-project-6",
    name: "Project 6 - Fall 2024",
    coverImage: Project1,
    images: generateImages(Project1),
  },
]
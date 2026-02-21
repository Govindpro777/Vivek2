import Project1 from "@/assets/DAY1/project1.jpeg"
import Project2 from "@/assets/DAY2/project2.jpeg"
import Project3 from "@/assets/DAY3/project3.jpeg"
import Project4 from "@/assets/DAY4/project4.jpeg"
import Project5 from "@/assets/DAY5/project5.jpeg"
import Project6 from "@/assets/DAY6/project6.jpeg"
import Project7 from "@/assets/DAY7/project7.jpeg"

/* Auto import all images inside each DAY folder */
const day1Images = Object.values(
  import.meta.glob("@/assets/DAY1/*.jpeg", { eager: true })
).map((img) => img.default)

const day2Images = Object.values(
  import.meta.glob("@/assets/DAY2/*.jpeg", { eager: true })
).map((img) => img.default)

const day3Images = Object.values(
  import.meta.glob("@/assets/DAY3/*.jpeg", { eager: true })
).map((img) => img.default)

const day4Images = Object.values(
  import.meta.glob("@/assets/DAY4/*.jpeg", { eager: true })
).map((img) => img.default)

const day5Images = Object.values(
  import.meta.glob("@/assets/DAY5/*.jpeg", { eager: true })
).map((img) => img.default)

const day6Images = Object.values(
  import.meta.glob("@/assets/DAY6/*.jpeg", { eager: true })
).map((img) => img.default)

const day7Images = Object.values(
  import.meta.glob("@/assets/DAY7/*.jpeg", { eager: true })
).map((img) => img.default)

export const pastWorkData = [
  {
    slug: "past-project-1",
    projectno: "Project 1",
    name: "Fall 2024",
    coverImage: Project1,
    images: day1Images,
  },
  {
    slug: "past-project-2",
    projectno: "Project 2",
    name: "Fall 2022",
    coverImage: Project2,
    images: day2Images,
  },
  {
    slug: "past-project-3",
    projectno: "Project 3",
    name: "Spring 2025",
    coverImage: Project3,
    images: day3Images,
  },
  {
    slug: "past-project-4",
    projectno: "Project 4",
    name: "Summer 2025",
    coverImage: Project4,
    images: day4Images,
  },
  {
    slug: "past-project-5",
    projectno: "Project 5",
    name: "Fall 2025",
    coverImage: Project5,
    images: day5Images,
  },
  {
    slug: "past-project-6",
    projectno: "Project 6",
    name: "Fall 2024",
    coverImage: Project6,
    images: day6Images,
  },
  {
    slug: "past-project-7",
    projectno: "Project 7",
    name: "Fall 2024",
    coverImage: Project7,
    images: day7Images,
  },
]
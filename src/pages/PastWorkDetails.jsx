import { useParams } from "react-router-dom"
import { pastWorkData } from "./pastWorkData"

export default function PastWorkDetails() {
  const { slug } = useParams()
  const project = pastWorkData.find((p) => p.slug === slug)

  if (!project) return <div className="pt-32 text-center">Project not found</div>

  return (
    <section className="section-padding pt-32">
      <div className="container-custom">
        <h1 className="font-display text-4xl font-bold mb-10 text-center">
          {project.name}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={img}
                alt={`project-${index}`}
                className="w-full h-auto object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
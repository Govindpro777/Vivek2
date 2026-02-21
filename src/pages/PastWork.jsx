import { Link } from "react-router-dom"
import { pastWorkData } from "./pastWorkData"
import heroImage from "@/assets/hero-landscape.jpg"

export default function PastWork() {
  return (
    <>
      <section className="relative pt-32 pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="relative z-10 container-custom px-4 text-center">
          <span className="inline-block text-accent font-semibold uppercase tracking-wider text-sm mb-4">
            Our Work
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Past Work
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
            Explore our completed outdoor transformations
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#e9ede6]">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {pastWorkData.map((project) => (
              <div key={project.slug} className="group">

                {/* Image Card */}
                <Link
                  to={`/past-work/${project.slug}`}
                  className="relative block overflow-hidden rounded-2xl"
                >
                  <img
                    src={project.coverImage}
                    alt={project.name}
                    className="w-full h-auto object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <span className="text-accent font-semibold text-lg tracking-wide">
                      VIEW PROJECT →
                    </span>
                  </div>
                </Link>

                {/* Text Below Image */}
                <div className="text-center mt-6">
                  <p className="text-md uppercase text-primary">
                    {project.projectno}
                  </p>
                  <h3 className="font-display text-2xl text-black font-semibold">
                    {project.name}
                  </h3>
                  <p className="italic text-gray-600">
                    {project.images.length} images
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  )
}
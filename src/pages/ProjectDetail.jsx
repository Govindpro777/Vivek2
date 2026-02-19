// src/pages/ProjectDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { projectsData } from './projectsData';
import { ArrowLeft } from 'lucide-react';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="section-padding text-center">
        <h2 className="text-3xl font-bold">Project not found</h2>
        <Link to="/projects" className="text-accent hover:underline mt-4 inline-block">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="section-padding bg-background">
      <div className="container-custom mt-16">
        <div className="mb-12">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft size={18} /> Back to All Projects
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-bold">{project.name}</h1>
          <p className="text-xl text-muted-foreground mt-4">Select a category to explore</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {project.categories.map(cat => (
            <Link
              key={cat.slug}
              to={`/project/${slug}/${cat.slug}`}
              className="group relative h-[340px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={cat.cover}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="bg-accent/90 backdrop-blur-sm text-accent-foreground px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
                  View {cat.name}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                  {cat.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
import { useParams, Link } from 'react-router-dom';
import { projectsData } from './projectsData';
import { ArrowLeft } from 'lucide-react';

export default function CategoryGallery() {
	const { slug, categorySlug } = useParams();

	const project = projectsData.find(p => p.slug === slug);
	if (!project) return <div className="section-padding text-center">Project not found</div>;

	const category = project.categories.find(c => c.slug === categorySlug);
	if (!category) return <div className="section-padding text-center">Category not found</div>;

	return (
		<section className="section-padding bg-background">
			<div className="container-custom mt-16">
				<div className="mb-10">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
						<div>
							<Link
								to={`/project/${slug}`}
								className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-2"
							>
								<ArrowLeft size={18} /> Back to {project.name}
							</Link>
							<h1 className="font-display text-3xl md:text-4xl font-bold">
								{category.name}
							</h1>
						</div>
						<Link
							to="/projects"
							className="text-accent hover:underline text-sm"
						>
							← All Projects
						</Link>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{category.images.map((url, index) => (
						<div
							key={index}
							className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
						>
							<img
								src={url}
								alt={`${category.name} detail ${index + 1}`}
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							<div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
								<p className="text-white font-medium">
									Detail {index + 1}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
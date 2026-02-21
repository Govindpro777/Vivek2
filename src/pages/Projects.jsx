import { Link } from 'react-router-dom';
import { categoriesData } from './categoriesData'; // adjust path
import heroImage from '@/assets/hero-landscape.jpg';

export default function ServiceGallery() {
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
						Service Gallery
					</h1>
					<p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
						Explore our handcrafted outdoor transformations by category
					</p>
				</div>
			</section>

			<section className="section-padding">
				<div className="container-custom">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
						{categoriesData.map(category => (
							<Link
								key={category.slug}
								to={`/category/${category.slug}`}
								className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
							>
								<img
									src={category.cover}
									alt={category.name}
									className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
								<div className="absolute bottom-0 left-0 right-0 p-8">
									<h3 className="font-display text-3xl font-bold text-white mb-2">
										{category.name}
									</h3>
									<p className="text-white/80 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
										View Gallery →
									</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
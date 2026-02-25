import { useState, useEffect } from 'react';
import { CheckCircle, ArrowLeft, Phone, Mail, Calendar, MapPin, Star, Leaf, Users, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero.jpeg';

const ThankYou = () => {
	const navigate = useNavigate();
	return (
		<>
			{/* Hero Section */}
			<section className="relative pt-32 pb-20">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: `url(${heroImage})` }}
				/>
				<div className="absolute inset-0 gradient-hero" />
				<div className="relative z-10 container-custom px-4 text-center">

					<h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8 mt-24">
						Thank you
					</h1>

					<p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-4">
						Your request has been received, Our team will contact you shortly.
					</p>



				</div>
			</section>

			{/* Thank You Content */}
			<section className="section-padding pb-24">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto">
						<div className="text-center pt-12">
							<button
								onClick={() => navigate('/')}
								className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 text-lg font-semibold hover:underline"
							>
								<ArrowLeft size={24} />
								Back to Home
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ThankYou;

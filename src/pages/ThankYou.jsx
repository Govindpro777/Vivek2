import { useState, useEffect } from 'react';
import { CheckCircle, ArrowLeft, Phone, Mail, Calendar, MapPin, Star, Leaf, Users, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroImage from '@/assets/hero-landscape.jpg';

const ThankYou = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Retrieve submitted form data
		const submittedData = localStorage.getItem('submittedFormData');
		if (submittedData) {
			setFormData(JSON.parse(submittedData));
			localStorage.removeItem('submittedFormData');
		}
		setLoading(false);
	}, []);

	const handleNewRequest = () => {
		navigate('/contact');
	};

	const handleCall = () => {
		window.location.href = 'tel:+17025551234';
	};

	const handleEmail = () => {
		window.location.href = 'mailto:info@nxlevellandscaping.com';
	};

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
			</div>
		);
	}

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
					<div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
						<CheckCircle size={20} />
						<span className="font-semibold uppercase tracking-wider text-sm">Request Received</span>
					</div>

					{/* EXACT TITLE SPECIFIED */}
					<h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
						Thank you, your request has been received.
					</h1>

					{/* EXACT BODY SPECIFIED */}
					<p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
						Our team will contact you shortly.
					</p>
				</div>
			</section>

			{/* Thank You Content */}
			<section className="section-padding pb-24">
				<div className="container-custom">
					<div className="max-w-4xl mx-auto">


						{/* Submitted Info Summary */}
						{formData && (
							<div className="bg-card rounded-2xl p-8 mb-16 border border-border shadow-xl">
								<h3 className="font-display text-2xl font-bold mb-8 text-foreground text-center">
									Your Project Details
								</h3>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
									<div className="space-y-4">
										<div>
											<p className="text-sm font-medium text-muted-foreground mb-2">Name</p>
											<p className="font-semibold text-xl text-foreground">{formData.name}</p>
										</div>
										<div>
											<p className="text-sm font-medium text-muted-foreground mb-2">Phone</p>
											<p className="font-semibold text-xl text-foreground">{formData.phone}</p>
										</div>
									</div>
									<div className="space-y-4">
										<div>
											<p className="text-sm font-medium text-muted-foreground mb-2">Project Type</p>
											<p className="font-semibold text-xl text-primary">{formData.projectType}</p>
										</div>
										<div>
											<p className="text-sm font-medium text-muted-foreground mb-2">Email</p>
											<p className="font-semibold text-xl text-foreground">{formData.email}</p>
										</div>
									</div>
								</div>
							</div>
						)}

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

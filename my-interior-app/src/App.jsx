import React, { useState } from 'react';

const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="overflow-x-hidden" style={{ fontFamily: '"Inter", sans-serif' }}>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

            {/* A single style block for custom fonts and color variables */}
            <style>
                {`
                :root {
                    --primary: #0A0A0A;
                    --secondary: #E8E8E8;
                    --accent: #A0522D;
                    --background: #FAFAFA;
                }
                .font-garamond {
                    font-family: 'Cormorant Garamond', serif;
                }
                .text-primary { color: var(--primary); }
                .bg-background { background-color: var(--background); }
                .bg-accent { background-color: var(--accent); }
                `}
            </style>

            {/* Navbar */}
            <header className="fixed top-0 left-0 right-0 z-50 py-6 px-8 flex justify-between items-center bg-transparent backdrop-blur-sm">
                <div className="text-2xl font-bold font-garamond">Aura.</div>
                <nav className="hidden md:flex space-x-8">
                    <a href="#about" className="hover:text-accent transition-colors">About</a>
                    <a href="#services" className="hover:text-accent transition-colors">Services</a>
                    <a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a>
                    <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
                </nav>
                <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden">
                    <i className="fas fa-bars text-xl"></i>
                </button>
            </header>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-40 bg-white transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col justify-center items-center space-y-8 text-2xl`}>
                <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-3xl">&times;</button>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">About</a>
                <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">Services</a>
                <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">Portfolio</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-accent transition-colors">Contact</a>
            </div>

            {/* 1. Hero Section */}
            <section id="hero" className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center md:gap-x-12 px-8 md:px-16 pt-24 md:pt-0 bg-background">
                <div className="md:w-full md:p-12 mb-12 md:mb-0">
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 font-garamond">
                        Redefining Spaces, Defining You.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
                        We craft bespoke interior designs that blend artistic vision with functional living, turning your space into a personal sanctuary.
                    </p>
                    <a href="#contact" className="bg-accent text-white px-8 py-4 rounded-full font-medium transition-transform transform hover:scale-105 inline-block shadow-md">Start a Project</a>
                </div>
                <div className="relative w-full h-96 md:h-full">
                    <img src="https://placehold.co/900x1200/E8E8E8/0A0A0A?text=AURA+DESIGN" alt="A clean, modern kitchen interior" className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg transform -rotate-1 skew-y-1 md:skew-y-0 md:skew-x-1" />
                </div>
            </section>

            {/* 2. About Us */}
            <section id="about" className="py-24 px-8 md:px-16 bg-background">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <img src="https://placehold.co/1000x700/E8E8E8/0A0A0A?text=Our+Story" alt="A bright, airy living room with stylish furniture" className="w-full h-auto object-cover rounded-xl shadow-lg" />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl font-semibold mb-6 font-garamond">Driven by a Passion for Thoughtful Design.</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            At Aura, we believe that design is not just about aesthetics—it's about creating an atmosphere. Our team of passionate designers works closely with you to understand your lifestyle, dreams, and aspirations. From concept to completion, we meticulously craft spaces that tell your unique story.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our approach is collaborative and transparent, ensuring a seamless and enjoyable process. We're committed to delivering designs that are not only beautiful but also functional and timeless.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Services */}
            <section id="services" className="py-24 px-8 md:px-16 bg-gray-100">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold mb-4 font-garamond">Our Expertise</h2>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        We offer a full suite of services to transform any space, big or small.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Service Card 1 */}
                    <div className="flex flex-col items-center text-center p-8 rounded-xl shadow-md bg-white transition-transform hover:translate-y-[-5px] hover:shadow-lg">
                        <div className="w-16 h-16 mb-6 flex items-center justify-center">
                            <i className="fas fa-home text-4xl text-gray-600"></i>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 font-garamond">Residential Design</h3>
                        <p className="text-gray-600">From single-room makeovers to full-home renovations, we create personalized sanctuaries.</p>
                    </div>
                    {/* Service Card 2 */}
                    <div className="flex flex-col items-center text-center p-8 rounded-xl shadow-md bg-white transition-transform hover:translate-y-[-5px] hover:shadow-lg">
                        <div className="w-16 h-16 mb-6 flex items-center justify-center">
                            <i className="fas fa-building text-4xl text-gray-600"></i>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 font-garamond">Commercial Spaces</h3>
                        <p className="text-gray-600">Designing innovative and functional workspaces that inspire productivity and brand identity.</p>
                    </div>
                    {/* Service Card 3 */}
                    <div className="flex flex-col items-center text-center p-8 rounded-xl shadow-md bg-white transition-transform hover:translate-y-[-5px] hover:shadow-lg">
                        <div className="w-16 h-16 mb-6 flex items-center justify-center">
                            <i className="fas fa-palette text-4xl text-gray-600"></i>
                        </div>
                        <h3 className="text-2xl font-semibold mb-2 font-garamond">Styling & Consultation</h3>
                        <p className="text-gray-600">Expert guidance on furniture selection, color palettes, and decor for a polished look.</p>
                    </div>
                </div>
            </section>

            {/* 4. Portfolio Showcase */}
            <section id="portfolio" className="py-24 px-8 md:px-16 bg-background">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold mb-4 font-garamond">Our Latest Work</h2>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        A selection of our most recent projects, blending form and function to perfection.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Project 1 */}
                    <div className="relative group rounded-xl overflow-hidden shadow-lg">
                        <img src="https://placehold.co/800x600/E8E8E8/0A0A0A?text=Project+1" alt="A spacious living room with natural light" className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-xl font-bold font-garamond">Modern Loft</p>
                        </div>
                    </div>
                    {/* Project 2 */}
                    <div className="relative group rounded-xl overflow-hidden shadow-lg">
                        <img src="https://placehold.co/800x1200/E8E8E8/0A0A0A?text=Project+2" alt="A cozy bedroom with a large window" className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-xl font-bold font-garamond">Minimalist Bedroom</p>
                        </div>
                    </div>
                    {/* Project 3 */}
                    <div className="relative group rounded-xl overflow-hidden shadow-lg">
                        <img src="https://placehold.co/800x600/E8E8E8/0A0A0A?text=Project+3" alt="A modern dining area" className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-xl font-bold font-garamond">Industrial Dining</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. The Process */}
            <section id="process" className="py-24 px-8 md:px-16 bg-background">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-semibold mb-4 font-garamond">Our Creative Process</h2>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        A simple, transparent journey from idea to your dream space.
                    </p>
                </div>
                <div className="relative flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
                    {/* Step 1 */}
                    <div className="relative flex-1 text-center p-8 rounded-xl border border-gray-200">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                            <span className="text-5xl text-accent font-bold font-garamond">01</span>
                        </div>
                        <h3 className="text-2xl font-semibold mt-6 mb-2 font-garamond">Discovery & Concept</h3>
                        <p className="text-gray-600">We begin with a deep dive into your vision, needs, and lifestyle to create a tailored concept.</p>
                    </div>
                    {/* Step 2 */}
                    <div className="relative flex-1 text-center p-8 rounded-xl border border-gray-200">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                            <span className="text-5xl text-accent font-bold font-garamond">02</span>
                        </div>
                        <h3 className="text-2xl font-semibold mt-6 mb-2 font-garamond">Design & Refinement</h3>
                        <p className="text-gray-600">We present detailed designs, material samples, and 3D renderings for your feedback and approval.</p>
                    </div>
                    {/* Step 3 */}
                    <div className="relative flex-1 text-center p-8 rounded-xl border border-gray-200">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">
                            <span className="text-5xl text-accent font-bold font-garamond">03</span>
                        </div>
                        <h3 className="text-2xl font-semibold mt-6 mb-2 font-garamond">Execution & Installation</h3>
                        <p className="text-gray-600">Our team manages the entire process, ensuring every detail is executed to perfection.</p>
                    </div>
                </div>
            </section>

            {/* 6. Testimonials */}
            <section id="testimonials" className="py-24 px-8 md:px-16 bg-gray-100 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-semibold mb-12 font-garamond">What Our Clients Say</h2>
                    <div className="p-8 rounded-xl shadow-lg bg-white">
                        <blockquote className="text-2xl md:text-3xl italic text-gray-800 leading-relaxed mb-6 font-garamond">
                            “Aura transformed our house into a home we never want to leave. Their vision and attention to detail were simply unmatched. We are beyond thrilled with the results.”
                        </blockquote>
                        <div className="flex items-center justify-center space-x-4">
                            <img src="https://placehold.co/60x60/E8E8E8/0A0A0A?text=👤" alt="Client's photo" className="w-16 h-16 rounded-full object-cover" />
                            <div>
                                <p className="font-bold text-lg">Jane Doe</p>
                                <p className="text-sm text-gray-500">Homeowner, New York</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Contact & Footer */}
            <section id="contact" className="py-24 px-8 md:px-16 bg-background">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-4xl font-semibold mb-6 font-garamond">Ready to Start a Project?</h2>
                        <p className="text-lg text-gray-700 mb-8">
                            Let's discuss how we can bring your vision to life. Fill out the form below or reach out to us directly.
                        </p>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-3"></textarea>
                            </div>
                            <button type="submit" className="bg-accent text-white px-8 py-4 rounded-full font-medium transition-transform transform hover:scale-105 w-full md:w-auto shadow-md">Send Message</button>
                        </form>
                    </div>
                    <div className="md:text-right">
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold mb-2 font-garamond">Get in Touch</h3>
                            <p className="text-gray-700">info@auradesign.com</p>
                            <p className="text-gray-700">+1 (555) 123-4567</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-4 font-garamond">Follow Us</h3>
                            <div className="flex md:justify-end space-x-6 text-gray-600 text-xl">
                                <a href="#" className="hover:text-accent transition-colors"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="hover:text-accent transition-colors"><i className="fab fa-pinterest"></i></a>
                                <a href="#" className="hover:text-accent transition-colors"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <footer className="text-center py-8 text-sm text-gray-500 bg-gray-100">
                <p>&copy; 2024 Aura. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default App;
import React from "react";
import banner from "../assets/banner-hero.jpg";
import profile from "../assets/hero-profile.png";

function Home() {
	return (
		<>
			<div className="hero min-h-screen" style={{ backgroundImage: `url( ${banner} )` }}>
				<div className="hero-overlay bg-opacity-60"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<div className="m-auto bg-neutral blob" style={{ backgroundImage: `url( ${profile} )` }}></div>
						<h1 className="mb-5 text-5xl font-bold">Hello there</h1>
						<p className="mb-5">
							i'm Lucas Rodriguez. <br /> FrontEnd developer since 2007. <br /> From Buenos Aires Argentina.
						</p>
						<button className="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;

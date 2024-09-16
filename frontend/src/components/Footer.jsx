const Footer = () => {
	return (
		<footer className="py-6 bg-black text-gray-400 border-t border-gray-800 md:px-8 md:py-0">
			<div className="flex flex-col items-center justify-start gap-0 md:h-16 md:flex-row md:gap-4">
				<p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
					Built by{" "}
					<a
						href="https://enrique-spinelli-port.vercel.app"
						target="_blank"
						className="font-medium underline underline-offset-4"
					>
						EJS Coder - Enrique Javier Spinelli
					</a>
					.
				</p>
				<p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
					The source code is available on{" "}
					<a
						href="https://github.com/Enrique1311"
						target="_blank"
						rel="noreferrer"
						className="font-medium underline underline-offset-4"
					>
						GitHub
					</a>
					.
				</p>
			</div>
		</footer>
	);
};
export default Footer;

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import photo from 'assets/images/marcelo-mesquita.jpg';
import testese from 'assets/images/projects/teste-se.jpg';
import drumtab from 'assets/images/projects/drumtab.jpg';
import ouija from 'assets/images/projects/ouija.png';
import { profile, about, experience, education, skills, projects, interests } from 'data/resume';

const projectImages = { 'teste-se': testese, drumtab, ouija };

const sections = [
	{ id: 'sobre', label: 'Sobre' },
	{ id: 'experiencia', label: 'Experiência' },
	{ id: 'stack', label: 'Stack' },
	{ id: 'projetos', label: 'Projetos' },
	{ id: 'interesses', label: 'Interesses' },
];

// Destaca no menu a seção que está visível na tela.
function useActiveSection() {
	const [active, setActive] = useState(sections[0].id);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				});
			},
			{ rootMargin: '-45% 0px -50% 0px' },
		);

		sections.forEach(({ id }) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return active;
}

function Period({ start, end }) {
	return (
		<span className='period'>
			{start} – {end}
		</span>
	);
}

export default function Home() {
	const active = useActiveSection();

	return (
		<>
			<a href='#conteudo' className='skip'>Pular para o conteúdo</a>

			<nav className='topbar' aria-label='Seções'>
				<div className='container topbar-inner'>
					<a href='#topo' className='brand'>{profile.name}</a>
					<ul>
						{sections.map(({ id, label }) => (
							<li key={id}>
								<a href={`#${id}`} aria-current={active === id ? 'true' : undefined}>{label}</a>
							</li>
						))}
					</ul>
				</div>
			</nav>

			<header id='topo' className='container hero'>
				<Image src={photo} alt={profile.name} width={128} height={128} className='hero-photo' priority />
				<div>
					<h1>{profile.name}</h1>
					<p className='hero-role'>
						<strong>{profile.role}</strong> · {profile.location}
					</p>
					<div className='hero-actions'>
						<a href={`mailto:${profile.email}`} className='btn btn-primary'>
							<FaEnvelope aria-hidden /> Fale comigo
						</a>
						<a href={profile.links.linkedin} target='_blank' rel='noopener noreferrer' className='btn'>
							<FaLinkedin aria-hidden /> LinkedIn
						</a>
						<a href={profile.links.github} target='_blank' rel='noopener noreferrer' className='btn'>
							<FaGithub aria-hidden /> GitHub
						</a>
					</div>
				</div>
			</header>

			<main id='conteudo' className='container'>
				<section id='sobre'>
					<h2>Sobre</h2>
					<div className='prose'>
						{about.map((text) => <p key={text}>{text}</p>)}
					</div>
				</section>

				<section id='experiencia'>
					<h2>Experiência</h2>
					<ol className='timeline'>
						{experience.map((job) => (
							<li key={job.org}>
								<Period start={job.start} end={job.end} />
								<div>
									<h3>{job.role}</h3>
									<p className='org'>{job.org}</p>
									{job.items.map((item) => <p key={item}>{item}</p>)}
								</div>
							</li>
						))}
					</ol>

					<h2 className='subhead'>Formação</h2>
					<ol className='timeline'>
						{education.map((item) => (
							<li key={item.course}>
								<Period start={item.start} end={item.end} />
								<div>
									<h3>{item.course}</h3>
									<p className='org'>{item.org}</p>
								</div>
							</li>
						))}
					</ol>
				</section>

				<section id='stack'>
					<h2>Stack</h2>
					<div className='skills'>
						{skills.map(({ group, items }) => (
							<div key={group}>
								<h3>{group}</h3>
								<ul className='chips'>
									{items.map(({ name, main }) => (
										<li key={name} className={main ? 'chip chip-main' : 'chip'}>{name}</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<p className='legend'><span className='chip chip-main'>Destaque</span> tecnologias que mais uso no dia a dia</p>
				</section>

				<section id='projetos'>
					<h2>Projetos</h2>
					<div className='projects'>
						{projects.map((project) => (
							<a key={project.name} href={project.url} target='_blank' rel='noopener noreferrer' className='project'>
								<Image src={projectImages[project.image]} alt='' sizes='(max-width: 720px) 100vw, 260px' className='project-image' />
								<h3>
									{project.name} <FaArrowUpRightFromSquare aria-hidden className='project-arrow' />
								</h3>
								<p>{project.description}</p>
								<ul className='tags'>
									{project.stack.map((tech) => <li key={tech}>{tech}</li>)}
								</ul>
							</a>
						))}
					</div>
				</section>

				<section id='interesses'>
					<h2>Interesses</h2>
					<div className='prose'>
						{interests.map((text) => <p key={text}>{text}</p>)}
					</div>
				</section>
			</main>

			<footer className='container footer'>
				<p>
					<a href={`mailto:${profile.email}`}>{profile.email}</a>
				</p>
				<div className='footer-links'>
					<a href={profile.links.github} target='_blank' rel='noopener noreferrer' aria-label='GitHub'><FaGithub /></a>
					<a href={profile.links.linkedin} target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'><FaLinkedin /></a>
					<a href={profile.links.x} target='_blank' rel='noopener noreferrer' aria-label='X (Twitter)'><FaXTwitter /></a>
					<a href={`mailto:${profile.email}`} aria-label='E-mail'><FaEnvelope /></a>
				</div>
			</footer>
		</>
	);
}

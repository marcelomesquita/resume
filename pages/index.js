import Image from 'next/image';
import { IoBriefcase, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoFingerPrint, IoEasel, IoBook, IoSchool, IoCube, IoLogoAngular, IoLogoDocker, IoLogoFirebase, IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoSass, IoLogoReact, IoLogoPython, IoLogoLaravel, IoLogoTux, IoLogoWordpress, IoLogoVue, IoMail } from 'react-icons/io5';
import { FaGitAlt, FaJava, FaPhp } from 'react-icons/fa';
import profile from '/assets/images/marcelo-mesquita.jpg';
import testese from '/assets/images/projects/teste-se.jpg';
import drumtab from '/assets/images/projects/drumtab.jpg';

export default function Home() {
	return (
		<>
			<header className='d-flex flex-column p-3 text-white bg-dark'>
				<div className='mt-5 text-center'>
					<a href='#sobre' className='text-decoration-none'>
						<Image src={profile} alt='Marcelo Mesquita' width='200' height='200' className='avatar rounded-circle' />
						<h1 className='h3 text-white'>Marcelo Mesquita</h1>
					</a>
					<h2 className='h6 text-white'>Desenvolvedor Full Stack</h2>
					<p className='text-muted'>Brasília - DF, Brasil</p>
				</div>

				<ul id='navbar' className='nav nav-pills flex-column mb-auto'>
					<li className='nav-item'>
						<a href='#sobre' className='nav-link'>
							<IoFingerPrint size={18} /> Sobre
						</a>
					</li>
					<li className='nav-item'>
						<a href='#experiencia' className='nav-link'>
							<IoBriefcase size={18} /> Experiência
						</a>
					</li>
					<li className='nav-item'>
						<a href='#educacao' className='nav-link'>
							<IoSchool size={18} /> Educação
						</a>
					</li>
					<li className='nav-item'>
						<a href='#conhecimentos' className='nav-link'>
							<IoBook size={18} /> Conhecimentos
						</a>
					</li>
					<li className='nav-item'>
						<a href='#projetos' className='nav-link'>
							<IoEasel size={18} /> Projetos
						</a>
					</li>
					<li className='nav-item'>
						<a href='#interesses' className='nav-link'>
							<IoCube size={18} /> Interesses
						</a>
					</li>
				</ul>

				<div className='mt-5 d-flex justify-content-evenly'>
					<a href='https://twitter.com/marcelomesquita' target='_blank' className='fs-4 text-white text-decoration-none'><IoLogoTwitter /></a>
					<a href='https://github.com/marcelomesquita' target='_blank' className='fs-4 text-white text-decoration-none'><IoLogoGithub /></a>
					<a href='https://www.linkedin.com/in/marcelomesquita/' target='_blank' className='fs-4 text-white text-decoration-none'><IoLogoLinkedin /></a>
					<a href='mailto:contato@marcelomesquita.com' target='_blank' className='fs-4 text-white text-decoration-none'><IoMail /></a>
				</div>
			</header>

			<main data-bs-spy='scroll' data-bs-target='#navbar' data-bs-offset='100' tabIndex='0'>
				<section id='sobre'>
					<div className='container'>
						<h2 className='display-4'>Sobre</h2>
						<p className='lead'>Trabalho com desenvolvimento de sistemas a mais de dez anos, me sinto a vontade tanto com frontend quanto com backend além de trabalhar com banco de dados relacional e noSQL. Já estou familiarizado com desenvolvimento ágil. Sou organizado e quieto, sei me comunicar quando necessário mas prefiro tentar me virar sozinho antes de pedir ajuda.</p>
						<p className='lead'>Atualmente estou bem interessado pelo <a href='https://nextjs.org/' target='_blank'>NextJS</a> pela simplicidade de programação do front e possibilidade de processamento no servidor com a mesma linguagem, com a vantagem de carregamento das páginas, praticamente, estáticas.</p>
					</div>
				</section>

				<section id='experiencia'>
					<div className='container'>
						<h2 className='display-4'>Experiência</h2>
						<div className='d-flex flex-column gap-5 my-5'>
							<div>
								<h3 className='display-5 text-primary'>Analista de Tecnologia</h3>
								<div className='d-flex'>
									<h4 className='display-6 text-secondary'>BB Tecnologia e Serviços</h4>
									<span className='ms-auto text-danger'>desde 2015</span>
								</div>
								<p>Desenvolvimento de sistemas em projetos ágeis nas linguagens HTML, CSS,JavaScript, TypeScript, Angular, PHP, Java e PostgreSQL utilizando DevOps.</p>
								<p>Analise de dados para processamento com Python, PostgreSQL e SQLServer utilizando databricks.</p>
							</div>
							<div>
								<h3 className='display-5 text-primary'>Analista de Projetos</h3>
								<div className='d-flex'>
									<h4 className='display-6 text-secondary'>Província Marista Centro-Norte</h4>
									<span className='ms-auto text-danger'>2013 a 2015</span>
								</div>
								<p>Elaboração e execução de projetos web com HTML, JavaScript, CSS, PHP e MySQL.</p>
								<p>Criacão de temas e plugins para WordPress. Análise de mídias sociais.</p>
							</div>
							<div>
								<h3 className='display-5 text-primary'>Assessor Técnico</h3>
								<div className='d-flex'>
									<h4 className='display-6 text-secondary'>Ministério da Cultura</h4>
									<span className='ms-auto text-danger'>2007 a 2013</span>
								</div>
								<p>Elaboração e execução de projetos web com HTML, JavaScript, CSS, PHP e MySQL.</p>
								<p>Criação de temas e plugins para WordPress.</p>
							</div>
						</div>
					</div>
				</section>

				<section id='educacao'>
					<div className='container'>
						<h2 className='display-4'>Educação</h2>
						<div className='d-flex flex-column gap-5 my-5'>
							<div>
								<h3 className='display-5 text-primary'>Desenvolvimento de Sistemas para a Web</h3>
								<div className='d-flex'>
									<h4 className='display-6 text-secondary'>UnICESP</h4>
									<span className='ms-auto text-danger'>2003 a 2005</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id='conhecimentos'>
					<div className='container'>
						<h2 className='display-4'>Conhecimentos</h2>
						<div className='row row-cols-1 row-cols-sm-2 g-3 my-5'>
							<div className='col'>
								<h3 className='display-6'>Marcação</h3>
								<div className='d-flex flex-column gap-3'>
									<div>
										<IoLogoHtml5 title='HTML5' className='fs-3' />
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-95' role='progressbar'></div>
										</div>
									</div>
									<div>
										<IoLogoCss3 title='CSS3' className='fs-3' />
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-90' role='progressbar'></div>
										</div>
									</div>
									<div>
										<IoLogoSass title='SASS' className='fs-3' />
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-80' role='progressbar'></div>
										</div>
									</div>
								</div>
							</div>
							<div className='col'>
								<h3 className='display-6'>Programação</h3>
								<div className='d-flex flex-column gap-3'>
									<div>
										<IoLogoJavascript title='Javascript' className='fs-3' />
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-85' role='progressbar'></div>
										</div>
									</div>
									<div>
										<IoLogoAngular title='Angular' className='fs-3' />
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-70' role='progressbar'></div>
										</div>
									</div>
									<div>
										<IoLogoReact title='ReactJs' className='fs-3' />
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-75' role='progressbar'></div>
										</div>
									</div>
									<div>
										<FaPhp title='PHP' className='fs-3' />
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-80' role='progressbar'></div>
										</div>
									</div>
									<div>
										<IoLogoLaravel title='Laravel' className='fs-3' />
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-75' role='progressbar'></div>
										</div>
									</div>
									<div>
										<IoLogoPython title='Python' className='fs-3' />
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-25' role='progressbar'></div>
										</div>
									</div>
									<div>
										<FaJava title='Java' className='fs-3' />
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-40' role='progressbar'></div>
										</div>
									</div>
								</div>
							</div>
							<div className='col'>
								<h3 className='display-6'>Banco de dados</h3>
								<div className='d-flex flex-column gap-3'>
									<div>
										MySQL
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-90' role='progressbar'></div>
										</div>
									</div>
									<div>
										PostgreSQL
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-95' role='progressbar'></div>
										</div>
									</div>
									<div>
										NoSQL
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-60' role='progressbar'></div>
										</div>
									</div>
								</div>
							</div>
							<div className='col'>
								<h3 className='display-6'>Outros</h3>
								<div className='d-flex flex-column gap-3'>
									<div>
										<IoLogoFirebase title='Firebase' className='fs-3' />
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-55' role='progressbar'></div>
										</div>
									</div>
									<div>
										<IoLogoDocker title='Docker' className='fs-3' />
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-65' role='progressbar'></div>
										</div>
									</div>
									<div>
										<FaGitAlt title='Git' className='fs-3' />
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-75' role='progressbar'></div>
										</div>
									</div>
									<div>
										<IoLogoTux title='Linux' className='fs-3' />
										<div className='progress' style={{height: '2px'}}>
											<div className='progress-bar bg-info w-70' role='progressbar'></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id='projetos'>
					<div className='container'>
						<h2 className='display-4'>Projetos</h2>
						<div className='row row-cols-1 row-cols-sm-2 g-3'>
							<div className='col'>
								<div className='card shadow-sm'>
									<div className='card-body'>
										<Image src={testese} alt='Teste-se' width='600' height='300' className='bd-placeholder-img card-img-top' />
										<a href='https://teste-se.com' target='_blank' className='text-decoration-none'><h5 className="card-title">Teste-se</h5></a>
										<p className='card-text'>Sistema para criação e realização de provas com a possibilidade do cliente montar uma prova apenas com os conteúdos desejados.</p>
										<div className='d-flex gap-2 text-muted fs-3'>
											<IoLogoHtml5 title='HTML5' />
											<IoLogoCss3 title='CSS3' />
											<IoLogoJavascript title='Javascript' />
											<FaPhp title='PHP' />
											<IoLogoWordpress title='WordPress' />
										</div>
									</div>
								</div>
							</div>
							<div className='col'>
								<div className='card shadow-sm'>
									<div className='card-body'>
										<Image src={drumtab} alt='Drumtab' width='600' height='300' className='' />
										<a href='https://drumtab.club' target='_blank' className='text-decoration-none'><h5 className="card-title">Drumtab</h5></a>
										<p className='card-text'>Esse projeto surgiu com uma forma simples de cadastrar tablaturas de bateria, útil para descobrir como tocar músicas complexas.</p>
										<div className='d-flex gap-2 text-muted fs-3'>
											<IoLogoHtml5 title='HTML5' />
											<IoLogoSass title='Sass' />
											<IoLogoReact title='ReactJs' />
											<IoLogoFirebase title='Firebase' />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section id='interesses'>
						<div className='container'>
						<h2 className='display-4'>Interesses</h2>
						<p className='lead'>Gosto de andar de skate, tocar bateria e desenhar apesar de não ser bom em nenhuma dessas coisas.</p>
						<p className='lead'>Sou motoqueiro, acredito que a moto não serve apenas como meio de transporte mas como terapia também... ela ajuda a relaxar.</p>
						<p className='lead'>Adoro músicas e estou sempre a procura de algo novo para ouvir.</p>
					</div>
				</section>
			</main>
		</>
	);
}

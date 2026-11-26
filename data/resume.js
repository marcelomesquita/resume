// Conteúdo do currículo. Edite aqui para atualizar o site sem mexer no layout.

export const profile = {
	name: 'Marcelo Mesquita',
	role: 'Desenvolvedor Full Stack',
	location: 'Brasília, DF',
	email: 'contato@marcelomesquita.com',
	links: {
		github: 'https://github.com/marcelomesquita',
		linkedin: 'https://www.linkedin.com/in/marcelomesquita/',
		x: 'https://x.com/marcelomesquita',
	},
};

export const about = [
	'Desenvolvo sistemas há mais de dez anos e fico à vontade tanto no frontend quanto no backend, trabalhando com bancos de dados relacionais e NoSQL. Tenho experiência com desenvolvimento ágil, sou organizado e gosto de resolver problemas com autonomia, sabendo pedir ajuda quando é a hora.',
	'Hoje meu foco é o Next.js: a simplicidade de programar o front, a possibilidade de processar no servidor com a mesma linguagem e páginas que carregam praticamente estáticas.',
];

export const experience = [
	{
		role: 'Analista de Tecnologia',
		org: 'BB Tecnologia e Serviços',
		start: '2015',
		end: 'hoje',
		items: [
			'Desenvolvimento de sistemas em projetos ágeis com HTML, CSS, JavaScript, TypeScript, Angular, PHP, Java e PostgreSQL, utilizando práticas DevOps.',
			'Análise e processamento de dados com Python, PostgreSQL e SQL Server no Databricks.',
		],
	},
	{
		role: 'Analista de Projetos',
		org: 'Província Marista Centro-Norte',
		start: '2013',
		end: '2015',
		items: [
			'Elaboração e execução de projetos web com HTML, JavaScript, CSS, PHP e MySQL.',
			'Criação de temas e plugins para WordPress. Análise de mídias sociais.',
		],
	},
	{
		role: 'Assessor Técnico',
		org: 'Ministério da Cultura',
		start: '2007',
		end: '2013',
		items: [
			'Elaboração e execução de projetos web com HTML, JavaScript, CSS, PHP e MySQL.',
			'Criação de temas e plugins para WordPress.',
		],
	},
];

export const education = [
	{
		course: 'Desenvolvimento de Sistemas para a Web',
		org: 'UnICESP',
		start: '2003',
		end: '2005',
	},
];

// `main: true` destaca as tecnologias que mais uso no dia a dia.
export const skills = [
	{
		group: 'Frontend',
		items: [
			{ name: 'React', main: true },
			{ name: 'Next.js', main: true },
			{ name: 'Angular' },
			{ name: 'TypeScript' },
			{ name: 'JavaScript', main: true },
			{ name: 'HTML e CSS', main: true },
			{ name: 'Sass' },
		],
	},
	{
		group: 'Backend',
		items: [{ name: 'PHP', main: true }, { name: 'Laravel' }, { name: 'Java' }, { name: 'Python' }],
	},
	{
		group: 'Dados',
		items: [{ name: 'PostgreSQL', main: true }, { name: 'MySQL', main: true }, { name: 'NoSQL' }, { name: 'Databricks' }],
	},
	{
		group: 'Ferramentas',
		items: [{ name: 'Git' }, { name: 'Docker' }, { name: 'Linux' }, { name: 'Firebase' }],
	},
];

export const projects = [
	{
		name: 'Teste-se',
		url: 'https://teste-se.com',
		image: 'teste-se',
		description: 'Sistema para criar e aplicar provas, em que o cliente monta cada prova só com os conteúdos que deseja.',
		stack: ['PHP', 'WordPress', 'JavaScript'],
	},
	{
		name: 'Drumtab',
		url: 'https://drumtab.club',
		image: 'drumtab',
		description: 'Uma forma simples de cadastrar tablaturas de bateria, útil para descobrir como tocar músicas complexas.',
		stack: ['React', 'Firebase', 'Sass'],
	},
	{
		name: 'Ouija',
		url: 'https://www.ouija.com.br',
		image: 'ouija',
		description: 'Inspirada no antigo jogo Lúcifer, uma versão moderna da tábua ouija que gera caracteres aleatórios que talvez façam sentido.',
		stack: ['React', 'Sass'],
	},
];

export const interests = [
	'Gosto de andar de skate, tocar bateria e desenhar, apesar de não ser bom em nenhuma dessas coisas.',
	'Sou motociclista e acredito que a moto não é só meio de transporte, é terapia também: ajuda a relaxar.',
	'Adoro música e estou sempre à procura de algo novo para ouvir.',
];

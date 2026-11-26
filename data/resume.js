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

export const headline =
	'Mais de 15 anos criando sistemas web, do banco de dados à interface. Hoje no BB Tecnologia e Serviços, com Angular, Java, PHP e análise de dados.';

export const about = [
	'Comecei com web em 2007 e passei por governo, terceiro setor e, a partir de 2015, a empresa de tecnologia do conglomerado Banco do Brasil. Nesse caminho construí sites, sistemas corporativos e rotinas de análise de dados, sempre transitando entre frontend, backend e banco de dados.',
	'Trabalho bem em times ágeis, sou organizado e tenho autonomia para destravar problemas sozinho, sem deixar de envolver o time quando faz diferença. Hoje estudo e aplico Next.js e React nos meus projetos pessoais: renderização no servidor, páginas rápidas e uma única linguagem do começo ao fim.',
];

export const experience = [
	{
		role: 'Analista de Tecnologia',
		org: 'BB Tecnologia e Serviços',
		start: '2015',
		end: 'hoje',
		items: [
			'Desenvolvo e mantenho sistemas corporativos em times ágeis, com Angular e TypeScript no frontend e Java, PHP e PostgreSQL no backend, seguindo práticas de DevOps.',
			'Atuo também com análise e processamento de dados no Databricks, usando Python, PostgreSQL e SQL Server.',
		],
	},
	{
		role: 'Analista de Projetos',
		org: 'Província Marista Centro-Norte',
		start: '2013',
		end: '2015',
		items: [
			'Planejei e entreguei projetos web de ponta a ponta com PHP, MySQL e JavaScript.',
			'Desenvolvi temas e plugins sob medida para WordPress e acompanhei o desempenho da instituição nas redes sociais.',
		],
	},
	{
		role: 'Assessor Técnico',
		org: 'Ministério da Cultura',
		start: '2007',
		end: '2013',
		items: [
			'Desenvolvi e mantive sites e sistemas web com PHP, MySQL e JavaScript.',
			'Criei temas e plugins sob medida para WordPress.',
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
	{
		group: 'Práticas',
		items: [{ name: 'Desenvolvimento ágil', main: true }, { name: 'DevOps' }, { name: 'Análise de dados' }],
	},
];

export const projects = [
	{
		name: 'Teste-se',
		url: 'https://teste-se.com',
		image: 'teste-se',
		description: 'Plataforma de provas personalizadas: o aluno escolhe os conteúdos, a prova é montada sob medida e o desempenho fica registrado.',
		stack: ['PHP', 'WordPress', 'JavaScript'],
	},
	{
		name: 'Drumtab',
		url: 'https://drumtab.club',
		image: 'drumtab',
		description: 'Editor e acervo de tablaturas de bateria, feito para descobrir como tocar músicas complexas.',
		stack: ['React', 'Firebase', 'Sass'],
	},
	{
		name: 'Ouija',
		url: 'https://www.ouija.com.br',
		image: 'ouija',
		description: 'Releitura digital da tábua ouija, inspirada no antigo jogo Lúcifer. Gera caracteres aleatórios que, às vezes, até fazem sentido.',
		stack: ['React', 'Sass'],
	},
];

export const interests = [
	'Fora do código, toco bateria, ando de skate e desenho, mais pelo prazer do que pelo talento.',
	'Sou motociclista: para mim a moto é transporte e terapia ao mesmo tempo.',
	'Estou sempre atrás de música nova para ouvir.',
];

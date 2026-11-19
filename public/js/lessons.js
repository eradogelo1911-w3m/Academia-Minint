const LESSONS = [
  // ==================== HISTÓRIA DE ANGOLA ====================
  {
    id: 'hist-01',
    orgao: 'Geral (Todos os Órgãos)',
    disciplina: 'História de Angola',
    titulo: 'Dos Reinos Pré-Coloniais à Chegada dos Portugueses (1482)',
    duracao: '18 min',
    nivel: 'Fundamental',
    resumo: 'Organização política, económica e social do Reino do Kongo, Reino do Ndongo, Reino da Lunda e Reino do Bailundo antes e durante os primeiros contactos marítimos.',
    conteudo: [
      'Antes da chegada do navegador português Diogo Cão à foz do rio Zaire em 1482, o território hoje correspondente a Angola era composto por estados organizados com estruturas administrativas, jurídicas e comerciais próprias.',
      'O Reino do Kongo, com capital em Mbanza Kongo, possuía uma organização centralizada liderada pelo Mani Kongo, dividido em províncias (Soyo, Mbamba, Nsundi, Mpangu, Mbata e Mpemba), moeda própria (nzimbu) e relações diplomáticas.',
      'A sul do rio Dande destacou-se o Reino do Ndongo, governado pelo Ngola a Kiluanje, cuja resistência à penetração colonial tornou-se emblemática sob a liderança da Rainha Njinga Mbandi no século XVII.',
      'No planalto central e leste sobressaíram os reinos Ovimbundu (como o Bailundo e o Bié) e o Império Lunda-Cokwe, fundamentais nas rotas comerciais do interior.'
    ],
    pontosChave: [
      '1482: Chegada de Diogo Cão à foz do rio Zaire.',
      '1575: Fundação de São Paulo da Assunção de Luanda por Paulo Dias de Novais.',
      'Rainha Njinga Mbandi: Símbolo da diplomacia e resistência militar no Ndongo e Matamba.'
    ]
  },
  {
    id: 'hist-02',
    orgao: 'Geral (Todos os Órgãos)',
    disciplina: 'História de Angola',
    titulo: 'Luta de Libertação Nacional e a Independência de 11 de Novembro de 1975',
    duracao: '22 min',
    nivel: 'Essencial',
    resumo: 'Os marcos de 4 de Janeiro, 4 de Fevereiro e 15 de Março de 1961, os movimentos de libertação (FNLA, MPLA, UNITA), o Acordo do Alvor e a proclamação da independência.',
    conteudo: [
      'A luta anticolonial moderna ganhou expressão decisiva em 1961 com três acontecimentos históricos: a revolta da Baixa de Cassanje (4 de Janeiro), o assalto às prisões de Luanda (4 de Fevereiro) e a sublevação no Norte de Angola (15 de Março).',
      'Três movimentos conduziram o processo de libertação: a FNLA (liderada por Holden Roberto), o MPLA (liderado por Dr. António Agostinho Neto) e a UNITA (liderada por Dr. Jonas Malheiro Savimbi).',
      'Após a Revolução de 25 de Abril de 1974 em Portugal, foi assinado o Acordo do Alvor em 15 de Janeiro de 1975, estabelecendo um governo de transição e a data da independência.',
      'A 11 de Novembro de 1975, o Dr. António Agostinho Neto proclamou em Luanda a independência de Angola e tornou-se o primeiro Presidente da República.'
    ],
    pontosChave: [
      '4 de Fevereiro de 1961: Início da luta armada de libertação nacional.',
      '15 de Janeiro de 1975: Assinatura do Acordo do Alvor.',
      '11 de Novembro de 1975: Proclamação da Independência Nacional.'
    ]
  },
  {
    id: 'hist-03',
    orgao: 'Geral (Todos os Órgãos)',
    disciplina: 'História de Angola',
    titulo: 'Acordos de Paz e Reconciliação Nacional (Bicesse, Lusaka e Luena)',
    duracao: '16 min',
    nivel: 'Intermédio',
    resumo: 'Evolução política de Angola pós-1975, transição para o multipartidarismo em 1991/1992 e o Memorando de Entendimento do Luena de 4 de Abril de 2002.',
    conteudo: [
      'Após a independência, Angola atravessou um prolongado conflito armado interno com interferência regional e internacional no contexto da Guerra Fria.',
      'Em 31 de Maio de 1991 foram assinados os Acordos de Bicesse (Portugal), abrindo caminho à revisão constitucional multipartidária e às primeiras eleições gerais de Setembro de 1992.',
      'Seguiu-se o Protocolo de Lusaka (20 de Novembro de 1994) e, finalmente, a 4 de Abril de 2002, a assinatura do Memorando de Entendimento do Luena, que selou definitivamente a paz e a reconciliação nacional em todo o território.'
    ],
    pontosChave: [
      '31 de Maio de 1991: Acordos de Bicesse.',
      '4 de Abril de 2002: Dia da Paz e Reconciliação Nacional (Memorando do Luena).',
      '5 de Fevereiro de 2010: Promulgação da atual Constituição da República de Angola.'
    ]
  },

  // ==================== ADMINISTRAÇÃO PÚBLICA ====================
  {
    id: 'adm-01',
    orgao: 'Administração & Finanças MININT',
    disciplina: 'Administração Pública',
    titulo: 'Princípios Constitucionais da Administração Pública Angolana',
    duracao: '20 min',
    nivel: 'Fundamental',
    resumo: 'Legalidade, prossecução do interesse público, igualdade, proporcionalidade, justiça, imparcialidade, boa-fé e probidade administrativa (Art. 198.º da CRA).',
    conteudo: [
      'Nos termos da Constituição da República de Angola (CRA), a Administração Pública prossegue o interesse público e deve respeitar os direitos e interesses legalmente protegidos dos cidadãos.',
      'O princípio da legalidade determina que os órgãos e agentes administrativos só podem agir com fundamento na lei e dentro dos limites por ela definidos.',
      'A probidade pública exige integridade, honestidade e transparência na gestão dos recursos do Estado, prevenindo conflitos de interesses e atos de corrupção.'
    ],
    pontosChave: [
      'Art. 198.º da CRA: Princípios fundamentais da atividade administrativa.',
      'Legalidade: A Administração só faz o que a lei permite ou determina.',
      'Desconcentração vs. Descentralização administrativa.'
    ]
  },
  {
    id: 'adm-02',
    orgao: 'Administração & Finanças MININT',
    disciplina: 'Administração Pública',
    titulo: 'Ato Administrativo, Hierarquia e Procedimento Disciplinar',
    duracao: '24 min',
    nivel: 'Essencial',
    resumo: 'Requisitos de validade do ato administrativo (sujeito, forma, objeto, fim e motivo), dever de obediência hierárquica e garantias de defesa do funcionário.',
    conteudo: [
      'O ato administrativo é a decisão de um órgão da Administração que, ao abrigo de normas de direito público, visa produzir efeitos jurídicos numa situação individual e concreta.',
      'Nas forças de segurança e órgãos do MININT, a hierarquia impõe o dever de obediência às ordens legítimas dos superiores hierárquicos; contudo, cessa o dever de obediência sempre que o cumprimento da ordem implique a prática de um crime.',
      'Qualquer sanção disciplinar exige processo prévio com audiência e direito de defesa do arguido, sob pena de nulidade.'
    ],
    pontosChave: [
      'Elementos do Ato: Competência, Forma, Objeto, Motivo e Finalidade.',
      'Limite da obediência: Ordem que configure crime não deve ser cumprida.',
      'Garantia de defesa obrigatória em processo disciplinar.'
    ]
  },
  {
    id: 'adm-03',
    orgao: 'Administração & Finanças MININT',
    disciplina: 'Administração Pública',
    titulo: 'Gestão Documental, Arquivo e Ética no Serviço Público',
    duracao: '15 min',
    nivel: 'Fundamental',
    resumo: 'Classificação de documentos oficiais (ofício, despacho, memorando, relatório, circular), sigilo profissional e atendimento ao cidadão.',
    conteudo: [
      'A correspondência oficial nos órgãos do MININT obedece a regras rigorosas de formalidade, clareza, impessoalidade e segurança da informação.',
      'Documentos classificados como Reservado, Confidencial ou Secreto exigem controlo de acesso e responsabilização funcional em caso de divulgação indevida.',
      'O atendimento ao público deve pautar-se pela urbanidade, celeridade e ausência de qualquer discriminação.'
    ],
    pontosChave: [
      'Sigilo profissional: Dever de reserva sobre factos conhecidos no exercício das funções.',
      'Despacho: Decisão proferida por autoridade administrativa sobre requerimento ou processo.'
    ]
  },

  // ==================== LÍNGUA PORTUGUESA ====================
  {
    id: 'port-01',
    orgao: 'Geral (Todos os Órgãos)',
    disciplina: 'Língua Portuguesa',
    titulo: 'Concordância Verbal e Nominal em Provas de Concurso',
    duracao: '20 min',
    nivel: 'Essencial',
    resumo: 'Regras gerais e casos especiais de concordância (verbos impessoais haver/fazer, sujeito composto, expressões partitivas e adjetivos).',
    conteudo: [
      'Regra geral da concordância verbal: o verbo concorda em número e pessoa com o núcleo do sujeito.',
      'O verbo HAVER no sentido de existir, ocorrer ou tempo decorrido é impessoal, permanecendo obrigatoriamente na 3.ª pessoa do singular (ex.: "Houve várias ocorrências na esquadra").',
      'Na concordância nominal, o artigo, o adjetivo, o pronome e o numeral concordam em género e número com o substantivo a que se referem.'
    ],
    pontosChave: [
      '"Fazem dois anos" está INCORRETO; o correto é "Faz dois anos".',
      '"Existem provas" (pessoal) vs. "Há provas" (impessoal).',
      'Anexo, incluso, próprio e quite concordam com o substantivo.'
    ]
  },
  {
    id: 'port-02',
    orgao: 'Geral (Todos os Órgãos)',
    disciplina: 'Língua Portuguesa',
    titulo: 'Acentuação Gráfica, Crase e Ortografia Oficial',
    duracao: '18 min',
    nivel: 'Fundamental',
    resumo: 'Regras das palavras oxítonas, paroxítonas e proparoxítonas, uso obrigatório e proibido da crase e emprego dos porquês.',
    conteudo: [
      'Todas as palavras proparoxítonas são acentuadas graficamente (ex.: público, trânsito, mérito, polícia).',
      'A crase é a fusão da preposição "a" com o artigo definido feminino "a" ou com o "a" inicial dos pronomes demonstrativos aquele(s), aquela(s), aquilo.',
      'Nunca ocorre crase antes de verbos, palavras masculinas, pronomes pessoais ou expressões repetidas (ex.: dia a dia, face a face).'
    ],
    pontosChave: [
      'Dica prática da crase: Substituir a palavra feminina por uma masculina; se surgir "ao", há crase.',
      'Todas as proparoxítonas levam acento gráfico.'
    ]
  },
  {
    id: 'port-03',
    orgao: 'Geral (Todos os Órgãos)',
    disciplina: 'Língua Portuguesa',
    titulo: 'Interpretação de Texto, Coesão e Redação Oficial',
    duracao: '19 min',
    nivel: 'Intermédio',
    resumo: 'Distinção entre compreensão explícita e inferência textual, conectores lógicos (causa, consequência, oposição, finalidade) e pronomes de tratamento.',
    conteudo: [
      'Compreender um texto significa identificar o que está literalmente escrito; interpretar significa deduzir conclusões lógicas a partir das pistas fornecidas pelo autor sem extrapolar.',
      'Os conectores adversativos (mas, porém, contudo, todavia, entretanto) introduzem oposição e geralmente destacam a tese principal do argumento.',
      'Na redação oficial, usa-se "Vossa Excelência" para altas entidades do Estado e "Senhor(a)" para demais destinatários.'
    ],
    pontosChave: [
      'Evitar extrapolação na interpretação de texto.',
      'Conectores concessivos: embora, ainda que, mesmo que, posto que.'
    ]
  },

  // ==================== MATEMÁTICA & RACIOCÍNIO ====================
  {
    id: 'mat-01',
    orgao: 'Geral (Todos os Órgãos)',
    disciplina: 'Matemática',
    titulo: 'Razão, Proporção, Regra de Três Simples e Composta',
    duracao: '22 min',
    nivel: 'Fundamental',
    resumo: 'Grandezas diretamente e inversamente proporcionais aplicadas a efetivos, escalas de turno, distâncias e consumo operacional.',
    conteudo: [
      'Duas grandezas são diretamente proporcionais quando o aumento de uma implica o aumento da outra na mesma razão. São inversamente proporcionais quando o aumento de uma provoca a redução proporcional da outra.',
      'Exemplo prático: Se 6 agentes patrulham um perímetro em 4 horas, 8 agentes no mesmo ritmo farão o trabalho em menos tempo (inversamente proporcional: 6 × 4 = 8 × x → x = 3 horas).'
    ],
    pontosChave: [
      'Diretamente proporcional: multiplica-se cruzado.',
      'Inversamente proporcional: multiplica-se em linha antes de isolar a incógnita.'
    ]
  },
  {
    id: 'mat-02',
    orgao: 'Geral (Todos os Órgãos)',
    disciplina: 'Matemática',
    titulo: 'Percentagem, Juros Simples e Análise de Dados',
    duracao: '20 min',
    nivel: 'Essencial',
    resumo: 'Cálculo de aumentos, descontos sucessivos, taxas percentuais em estatísticas criminais e orçamentais e média aritmética.',
    conteudo: [
      'Para calcular x% de um valor V, multiplica-se V por (x / 100). Um aumento de 20% equivale a multiplicar o valor original por 1,20; um desconto de 15% equivale a multiplicar por 0,85.',
      'Nos juros simples, utiliza-se a fórmula J = C × i × t, onde C é o capital, i é a taxa na mesma unidade do tempo e t é o período.'
    ],
    pontosChave: [
      'Aumentos sucessivos não se somam diretamente: +10% seguido de +10% resulta em +21%.',
      'Média aritmética = soma de todos os valores dividida pela quantidade de elementos.'
    ]
  },
  {
    id: 'mat-03',
    orgao: 'Geral (Todos os Órgãos)',
    disciplina: 'Matemática',
    titulo: 'Equações do 1.º e 2.º Grau e Raciocínio Lógico',
    duracao: '25 min',
    nivel: 'Intermédio',
    resumo: 'Resolução de problemas algébricos, sistemas lineares simples, proposições lógicas, negação e sequências numéricas.',
    conteudo: [
      'Numa equação do 1.º grau (ax + b = 0), isolamos a incógnita agrupando termos semelhantes. Numa equação do 2.º grau (ax² + bx + c = 0), aplicamos o discriminante Δ = b² - 4ac.',
      'No raciocínio lógico proposicional, a negação de "Todos os agentes são pontuais" não é "Nenhum agente é pontual", mas sim "Pelo menos um agente não é pontual".'
    ],
    pontosChave: [
      'Negação de "Todo A é B" → "Algum A não é B".',
      'Negação de "A e B" (conjunção) → "Não A ou Não B" (Leis de De Morgan).'
    ]
  },

  // ==================== DIREITO & CIDADANIA ====================
  {
    id: 'dir-01',
    orgao: 'Geral (Todos os Órgãos)',
    disciplina: 'Direito & Cidadania',
    titulo: 'Constituição da República de Angola: Direitos Fundamentais e Órgãos de Soberania',
    duracao: '25 min',
    nivel: 'Essencial',
    resumo: 'Direitos, liberdades e garantias fundamentais, habeas corpus, inviolabilidade do domicílio e estrutura dos Órgãos de Soberania (Presidente, Assembleia Nacional e Tribunais).',
    conteudo: [
      'A República de Angola é um Estado Democrático de Direito baseado na dignidade da pessoa humana e na vontade do povo angolano.',
      'São Órgãos de Soberania o Presidente da República, a Assembleia Nacional e os Tribunais (Art. 105.º da CRA).',
      'O domicílio é inviolável: ninguém pode entrar ou fazer busca e apreensão sem consentimento do morador, salvo em flagrante delito ou mediante mandado da autoridade judicial competente nos casos previstos na lei.'
    ],
    pontosChave: [
      'Art. 105.º CRA: Presidente da República, Assembleia Nacional e Tribunais.',
      'Art. 68.º CRA: Habeas Corpus contra abuso de poder em virtude de prisão ou detenção ilegal.',
      'Presunção de inocência até trânsito em julgado da sentença condenatória.'
    ]
  },
  {
    id: 'dir-02',
    orgao: 'Geral (Todos os Órgãos)',
    disciplina: 'Direito & Cidadania',
    titulo: 'Noções de Direito Penal e Processual Penal Angolano',
    duracao: '24 min',
    nivel: 'Intermédio',
    resumo: 'Princípio da legalidade penal, legítima defesa, flagrante delito, detenção, medidas de coação e cadeia de custódia da prova.',
    conteudo: [
      'Não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal (nullum crimen, nulla poena sine lege).',
      'Considera-se flagrante delito todo o crime que se está a cometer ou que se acabou de cometer, bem como o caso em que o agente é perseguido logo após o facto ou encontrado com objetos que demonstrem a sua autoria.',
      'Toda a pessoa detida deve ser informada imediatamente das razões da detenção e dos seus direitos constitucionais, sendo apresentada ao Ministério Público / Juiz de Garantias no prazo legal.'
    ],
    pontosChave: [
      'Legítima defesa: Repulsa de agressão atual e ilícita com meios necessários e proporcionais.',
      'Preservação do local do crime: Isolamento imediato para não contaminar vestígios.'
    ]
  },

  // ==================== ÓRGÃOS ESPECÍFICOS DO MININT ====================
  {
    id: 'pna-01',
    orgao: 'Polícia Nacional (PNA)',
    disciplina: 'Conhecimentos Específicos MININT',
    titulo: 'Missão, Atribuições e Princípios de Atuação da Polícia Nacional de Angola',
    duracao: '22 min',
    nivel: 'Essencial',
    resumo: 'Garantia da ordem e tranquilidade públicas, prevenção e investigação criminal, policiamento de proximidade e uso proporcional da força.',
    conteudo: [
      'A Polícia Nacional de Angola (PNA) é uma força policial permanente, regular e apartidária, integrada no Ministério do Interior, com a missão de defender a legalidade democrática, garantir a segurança interna e proteger os direitos dos cidadãos.',
      'A atuação policial rege-se pelos princípios da legalidade, necessidade, adequação e proporcionalidade no uso dos meios coercivos.',
      'O policiamento de proximidade promove a parceria entre a polícia e a comunidade para prevenir a criminalidade na origem.'
    ],
    pontosChave: [
      'Força apartidária ao serviço de todos os cidadãos.',
      'Uso da força: Apenas quando estritamente necessário e na medida exigida pelo cumprimento do dever.'
    ]
  },
  {
    id: 'sme-01',
    orgao: 'Serviço de Migração e Estrangeiros (SME)',
    disciplina: 'Conhecimentos Específicos MININT',
    titulo: 'Regime Jurídico de Estrangeiros, Controlo Fronteiriço e Tipos de Vistos',
    duracao: '23 min',
    nivel: 'Essencial',
    resumo: 'Atribuições do SME nos postos de fronteira terrestres, marítimos e aéreos, documentos de viagem, vistos consulares e territoriais, e combate à imigração ilegal.',
    conteudo: [
      'O Serviço de Migração e Estrangeiros (SME) é o órgão executivo central do MININT encarregado de controlar a entrada, permanência, residência e saída de cidadãos estrangeiros no território nacional, bem como a emissão de passaportes nacionais.',
      'Para entrar em Angola, o cidadão estrangeiro deve ser portador de passaporte válido (com validade superior a 6 meses), visto adequado à finalidade da deslocação (salvo acordos de isenção) e meios de subsistência.',
      'Entre os principais tipos de visto destacam-se: Visto Diplomático, Oficial, de Cortesia, de Turismo, de Curta Duração, de Trabalho, de Estudo, de Tratamento Médico e de Fixação de Residência.'
    ],
    pontosChave: [
      'Competência exclusiva na emissão do Passaporte Nacional Angolano.',
      'Controlo de postos fronteiriços e fiscalização da permanência de estrangeiros.'
    ]
  },
  {
    id: 'spcb-01',
    orgao: 'Proteção Civil e Bombeiros (SPCB)',
    disciplina: 'Conhecimentos Específicos MININT',
    titulo: 'Prevenção e Combate a Incêndios, Classes de Fogo e Socorro Pré-Hospitalar',
    duracao: '21 min',
    nivel: 'Essencial',
    resumo: 'Triângulo e tetraedro do fogo, classes de incêndio (A, B, C, D e K), agentes extintores adequados e gestão de riscos e catástrofes.',
    conteudo: [
      'O Serviço de Proteção Civil e Bombeiros (SPCB) tem por missão a prevenção e combate a incêndios, o socorro às populações em caso de acidentes, inundações, desabamentos e calamidades, e a proteção civil.',
      'O tetraedro do fogo é composto por quatro elementos: Combustível, Comburente (oxigénio), Calor e Reação em Cadeia.',
      'Classes de incêndio: Classe A (materiais sólidos como madeira, papel e tecido), Classe B (líquidos inflamáveis como gasolina e óleo), Classe C (equipamentos elétricos energizados) e Classe D (metais pirofóricos).'
    ],
    pontosChave: [
      'Nunca usar água em incêndios de Classe C (equipamentos elétricos) ou líquidos inflamáveis (Classe B).',
      'Métodos de extinção: Arrefecimento, Abafamento e Isolamento.'
    ]
  },
  {
    id: 'sp-01',
    orgao: 'Serviços Prisionais (SP)',
    disciplina: 'Conhecimentos Específicos MININT',
    titulo: 'Execução de Penas, Segurança Penitenciária e Reinserção Social',
    duracao: '20 min',
    nivel: 'Essencial',
    resumo: 'Finalidades da pena privativa de liberdade, direitos e deveres dos reclusos, segurança das unidades penitenciárias e programas de reabilitação.',
    conteudo: [
      'O Serviço Penitenciário (Serviços Prisionais) assegura a execução das penas e medidas de segurança privativas da liberdade decretadas pelos tribunais, conciliando a segurança e disciplina com a reeducação e reinserção social do recluso.',
      'É proibida qualquer forma de tortura, tratamento cruel, desumano ou degradante, devendo ser garantidas condições dignas de higiene, alimentação e assistência médica.',
      'A separação entre presos preventivos (em prisão preventiva) e condenados, bem como entre homens, mulheres e jovens adultos, constitui regra fundamental da gestão prisional.'
    ],
    pontosChave: [
      'Dupla missão: Custódia segura e reinserção social pelo trabalho e formação.',
      'Separação obrigatória entre presos preventivos e condenados.'
    ]
  },
  {
    id: 'geo-01',
    orgao: 'Geral (Todos os Órgãos)',
    disciplina: 'Geografia & Atualidade',
    titulo: 'Geografia Física, Divisão Político-Administrativa e Fronteiras de Angola',
    duracao: '19 min',
    nivel: 'Fundamental',
    resumo: 'Área territorial (1.246.700 km²), países limítrofes, rios principais, bacias hidrográficas, clima e províncias de Angola.',
    conteudo: [
      'Angola situa-se na costa ocidental da África Austral, com uma superfície de 1.246.700 km² e uma costa atlântica de cerca de 1.650 km.',
      'Faz fronteira terrestre a Norte e Nordeste com a República Democrática do Congo (RDC), a Norte com a República do Congo (Brazzaville, através de Cabinda), a Leste com a Zâmbia e a Sul com a Namíbia.',
      'Os principais rios de Angola incluem o Kwanza (o maior rio totalmente angolano), o Kubango, o Kunene, o Zaire (Congo), o Kasai e o Zambeze.'
    ],
    pontosChave: [
      'Superfície: 1.246.700 km².',
      '4 Países vizinhos: República do Congo, RDC, Zâmbia e Namíbia.',
      'Ponto mais elevado: Morro do Moco (2.620 metros), na província do Huambo.'
    ]
  }
];

module.exports = { LESSONS };

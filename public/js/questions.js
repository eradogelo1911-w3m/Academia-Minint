const QUESTIONS = [
  // HISTÓRIA DE ANGOLA
  {
    id: 'q-hist-1',
    disciplina: 'História de Angola',
    orgao: 'Geral',
    enunciado: 'Em que data foi proclamada oficialmente a Independência Nacional de Angola pelo Dr. António Agostinho Neto?',
    opcoes: [
      '4 de Fevereiro de 1961',
      '15 de Janeiro de 1975',
      '11 de Novembro de 1975',
      '4 de Abril de 2002'
    ],
    correta: 2,
    explicacao: 'A Independência Nacional de Angola foi proclamada em Luanda a 11 de Novembro de 1975 pelo primeiro Presidente, Dr. António Agostinho Neto.'
  },
  {
    id: 'q-hist-2',
    disciplina: 'História de Angola',
    orgao: 'Geral',
    enunciado: 'Qual acontecimento histórico assinala o início da luta armada de libertação nacional em Luanda no ano de 1961?',
    opcoes: [
      'Acordo do Alvor',
      'Assalto às prisões de Luanda a 4 de Fevereiro',
      'Assinatura do Protocolo de Lusaka',
      'Fundação de São Paulo de Luanda'
    ],
    correta: 1,
    explicacao: 'A 4 de Fevereiro de 1961, nacionalistas angolanos atacaram as prisões e a emissora de rádio em Luanda, marcando o início da luta armada.'
  },
  {
    id: 'q-hist-3',
    disciplina: 'História de Angola',
    orgao: 'Geral',
    enunciado: 'Que acordo assinado a 4 de Abril de 2002 selou definitivamente a paz e a reconciliação nacional em Angola?',
    opcoes: [
      'Acordos de Bicesse',
      'Acordo de Nova Iorque',
      'Memorando de Entendimento do Luena',
      'Convenção de Genebra'
    ],
    correta: 2,
    explicacao: 'O Memorando de Entendimento do Luena, assinado a 4 de Abril de 2002, pôs fim ao conflito armado interno em Angola.'
  },
  {
    id: 'q-hist-4',
    disciplina: 'História de Angola',
    orgao: 'Geral',
    enunciado: 'Qual soberana africana destacou-se pela resistência política e militar contra a ocupação colonial nos reinos do Ndongo e Matamba no século XVII?',
    opcoes: [
      'Rainha Njinga Mbandi',
      'Dona Beatriz Kimpa Vita',
      'Deolinda Rodrigues',
      'Rainha Lueji'
    ],
    correta: 0,
    explicacao: 'A Rainha Njinga Mbandi liderou com brilhantismo diplomático e militar os reinos do Ndongo e da Matamba contra a penetração colonial portuguesa.'
  },
  {
    id: 'q-hist-5',
    disciplina: 'História de Angola',
    orgao: 'Geral',
    enunciado: 'Qual era a capital do antigo Reino do Kongo aquando da chegada de Diogo Cão em 1482?',
    opcoes: [
      'Mbanza Kongo',
      'Kuito Kuanavale',
      'Dundo',
      'Muxima'
    ],
    correta: 0,
    explicacao: 'Mbanza Kongo era o centro político, económico e espiritual do Reino do Kongo, hoje Património Mundial da UNESCO.'
  },

  // ADMINISTRAÇÃO PÚBLICA
  {
    id: 'q-adm-1',
    disciplina: 'Administração Pública',
    orgao: 'Administração',
    enunciado: 'De acordo com o princípio da legalidade na Administração Pública angolana, os órgãos e agentes administrativos devem:',
    opcoes: [
      'Agir segundo a sua conveniência pessoal desde que não haja reclamação',
      'Atuar exclusivamente com fundamento na lei e dentro dos limites por ela estabelecidos',
      'Cumprir ordens mesmo quando configurem crime evidente',
      'Priorizar interesses privados sobre o interesse público'
    ],
    correta: 1,
    explicacao: 'Pelo princípio da legalidade (Art. 198.º da CRA), toda a atuação da Administração Pública está subordinada à Constituição e à lei.'
  },
  {
    id: 'q-adm-2',
    disciplina: 'Administração Pública',
    orgao: 'Administração',
    enunciado: 'No âmbito da hierarquia administrativa e policial, quando cessa o dever de obediência do subordinado?',
    opcoes: [
      'Sempre que o subordinado discordar da opinião do chefe',
      'Quando o cumprimento da ordem implicar a prática de um crime',
      'Aos fins de semana e feriados nacionais',
      'Nunca cessa em nenhuma circunstância'
    ],
    correta: 1,
    explicacao: 'A Constituição e o regime disciplinar determinam que cessa o dever de obediência sempre que o cumprimento da ordem implique a prática de um crime.'
  },
  {
    id: 'q-adm-3',
    disciplina: 'Administração Pública',
    orgao: 'Administração',
    enunciado: 'Como se designa a transferência de poderes decisórios do superior hierárquico para um órgão subalterno dentro da mesma pessoa coletiva pública (ex.: dentro do MININT)?',
    opcoes: [
      'Privatização',
      'Desconcentração administrativa',
      'Concessão comercial',
      'Usurpação de funções'
    ],
    correta: 1,
    explicacao: 'A desconcentração ocorre dentro da mesma entidade pública (distribuição interna de competências), enquanto a descentralização cria pessoas coletivas distintas.'
  },
  {
    id: 'q-adm-4',
    disciplina: 'Administração Pública',
    orgao: 'Administração',
    enunciado: 'Qual princípio exige que os agentes públicos atuem com honestidade, integridade e transparência na gestão dos bens do Estado?',
    opcoes: [
      'Princípio da Probidade Pública',
      'Princípio da Oportunidade Política',
      'Princípio da Informalidade Absoluta',
      'Princípio da Sigilosidade Financeira'
    ],
    correta: 0,
    explicacao: 'O princípio da probidade pública impõe conduta ética, transparente e íntegra na administração dos recursos públicos.'
  },

  // LÍNGUA PORTUGUESA
  {
    id: 'q-port-1',
    disciplina: 'Língua Portuguesa',
    orgao: 'Geral',
    enunciado: 'Assinale a frase em que a concordância verbal está inteiramente CORRETA:',
    opcoes: [
      'Houveram muitos candidatos aprovados no concurso.',
      'Fazem três meses que o edital foi publicado.',
      'Houve vários candidatos aprovados no concurso.',
      'Existe muitas vagas para agentes de terceira classe.'
    ],
    correta: 2,
    explicacao: 'O verbo "haver" no sentido de existir é impessoal e mantém-se na 3.ª pessoa do singular ("Houve vários candidatos").'
  },
  {
    id: 'q-port-2',
    disciplina: 'Língua Portuguesa',
    orgao: 'Geral',
    enunciado: 'Qual das opções apresenta uma palavra acentuada por ser PROPAROXÍTONA?',
    opcoes: [
      'Polícia',
      'Cidadão',
      'Trânsito',
      'Nacional'
    ],
    correta: 2,
    explicacao: 'Trân-si-to tem a antepenúltima sílaba tónica, sendo proparoxítona (todas as proparoxítonas são acentuadas). "Po-lí-cia" é paroxítona terminada em ditongo.'
  },
  {
    id: 'q-port-3',
    disciplina: 'Língua Portuguesa',
    orgao: 'Geral',
    enunciado: 'Em qual alternativa o sinal indicativo de CRASE foi empregado corretamente?',
    opcoes: [
      'O agente dirigiu-se à esquadra central logo pela manhã.',
      'Os candidatos começaram à estudar para a prova escrita.',
      'Entregámos o relatório à Vossa Excelência ontem.',
      'O patrulhamento ocorre de segunda à sexta-feira.'
    ],
    correta: 0,
    explicacao: 'Quem se dirige, dirige-se "a" algum lugar + artigo feminino "a" antes de "esquadra" = "à esquadra". Não há crase antes de verbo ("estudar"), pronome de tratamento ("Vossa Excelência") ou artigo indefinido/ausente ("de segunda a sexta").'
  },
  {
    id: 'q-port-4',
    disciplina: 'Língua Portuguesa',
    orgao: 'Geral',
    enunciado: 'Na frase: "O candidato preparou-se com rigor, CONTUDO não atingiu a nota mínima", o conector destacado exprime ideia de:',
    opcoes: [
      'Explicação',
      'Adição',
      'Adversidade / Oposição',
      'Conclusão'
    ],
    correta: 2,
    explicacao: '"Contudo" é uma conjunção coordenativa adversativa (equivalente a "mas", "porém", "todavia").'
  },

  // MATEMÁTICA
  {
    id: 'q-mat-1',
    disciplina: 'Matemática',
    orgao: 'Geral',
    enunciado: 'Uma equipa de 6 efetivos conclui a inspeção de um perímetro em 4 horas. Mantendo o mesmo ritmo de trabalho, em quanto tempo 8 efetivos concluirão a mesma tarefa?',
    opcoes: [
      '5 horas e 20 minutos',
      '3 horas',
      '2 horas',
      '4 horas e 30 minutos'
    ],
    correta: 1,
    explicacao: 'As grandezas são inversamente proporcionais: mais efetivos exigem menos tempo. 6 × 4 = 8 × x → 24 = 8x → x = 3 horas.'
  },
  {
    id: 'q-mat-2',
    disciplina: 'Matemática',
    orgao: 'Geral',
    enunciado: 'Num concurso com 1.200 inscritos, 35% foram aprovados na prova escrita. Quantos candidatos foram aprovados?',
    opcoes: [
      '350 candidatos',
      '420 candidatos',
      '480 candidatos',
      '380 candidatos'
    ],
    correta: 1,
    explicacao: '35% de 1.200 = 0,35 × 1.200 = 420 candidatos.'
  },
  {
    id: 'q-mat-3',
    disciplina: 'Matemática',
    orgao: 'Geral',
    enunciado: 'Qual é a negação lógica da proposição: "Todos os agentes estão em serviço"?',
    opcoes: [
      'Nenhum agente está em serviço.',
      'Todos os agentes estão de folga.',
      'Pelo menos um agente não está em serviço.',
      'A maioria dos agentes está em serviço.'
    ],
    correta: 2,
    explicacao: 'A negação do quantificador universal "Todo A é B" é o existencial "Algum A não é B" (ou "Pelo menos um agente não está em serviço").'
  },
  {
    id: 'q-mat-4',
    disciplina: 'Matemática',
    orgao: 'Geral',
    enunciado: 'Uma viatura patrulha percorre 180 km em 2 horas e 30 minutos. Qual foi a sua velocidade média?',
    opcoes: [
      '60 km/h',
      '72 km/h',
      '80 km/h',
      '90 km/h'
    ],
    correta: 1,
    explicacao: '2 horas e 30 minutos correspondem a 2,5 horas. Velocidade média = 180 km / 2,5 h = 72 km/h.'
  },

  // DIREITO & CIDADANIA
  {
    id: 'q-dir-1',
    disciplina: 'Direito & Cidadania',
    orgao: 'Geral',
    enunciado: 'Nos termos do artigo 105.º da Constituição da República de Angola, quais são os Órgãos de Soberania?',
    opcoes: [
      'Presidente da República, Assembleia Nacional e Tribunais',
      'Presidente da República, Governadores Provinciais e Polícia Nacional',
      'Assembleia Nacional, Procuradoria-Geral e Forças Armadas',
      'Conselho de Ministros, Tribunais e Administrações Municipais'
    ],
    correta: 0,
    explicacao: 'O artigo 105.º da CRA define expressamente como Órgãos de Soberania o Presidente da República, a Assembleia Nacional e os Tribunais.'
  },
  {
    id: 'q-dir-2',
    disciplina: 'Direito & Cidadania',
    orgao: 'Geral',
    enunciado: 'Qual garantia constitucional protege o cidadão contra prisão ou detenção ilegal por abuso de poder?',
    opcoes: [
      'Habeas Data',
      'Habeas Corpus',
      'Mandado de Captura',
      'Amnistia Fiscal'
    ],
    correta: 1,
    explicacao: 'O Habeas Corpus (Art. 68.º da CRA) é a providência constitucional destinada a fazer cessar de imediato qualquer prisão ou detenção ilegal.'
  },
  {
    id: 'q-dir-3',
    disciplina: 'Direito & Cidadania',
    orgao: 'Geral',
    enunciado: 'Em que ano foi promulgada a atual Constituição da República de Angola?',
    opcoes: [
      '1992',
      '2002',
      '2010',
      '2017'
    ],
    correta: 2,
    explicacao: 'A atual Constituição da República de Angola foi aprovada pela Assembleia Constituinte e promulgada a 5 de Fevereiro de 2010.'
  },

  // CONHECIMENTOS ESPECÍFICOS MININT (PNA, SME, SPCB, SP)
  {
    id: 'q-min-1',
    disciplina: 'Conhecimentos Específicos MININT',
    orgao: 'Polícia Nacional (PNA)',
    enunciado: 'A Polícia Nacional de Angola (PNA) caracteriza-se constitucionalmente por ser uma força:',
    opcoes: [
      'Partidária e de atuação exclusivamente rural',
      'Permanente, regular e apartidária, integrada no Ministério do Interior',
      'Privada, subordinada às autarquias locais',
      'Temporária, mobilizada apenas em estado de emergência'
    ],
    correta: 1,
    explicacao: 'A PNA é uma força policial permanente, regular e apartidária dedicada à manutenção da ordem, tranquilidade públicas e proteção dos cidadãos.'
  },
  {
    id: 'q-min-2',
    disciplina: 'Conhecimentos Específicos MININT',
    orgao: 'Serviço de Migração e Estrangeiros (SME)',
    enunciado: 'Qual órgão do Ministério do Interior é competente pelo controlo de fronteiras, fiscalização da permanência de estrangeiros e emissão do Passaporte Nacional?',
    opcoes: [
      'Serviço de Proteção Civil e Bombeiros (SPCB)',
      'Serviços Prisionais (SP)',
      'Serviço de Migração e Estrangeiros (SME)',
      'Serviço de Investigação Criminal (SIC)'
    ],
    correta: 2,
    explicacao: 'O SME é o órgão executivo do MININT encarregado do controlo migratório, fronteiriço e da emissão de passaportes.'
  },
  {
    id: 'q-min-3',
    disciplina: 'Conhecimentos Específicos MININT',
    orgao: 'Proteção Civil e Bombeiros (SPCB)',
    enunciado: 'Num incêndio de Classe C (equipamentos elétricos energizados), qual procedimento deve ser adotado pelo bombeiro ou socorrista?',
    opcoes: [
      'Lançar jato pleno de água diretamente sobre o quadro elétrico ligado',
      'Utilizar agente extintor não condutor de eletricidade (como CO₂ ou pó químico seco) e desligar a corrente',
      'Utilizar espuma mecânica à base de água salgada',
      'Abanar o foco com panos húmidos'
    ],
    correta: 1,
    explicacao: 'A água conduz eletricidade e provoca risco fatal de eletrocussão. Em incêndios de Classe C usam-se extintores de CO₂ ou Pó Químico Seco (PQS).'
  },
  {
    id: 'q-min-4',
    disciplina: 'Conhecimentos Específicos MININT',
    orgao: 'Serviços Prisionais (SP)',
    enunciado: 'No regime penitenciário angolano, qual é uma regra obrigatória na acomodação dos reclusos?',
    opcoes: [
      'Misturar presos preventivos com condenados definitivos nas mesmas celas',
      'Separar presos preventivos dos condenados, bem como separar por sexo e faixa etária',
      'Impedir visitas familiares e assistência jurídica',
      'Aplicar sanções corporais sem processo disciplinar'
    ],
    correta: 1,
    explicacao: 'Os presos em prisão preventiva gozam de presunção de inocência e devem permanecer separados dos condenados, respeitando também a separação por sexo.'
  },

  // GEOGRAFIA & ATUALIDADE
  {
    id: 'q-geo-1',
    disciplina: 'Geografia & Atualidade',
    orgao: 'Geral',
    enunciado: 'Qual é o ponto mais elevado do território angolano, situado na província do Huambo?',
    opcoes: [
      'Serra da Leba',
      'Morro do Moco (2.620 m)',
      'Pedras Negras de Pungo Andongo',
      'Tundavala'
    ],
    correta: 1,
    explicacao: 'O Morro do Moco, localizado no município do Londuimbali (província do Huambo), é o ponto culminante de Angola com 2.620 metros de altitude.'
  },
  {
    id: 'q-geo-2',
    disciplina: 'Geografia & Atualidade',
    orgao: 'Geral',
    enunciado: 'Com quantos países Angola partilha fronteira terrestre?',
    opcoes: [
      '2 países (Namíbia e Zâmbia)',
      '3 países (RDC, Zâmbia e Namíbia)',
      '4 países (República do Congo, RDC, Zâmbia e Namíbia)',
      '5 países (Gabão, Congo, RDC, Zâmbia e Namíbia)'
    ],
    correta: 2,
    explicacao: 'Angola faz fronteira terrestre com 4 países: República do Congo (Brazzaville, em Cabinda), República Democrática do Congo (RDC), Zâmbia e Namíbia.'
  }
];

module.exports = { QUESTIONS };

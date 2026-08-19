/* ============================================================================
   CLÍNICA BLUES — Configuração da Landing de Captura
   ----------------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar no dia a dia.
   Sem conhecimento técnico: altere textos entre aspas, adicione cupons/parceiros.
   ========================================================================== */

window.BLUES_CONFIG = {

  /* -------------------------------------------------------------------------
     1) AJUSTES GERAIS
     ---------------------------------------------------------------------- */

  // Número de WhatsApp da clínica que RECEBE os leads (formato internacional,
  // só dígitos: 55 + DDD + número). Confirme que este número tem WhatsApp ativo.
  whatsappNumber: "5531995979065",

  // URL do webhook que armazena o lead e envia ao CRM (Make / Zapier / n8n).
  // Deixe "" (vazio) para funcionar só localmente (modo demonstração).
  // Ex.: "https://hook.us1.make.com/xxxxxxxxxxxxxxxx"
  webhookUrl: "",

  // ARMAZÉM CENTRAL (Google Sheets via Apps Script). Cole aqui a URL /exec.
  // Enquanto vazio, o site funciona normal e o painel usa só o navegador.
  storeUrl: "https://script.google.com/macros/s/AKfycby9IWx93KUdyfGjmz2WO11pssI6NZvLuRU6KaiIGN2beAPjn-CTipoBdbDmDeREFdJWUw/exec",
  // Chave pública de escrita (deve ser igual ao WRITE_KEY do Code.gs).
  storeWriteKey: "blues-site-2026",

  // Link da Política de Privacidade (LGPD).
  privacyUrl: "https://www.clinicablues.com.br/politica-de-privacidade",

  // Valor do benefício (DESCONTO) concedido ao PACIENTE por cupom válido (em reais).
  // Aplicado na consulta médica quando a consulta é realizada.
  defaultBenefit: 50,

  // Valor da COMISSÃO paga ao PARCEIRO por indicação (em reais).
  // Regra: a comissão só é devida quando a CONSULTA É REALIZADA.
  // Consulta apenas agendada (não realizada) NÃO gera comissão.
  // (Este valor é interno — não aparece para o paciente, só no painel.)
  partnerCommission: 100,

  // Instagram / site institucional (usados no CTA "Conhecer a Clínica Blues").
  institutionalUrl: "https://www.clinicablues.com.br",
  instagramUrl: "https://instagram.com/clinicablues",

  // Endereço público da landing (usado para gerar os links dos parceiros no painel).
  campaignBaseUrl: "https://campanha.clinicablues.com.br",


  /* -------------------------------------------------------------------------
     2) LINHAS DE CUIDADO (Etapa 1 e 2)
     - label: nome grande no card
     - desc:  frase curta abaixo do título
     - icon:  emoji exibido no card
     - value: parágrafo personalizado mostrado na Etapa 2 (gerar valor).
              Linguagem sempre condicional: "podem ser utilizados",
              "quando indicados", "dependendo da avaliação".
     ---------------------------------------------------------------------- */
  careLines: [
    {
      id: "emagrecimento",
      label: "Emagrecimento e composição corporal",
      desc: "Emagrecer, reduzir medidas e melhorar composição corporal.",
      icon: "⚖️",
      value: "Existem diferentes caminhos para emagrecer com saúde. Na Blues, a jornada pode combinar avaliação médica, acompanhamento nutricional, avaliação metabólica, análise de composição corporal, tecnologias corporais e estratégias para manutenção do resultado — dependendo da avaliação de cada paciente. O primeiro passo é entender o seu caso."
    },
    {
      id: "lipedema",
      label: "Lipedema",
      desc: "Controle dos sintomas, redução de volume e qualidade de vida.",
      icon: "🦵",
      value: "O cuidado com o lipedema costuma ser multidisciplinar. Na Blues, o acompanhamento pode envolver avaliação médica especializada, terapias para controle dos sintomas, tecnologias e orientações de estilo de vida — quando indicados. O primeiro passo é compreender o seu quadro."
    },
    {
      id: "estetica-facial",
      label: "Estética facial",
      desc: "Rejuvenescimento, flacidez, manchas, textura e harmonia facial.",
      icon: "✨",
      value: "Rosto é individual — e o plano também. Na Blues, o tratamento facial pode combinar avaliação médica, tecnologias e procedimentos como bioestimuladores, lasers e protocolos para flacidez, manchas e textura, quando indicados. O primeiro passo é entender o que você deseja melhorar."
    },
    {
      id: "estetica-corporal",
      label: "Estética corporal",
      desc: "Flacidez, gordura localizada, celulite e definição corporal.",
      icon: "💪",
      value: "Para o corpo, diferentes recursos podem trabalhar juntos. Na Blues, o plano pode combinar avaliação, tecnologias corporais, tratamentos de flacidez e estratégias para gordura localizada e celulite — dependendo da avaliação de cada paciente. O primeiro passo é entender o seu objetivo."
    },
    {
      id: "cabelo",
      label: "Cabelo e couro cabeludo",
      desc: "Queda, afinamento, fortalecimento e saúde capilar.",
      icon: "💈",
      value: "Existem diferentes caminhos para cuidar da saúde capilar. Na Blues, o tratamento pode combinar avaliação médica, tecnologias, medicamentos e procedimentos como MMP, LED e PRP, dependendo da necessidade de cada paciente. O primeiro passo é entender o seu caso."
    },
    {
      id: "dor",
      label: "Dor e articulações",
      desc: "Coluna, joelhos, ombros e outras dores musculoesqueléticas.",
      icon: "🩹",
      value: "Dor tem causas diferentes — e o cuidado acompanha isso. Na Blues, a abordagem pode combinar avaliação médica, procedimentos e tecnologias para dor e reabilitação, quando indicados. O primeiro passo é investigar a origem do seu desconforto."
    },
    {
      id: "varizes",
      label: "Varizes e circulação",
      desc: "Vasinhos, varizes, desconforto e saúde vascular.",
      icon: "🩸",
      value: "A saúde vascular pede avaliação individual. Na Blues, o cuidado pode combinar avaliação médica, tratamentos para vasinhos e varizes e orientações de circulação, dependendo do seu quadro. O primeiro passo é entender o seu caso."
    },
    {
      id: "longevidade",
      label: "Longevidade e qualidade de vida",
      desc: "Prevenção, disposição, acompanhamento e saúde ao longo dos anos.",
      icon: "🌿",
      value: "Viver bem por mais tempo é um plano construído aos poucos. Na Blues, a jornada de longevidade pode combinar avaliação médica, exames, acompanhamento e estratégias de prevenção e disposição — pensados para você. O primeiro passo é entender o seu momento."
    },
    {
      id: "hormonal",
      label: "Saúde hormonal",
      desc: "Metabolismo, sintomas hormonais e acompanhamento individualizado.",
      icon: "🧬",
      value: "O equilíbrio hormonal é individual. Na Blues, o acompanhamento pode envolver avaliação médica, exames e estratégias personalizadas para metabolismo e sintomas hormonais, quando indicados. O primeiro passo é entender o que você sente."
    },
    {
      id: "enxaqueca",
      label: "Enxaqueca e dores de cabeça",
      desc: "Investigação e estratégias de controle.",
      icon: "🧠",
      value: "Dores de cabeça recorrentes merecem investigação. Na Blues, o cuidado pode combinar avaliação médica e estratégias de controle da enxaqueca, dependendo da avaliação de cada paciente. O primeiro passo é entender o seu histórico."
    },
    {
      id: "outros",
      label: "Quero conhecer outras possibilidades",
      desc: "Conte para a Blues o que você deseja melhorar.",
      icon: "💙",
      value: "A Blues reúne mais de 30 especialidades e mais de 20 tecnologias que podem ser combinadas de formas diferentes. Conte para a nossa equipe o que você deseja melhorar e mostramos quais caminhos podem existir para o seu caso."
    }
  ],


  /* -------------------------------------------------------------------------
     3) CUPONS / PARCEIROS
     - coupon:     código que o paciente digita (MAIÚSCULAS, sem espaço)
     - slug:       usado no link curto ?ref=slug (opcional)
     - name:       nome do parceiro (aparece no relatório)
     - status:     "ativo" ou "inativo"
     - benefit:    DESCONTO ao cliente em reais (se vazio, usa defaultBenefit)
     - commission: COMISSÃO ao parceiro em reais (se vazio, usa partnerCommission)
     - expires:    data de expiração "AAAA-MM-DD" ou null (sem expiração)
     - maxUses:    número máximo de usos ou null (ilimitado)

     DICA: você pode gerenciar tudo isso pela aba "Parceiros" no painel (admin.html) —
     lá dá para adicionar parceiro, definir desconto e comissão de cada um, pegar o link
     individual e baixar o config.js já atualizado para publicar.

     Link individual do parceiro (cupom já aplicado):
        https://campanha.clinicablues.com.br/?cupom=JOAO50
        https://campanha.clinicablues.com.br/?ref=joao
     ---------------------------------------------------------------------- */
  partners: [
    { coupon: "JOAO50",     slug: "joao",  name: "João Silva",   status: "ativo", benefit: 50, commission: 100, expires: null, maxUses: null },
    { coupon: "MARIA50",    slug: "maria", name: "Maria Souza",  status: "ativo", benefit: 50, commission: 100, expires: null, maxUses: null },
    { coupon: "SALAOANA50", slug: "ana",   name: "Salão Ana",    status: "ativo", benefit: 50, commission: 100, expires: null, maxUses: null },
    { coupon: "PEDRO50",    slug: "pedro", name: "Pedro Lima",   status: "ativo", benefit: 50, commission: 100, expires: null, maxUses: null }
  ]
};

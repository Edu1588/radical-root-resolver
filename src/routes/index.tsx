import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import mentor from "@/assets/mentor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Empresário Radical | Mentoria, Imersões e Palestras" },
      {
        name: "description",
        content:
          "Gestão que vai à raiz do negócio: mentoria empresarial, imersões de decisão crítica e palestras corporativas para transformar problemas em decisões e decisões em resultado.",
      },
      { property: "og:title", content: "Empresário Radical | Mentoria, Imersões e Palestras" },
      {
        property: "og:description",
        content:
          "Sua empresa pode vender e não ter margem. O Empresário Radical vai à raiz para transformar decisões em resultado.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const nav = [
  { id: "raiz", label: "Sintoma vs. Raiz" },
  { id: "radical", label: "Ser Radical" },
  { id: "autoridade", label: "Autoridade" },
  { id: "diagnostico", label: "Diagnóstico" },
  { id: "solucoes", label: "Soluções" },
  { id: "faq", label: "FAQ" },
];

const sintomas = [
  "Mais vendas com margem errada aumentam o esforço, não necessariamente o lucro.",
  "Mais pessoas sem processos aumentam a estrutura, não necessariamente a produtividade.",
  "Mais clientes sem controle aumentam o faturamento, mas também o problema de caixa.",
  "Empresa que depende do dono para tudo até cresce. Mas dificilmente cresce saudável.",
];

const cenarios = [
  "Vende, fatura e movimenta, mas o dinheiro nunca sobra.",
  "A empresa cresceu, mas os controles não acompanharam.",
  "Existe equipe, mas tudo ainda chega e depende do dono.",
  "Existe oportunidade no mercado, mas falta estrutura interna.",
];

const checklist = [
  "Minha empresa vende, mas o dinheiro não sobra.",
  "Crescemos e perdemos parte do controle.",
  "Minha equipe existe, mas decisões demais dependem de mim.",
  "Temos números, mas não os transformamos em decisões.",
  "Precisamos recuperar margem e organizar o caixa.",
  "Sócios ou lideranças precisam alinhar a direção.",
  "Existe uma decisão importante que estamos adiando.",
  "Estamos preparados para crescer, mas precisamos estruturar o próximo ciclo.",
  "Minha equipe precisa mudar comportamento e performance.",
];

const solucoes = [
  {
    tag: "Acompanhamento",
    title: "Mentoria Empresarial",
    lead: "Sua empresa não precisa de mais informação. Precisa transformar informação em decisão.",
    body: "Acompanhamento estratégico para reorganizar a operação, recuperar controle e construir uma empresa capaz de crescer com gestão, margem e direção. Trabalhamos caixa, pessoas, processos, indicadores e decisões.",
    note: "Não é uma aula sobre como administrar empresas. É um trabalho sobre a sua empresa.",
    formato: "Ciclos de 3 a 6 meses.",
    foco: "Gestão, acompanhamento e execução.",
    cta: "Quero conhecer a Mentoria",
    accent: "red" as const,
  },
  {
    tag: "Decisão Crítica",
    title: "Consultoria e Imersões",
    lead: "Às vezes sua empresa não precisa de mais uma reunião. Precisa parar tudo e resolver.",
    body: "Intervenção estratégica para identificar rapidamente gargalos, confrontar problemas e sair da sala com decisões tomadas e uma rota clara de execução.",
    note: "Números e processos na mesa. Entramos com perguntas. Saímos com decisões.",
    formato: "1 a 2 dias intensivos.",
    foco: "Sócios, conselho e lideranças.",
    cta: "Colocar minha empresa na mesa",
    accent: "blue" as const,
  },
  {
    tag: "Cultura e Liderança",
    title: "Palestras Corporativas",
    lead: "Uma palestra pode ocupar uma hora. Ou mudar a forma como uma equipe pensa o negócio.",
    body: "Visão construída no mundo real dos negócios. Gestão, vendas, liderança, comportamento e resultado tratados sem discurso pronto e sem teoria distante da realidade.",
    note: "Fazer as pessoas saírem pensando e agindo diferente de quando entraram.",
    formato: "Convenções e In-company.",
    foco: "Comportamento e performance.",
    cta: "Solicitar proposta de palestra",
    accent: "red" as const,
  },
];

const processo = [
  { n: "01", t: "Diagnóstico", d: "Entender sem maquiar números. Separar causas de sintomas. Definir o que precisa ser enfrentado." },
  { n: "02", t: "Decisão", d: "Transformar diagnóstico em decisões claras. Responsáveis, prazos e indicadores." },
  { n: "03", t: "Execução", d: "Acompanhar impacto e corrigir rota. Construir crescimento sobre uma operação mais saudável." },
];

const cases = [
  {
    kpi: "Retomada de Caixa em 45 Dias",
    title: "Recuperação de Caixa e Processos no Varejo",
    ctx: "Rede de lojas enfrentando estagnação nas vendas e margens espremidas.",
    diag: "Estoque mal dimensionado e equipe de vendas sem acompanhamento diário de metas.",
    inter: "Reestruturação da rotina da gerência, metas diárias e liquidação estratégica de estoque.",
    res: "Aumento rápido no fluxo de caixa e retomada da capacidade de investimento.",
  },
  {
    kpi: "Independência do Dono",
    title: "Escala e Gestão de Pessoas",
    ctx: "Empresa de serviços estagnada no crescimento por dependência exclusiva do dono.",
    diag: "Falta de delegação, lideranças não preparadas e ausência de indicadores operacionais.",
    inter: "Treinamento intensivo da liderança imediata e implementação de painéis de controle.",
    res: "O dono retomou o papel estratégico e a empresa abriu duas filiais no mesmo semestre.",
  },
  {
    kpi: "Estancamento da Queda em 45 Dias",
    title: "Sobrevivência em Cenário de Crise",
    ctx: "Comércio local perdendo clientes rapidamente para novos concorrentes na região.",
    diag: "Posicionamento confuso e experiência do cliente abaixo do padrão do novo mercado.",
    inter: "Mudança pragmática no atendimento, readequação do mix e corte de custos fixos.",
    res: "Estancamento da queda em 45 dias e retorno ao ponto de equilíbrio financeiro.",
  },
];

const faq = [
  {
    q: "A Mentoria Empresarial é indicada para qualquer empresa?",
    a: "A base do trabalho é gestão empresarial, mas a adequação depende do momento, porte, desafio e disponibilidade para executar. Após entender seu cenário, indicaremos se a Mentoria é o caminho adequado.",
  },
  {
    q: "Qual é a diferença entre Mentoria e Imersão?",
    a: "A Mentoria acompanha decisões e execução ao longo de ciclos de 3 a 6 meses. A Imersão concentra diagnóstico, alinhamento e decisões em 1 a 2 dias. Em alguns casos, uma pode conduzir à outra.",
  },
  {
    q: "Qual é a duração da Mentoria?",
    a: "O formato-base prevê ciclos de 3 a 6 meses, definidos conforme o diagnóstico e a proposta aprovada.",
  },
  {
    q: "Como contratar uma palestra?",
    a: "Envie data, cidade, público, tema, objetivo e formato do evento. A equipe avaliará disponibilidade e enviará uma proposta personalizada.",
  },
  {
    q: "Como saber qual solução escolher?",
    a: "Preencha o formulário com o momento da empresa. A equipe analisa as informações e orienta o próximo movimento, sem obrigar você a escolher uma solução antes da conversa.",
  },
];

const temas = ["Gestão", "Vendas", "Finanças", "Liderança", "Estratégia", "Empreendedorismo"];

function Landing() {
  const root = useRef<HTMLDivElement>(null);
  const [marcados, setMarcados] = useState<number[]>([]);
  const [aberta, setAberta] = useState<number | null>(0);

  useEffect(() => {
    let ctx: { revert: () => void } | undefined;
    let cancelled = false;

    (async () => {
      const [{ default: gsap }, { ScrollTrigger }, anime] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        import("animejs"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      const animate = (anime as unknown as { animate: Function }).animate;

      ctx = gsap.context(() => {
        gsap.set(".reveal", { opacity: 0, y: 28, filter: "blur(14px)" });

        gsap.to(".hero-reveal", {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.1,
        });

        gsap.utils.toArray<HTMLElement>(".reveal:not(.hero-reveal)").forEach((el) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        });

        gsap.utils.toArray<HTMLElement>(".aura").forEach((el, i) => {
          gsap.to(el, {
            xPercent: i % 2 ? -12 : 12,
            yPercent: i % 2 ? 10 : -10,
            duration: 9 + i,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      }, root);

      if (typeof animate === "function") {
        animate(".hero-word", {
          opacity: [0, 1],
          filter: ["blur(16px)", "blur(0px)"],
          translateY: [24, 0],
          delay: (_: unknown, i: number) => 200 + i * 70,
          duration: 900,
          ease: "outExpo",
        });
        animate(".pulse-dot", {
          scale: [1, 1.6],
          opacity: [0.9, 0],
          duration: 1600,
          loop: true,
          ease: "outQuad",
        });
      }
    })();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  const toggle = (i: number) =>
    setMarcados((m) => (m.includes(i) ? m.filter((x) => x !== i) : [...m, i]));

  return (
    <div ref={root} className="relative min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      {/* Fundos */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="aura -left-40 top-[-10rem] h-[34rem] w-[34rem] bg-primary/45" />
        <div className="aura right-[-12rem] top-[30rem] h-[36rem] w-[36rem] bg-secondary/45" />
        <div className="aura bottom-[-14rem] left-1/3 h-[32rem] w-[32rem] bg-secondary/30" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 4%) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse at 50% 0%, black, transparent 75%)",
          }}
        />
      </div>

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3">
          <a href="#topo" className="flex items-center gap-2 text-sm font-extrabold tracking-tight">
            <span className="relative flex h-2.5 w-2.5">
              <span className="pulse-dot absolute inset-0 rounded-full bg-primary" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            EMPRESÁRIO <span className="text-gradient">RADICAL</span>
          </a>
          <nav className="hidden items-center gap-6 text-xs font-medium text-muted-foreground lg:flex">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            className="rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            style={{ background: "var(--grad-radical)" }}
          >
            Falar com a equipe
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="topo" className="relative mx-auto max-w-6xl px-6 pb-24 pt-40 lg:pt-52">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="reveal hero-reveal glass mb-7 inline-flex rounded-full px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Mentorias • Imersões • Palestras Corporativas
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
              {"Seu problema pode não ser falta de vendas.".split(" ").map((w, i) => (
                <span key={i} className="hero-word mr-[0.28em] inline-block opacity-0">
                  {w === "vendas." ? <span className="text-gradient">vendas.</span> : w}
                </span>
              ))}
            </h1>
            <p className="reveal hero-reveal mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Talvez sua empresa venda e não tenha margem. Cresça e não tenha gestão. Tenha equipe e
              continue dependendo de você.
            </p>
            <p className="reveal hero-reveal mt-4 max-w-xl text-base leading-relaxed text-foreground/90">
              O Empresário Radical vai à raiz do negócio para transformar problemas em decisões e
              decisões em resultado.
            </p>
            <div className="reveal hero-reveal mt-9 flex flex-wrap gap-3">
              <a
                href="#diagnostico"
                className="glow-red rounded-full px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
                style={{ background: "var(--grad-radical)" }}
              >
                QUERO ENTENDER MEU CENÁRIO
              </a>
              <a
                href="#solucoes"
                className="glass rounded-full px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-white/10"
              >
                Ver soluções
              </a>
            </div>
          </div>

          <div className="reveal hero-reveal relative">
            <div className="glass-strong glow-blue overflow-hidden rounded-[2rem] p-2">
              <img
                src={mentor}
                alt="Edmar, mentor do Empresário Radical"
                width={1024}
                height={1280}
                className="h-full w-full rounded-[1.6rem] object-cover"
              />
            </div>
            <div className="glass absolute -bottom-6 -left-6 max-w-[15rem] rounded-2xl p-4 text-xs leading-relaxed text-muted-foreground">
              <span className="block text-sm font-bold text-foreground">Radical vem de raiz.</span>
              Menos achismo. Mais gestão. Mais decisão. Mais resultado.
            </div>
          </div>
        </div>
      </section>

      {/* Sintoma vs Raiz */}
      <Section id="raiz" kicker="Sintoma vs. Raiz" title="Vender mais não conserta uma empresa desorganizada.">
        <p className="reveal max-w-3xl text-muted-foreground">
          Às vezes, só faz o problema crescer.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {sintomas.map((s, i) => (
            <div key={i} className="reveal glass rounded-2xl p-6 transition-transform hover:-translate-y-1">
              <span className="text-xs font-bold tracking-widest text-primary">0{i + 1}</span>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">{s}</p>
            </div>
          ))}
        </div>
        <p className="reveal mt-10 max-w-3xl leading-relaxed text-muted-foreground">
          Muitos empresários passam anos tentando resolver os sintomas. Buscam mais vendas quando
          precisam recuperar margem. Cobram mais da equipe quando falta processo. Cortam custos
          quando falta gestão. Trabalham mais quando deveriam decidir melhor.
        </p>
        <p className="reveal mt-4 text-lg font-semibold">
          Antes de buscar a próxima solução, é preciso descobrir qual é o problema certo.
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {cenarios.map((c) => (
            <div key={c} className="reveal flex items-start gap-3 rounded-xl border border-glass-border bg-glass p-4 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              {c}
            </div>
          ))}
        </div>
        <p className="reveal mt-10 text-xl font-extrabold">
          É aqui que começa uma gestão radical. <span className="text-gradient">Não no sintoma. Na raiz.</span>
        </p>
      </Section>

      {/* O que é ser Radical */}
      <Section id="radical" kicker="O que é ser Radical" title="Radical não é sobre correr riscos. É sobre ir à raiz.">
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="reveal glass-strong rounded-3xl p-8 leading-relaxed text-muted-foreground">
            <p>
              A palavra radical vem de raiz. E é exatamente ali que os problemas de uma empresa
              precisam ser enfrentados.
            </p>
            <p className="mt-4">
              Porque o caixa travado, a queda nas vendas, a equipe improdutiva e a falta de lucro
              podem ser consequência. Enquanto você tenta corrigir o que aparece, a verdadeira causa
              pode continuar crescendo por baixo da operação.
            </p>
          </div>
          <div className="reveal glass-strong rounded-3xl p-8 leading-relaxed text-muted-foreground">
            <p>
              Ser um Empresário Radical é ter coragem para olhar além dos sintomas. É colocar os
              números na mesa. Questionar decisões. Rever processos. Enfrentar o que não funciona.
              Mudar o que precisa ser mudado. E construir uma empresa onde o crescimento seja
              consequência de uma gestão melhor.
            </p>
            <p className="mt-6 text-lg font-bold text-foreground">
              Menos achismo. Mais gestão. Mais decisão. Mais resultado.
            </p>
          </div>
        </div>
      </Section>

      {/* Autoridade */}
      <Section id="autoridade" kicker="A Autoridade" title="Gestão empresarial não se aprende apenas nos livros.">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal glass overflow-hidden rounded-3xl p-2">
            <img
              src={mentor}
              alt="Edmar, empresário e mentor"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full rounded-[1.4rem] object-cover"
            />
          </div>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p className="reveal">
              Também se aprende pagando folha, enfrentando crises e tomando decisões quando não
              existe resposta pronta.
            </p>
            <p className="reveal">
              Antes do mentor, existe o empresário. Edmar não construiu sua visão de negócios apenas
              estudando empresas. Construiu vivendo uma. Sua história passa pelo varejo, pela gestão,
              pela liderança de pessoas, pelo crescimento empresarial e pelas decisões difíceis de
              quem empreende de verdade.
            </p>
            <p className="reveal">
              Com o tempo, a experiência de campo se transformou na capacidade de olhar além do que
              está acontecendo e buscar por que está acontecendo. Dessa forma de pensar nasceu o
              Empresário Radical — não para ensinar a partir de teorias distantes da realidade, mas
              para compartilhar princípios, métodos e decisões de quem conhece o outro lado da mesa.
            </p>
            <p className="reveal font-semibold text-foreground">
              Porque existe uma diferença enorme entre conhecer gestão e precisar fazer uma empresa
              funcionar.
            </p>
            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {[
                "Empresa que depende de uma pessoa ainda não construiu gestão.",
                "Problema que não aparece nos números aparece no caixa.",
                "Decisão difícil adiada normalmente se torna um problema mais caro.",
              ].map((t) => (
                <p key={t} className="reveal glass rounded-2xl p-4 text-xs leading-relaxed text-foreground/85">
                  {t}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Diagnóstico */}
      <Section id="diagnostico" kicker="Diagnóstico" title="Em que momento sua empresa está?">
        <p className="reveal max-w-2xl text-muted-foreground">
          Nem toda empresa precisa da mesma solução. Mas existem sinais que mostram quando alguma
          coisa precisa mudar. Assinale as opções que refletem a sua realidade hoje:
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {checklist.map((c, i) => {
            const on = marcados.includes(i);
            return (
              <button
                key={c}
                type="button"
                onClick={() => toggle(i)}
                className={`reveal flex items-start gap-3 rounded-2xl p-5 text-left text-sm transition-all duration-300 ${
                  on ? "glass-strong glow-red translate-x-1 text-foreground" : "glass text-muted-foreground hover:bg-white/[0.08]"
                }`}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[0.65rem] font-bold transition-colors ${
                    on ? "border-transparent text-primary-foreground" : "border-glass-border"
                  }`}
                  style={on ? { background: "var(--grad-radical)" } : undefined}
                >
                  {on ? "✓" : ""}
                </span>
                {c}
              </button>
            );
          })}
        </div>
        <div className="reveal glass-strong mt-8 flex flex-col items-start gap-5 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm text-muted-foreground">
            {marcados.length > 0
              ? `Você reconheceu sua empresa em ${marcados.length} ${marcados.length === 1 ? "situação" : "situações"}. Talvez seja hora de olhar para a raiz.`
              : "Se você reconheceu sua empresa em uma ou mais situações, talvez seja hora de olhar para a raiz."}
          </p>
          <a
            href="#contato"
            className="glow-red shrink-0 rounded-full px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
            style={{ background: "var(--grad-radical)" }}
          >
            QUERO ENTENDER MEU CENÁRIO
          </a>
        </div>
      </Section>

      {/* Soluções */}
      <Section id="solucoes" kicker="Soluções" title="Qual é o próximo movimento da sua empresa?">
        <p className="reveal max-w-2xl text-muted-foreground">
          Algumas empresas precisam de acompanhamento para reorganizar a gestão. Outras precisam
          parar, diagnosticar e decidir rapidamente. E algumas precisam transformar a mentalidade e a
          performance das pessoas. Três caminhos. Um mesmo princípio: chegar à raiz.
        </p>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {solucoes.map((s) => (
            <article
              key={s.title}
              className={`reveal glass-strong flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-2 ${
                s.accent === "red" ? "hover:glow-red" : "hover:glow-blue"
              }`}
            >
              <span
                className={`w-fit rounded-full px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest ${
                  s.accent === "red" ? "bg-primary/15 text-primary" : "bg-secondary/20 text-secondary"
                }`}
              >
                {s.tag}
              </span>
              <h3 className="mt-4 text-xl font-extrabold">{s.title}</h3>
              <p className="mt-3 text-sm font-semibold text-foreground/90">{s.lead}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <p className="mt-3 text-sm italic text-muted-foreground">{s.note}</p>
              <dl className="mt-6 space-y-1 border-t border-glass-border pt-4 text-xs text-muted-foreground">
                <div className="flex gap-2">
                  <dt className="font-bold text-foreground">Formato:</dt>
                  <dd>{s.formato}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="font-bold text-foreground">Foco:</dt>
                  <dd>{s.foco}</dd>
                </div>
              </dl>
              <a
                href="#contato"
                className="mt-6 rounded-full border border-glass-border px-5 py-3 text-center text-sm font-semibold transition-colors hover:bg-white/10"
              >
                {s.cta}
              </a>
            </article>
          ))}
        </div>
      </Section>

      {/* Processo */}
      <Section id="processo" kicker="O Processo" title="Da raiz ao resultado.">
        <p className="reveal text-muted-foreground">
          Diagnóstico sem execução vira relatório. Execução sem diagnóstico vira tentativa.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {processo.map((p) => (
            <div key={p.n} className="reveal glass relative overflow-hidden rounded-3xl p-7">
              <span className="text-5xl font-extrabold text-gradient">{p.n}</span>
              <h3 className="mt-3 text-lg font-bold">{p.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Cases */}
      <Section id="cases" kicker="Avaliações e Cases" title="Resultados construídos na raiz.">
        <p className="reveal text-xs uppercase tracking-widest text-muted-foreground">
          Dados em validação
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="reveal glass-strong rounded-3xl p-7">
              <p className="text-sm font-extrabold text-gradient">{c.kpi}</p>
              <h3 className="mt-2 text-base font-bold">{c.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li><b className="text-foreground">Contexto:</b> {c.ctx}</li>
                <li><b className="text-foreground">Diagnóstico:</b> {c.diag}</li>
                <li><b className="text-foreground">Intervenção:</b> {c.inter}</li>
                <li><b className="text-foreground">Resultado:</b> {c.res}</li>
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Hub */}
      <Section id="hub" kicker="Hub de Conteúdos" title="Conhecimento para quem está do outro lado da mesa.">
        <p className="reveal text-muted-foreground">Artigos, vídeos, insights e aulas sobre:</p>
        <div className="reveal mt-6 flex flex-wrap gap-3">
          {temas.map((t) => (
            <span key={t} className="glass rounded-full px-5 py-2 text-sm text-foreground/90">
              {t}
            </span>
          ))}
        </div>
        <a
          href="#contato"
          className="reveal mt-8 inline-block rounded-full border border-glass-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
        >
          Explorar todos os conteúdos
        </a>
      </Section>

      {/* FAQ */}
      <Section id="faq" kicker="Perguntas Frequentes" title="O que costumam perguntar antes de começar.">
        <div className="mt-8 space-y-3">
          {faq.map((f, i) => (
            <div key={f.q} className="reveal glass overflow-hidden rounded-2xl">
              <button
                type="button"
                onClick={() => setAberta(aberta === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left text-sm font-semibold"
              >
                {f.q}
                <span className={`text-primary transition-transform duration-300 ${aberta === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div
                className="grid transition-all duration-500 ease-out"
                style={{ gridTemplateRows: aberta === i ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Chamada final */}
      <section id="contato" className="relative mx-auto max-w-6xl px-6 py-28">
        <div className="reveal glass-strong glow-blue relative overflow-hidden rounded-[2.5rem] p-10 text-center sm:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Chamada Final
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
            Talvez você já saiba que alguma coisa precisa mudar.{" "}
            <span className="text-gradient">A questão agora é descobrir o quê.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            O primeiro passo não é mudar tudo. É descobrir onde realmente está a raiz.
          </p>
          <a
            href="#contato"
            className="glow-red mt-9 inline-block rounded-full px-9 py-4 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
            style={{ background: "var(--grad-radical)" }}
          >
            QUERO FALAR SOBRE MINHA EMPRESA
          </a>
          <p className="mt-5 text-xs text-muted-foreground">
            Converse com nossa equipe para descobrir o caminho ideal.
          </p>
        </div>
      </section>

      <footer className="border-t border-glass-border py-10 text-center text-xs text-muted-foreground">
        <p className="font-bold text-foreground">EMPRESÁRIO RADICAL</p>
        <p className="mt-2">Mentorias • Imersões • Palestras Corporativas</p>
      </footer>
    </div>
  );
}

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl scroll-mt-28 px-6 py-20">
      <p className="reveal mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        {kicker}
      </p>
      <h2 className="reveal mb-6 max-w-3xl text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

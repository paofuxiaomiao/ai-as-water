import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView } from "framer-motion";

// Section data
const sections = [
  { id: "intro", num: "一", title: "人工智能如水" },
  { id: "agent", num: "二", title: "从聊天框到智能体" },
  { id: "generalize", num: "三", title: "模型能力为何会泛化" },
  { id: "teacher", num: "四", title: "进入小学教师的日常" },
  { id: "barrier", num: "五", title: "技术门槛正在被水流冲开" },
  { id: "harness", num: "六", title: "Harness Engineering" },
  { id: "container", num: "七", title: "从写提示词到设计容器" },
  { id: "river", num: "八", title: "上善若水" },
];

// Animated section wrapper
function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Chapter opener - ceremonial section break
function ChapterOpener({ num, title, id }: { num: string; title: string; id: string }) {
  return (
    <div id={id} className="pt-24 pb-10">
      <div className="flex items-baseline gap-3 mb-2">
        <span className="text-sm font-medium text-[#1E40AF]/60 tracking-wider">{num}</span>
        <div className="h-px flex-1 bg-gradient-to-r from-[#1E40AF]/20 to-transparent" />
      </div>
      <h2 className="font-serif text-3xl md:text-[2.5rem] font-bold text-foreground leading-tight tracking-tight">
        {title}
      </h2>
    </div>
  );
}

// Definition card - marginal note style
function DefinitionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-10 relative pl-6 border-l-[3px] border-[#1E40AF]/50">
      <div className="absolute -left-[11px] top-0 w-[19px] h-[19px] rounded-full bg-background border-[3px] border-[#1E40AF]/50" />
      <div className="text-xs font-bold text-[#1E40AF] uppercase tracking-[0.15em] mb-2">名词解释</div>
      <div className="font-serif text-lg font-semibold text-foreground mb-2">{title}</div>
      <div className="text-[0.95rem] leading-[1.8] text-foreground/70">{children}</div>
    </div>
  );
}

// Pull quote - wide editorial statement
function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-14 py-8 -mx-4 md:-mx-8 px-8 md:px-12 border-y border-[#1E40AF]/15 bg-gradient-to-r from-[#1E40AF]/[0.02] to-transparent">
      <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground/90 font-medium italic">
        {children}
      </p>
    </div>
  );
}

// Highlight blockquote
function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-10 py-5 px-6 border-l-[3px] border-[#1E40AF] bg-[#1E40AF]/[0.03] rounded-r-md">
      <p className="font-serif text-lg leading-[1.8] text-foreground/85 italic">{children}</p>
    </blockquote>
  );
}

// Case card
function CaseCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-10 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg px-6 py-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-[#1E40AF]" />
        <span className="text-xs font-bold text-[#1E40AF] uppercase tracking-[0.12em]">课堂案例</span>
      </div>
      <div className="font-serif text-base font-semibold text-foreground mb-3">{title}</div>
      <div className="text-[0.95rem] leading-[1.8] text-foreground/70">{children}</div>
    </div>
  );
}

// Prompt example card
function PromptCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 bg-[#0F172A] rounded-lg px-6 py-5 shadow-lg">
      <div className="text-xs text-white/40 font-mono mb-3 uppercase tracking-wider">Prompt</div>
      <div className="font-mono text-sm leading-[1.8] text-white/85">
        {children}
      </div>
    </div>
  );
}

// Framework comparison card
function FrameworkCard({ items }: { items: { label: string; desc: string; active?: boolean }[] }) {
  return (
    <div className="my-10 border border-[#E2E8F0] rounded-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {items.map((item, i) => (
          <div key={i} className={`p-5 text-center ${i < items.length - 1 ? 'border-b md:border-b-0 md:border-r border-[#E2E8F0]' : ''} ${item.active ? 'bg-[#1E40AF]/[0.04]' : ''}`}>
            <div className={`text-xs font-bold uppercase tracking-[0.12em] mb-2 ${item.active ? 'text-[#1E40AF]' : 'text-foreground/40'}`}>{item.label}</div>
            <div className="font-serif text-base font-medium text-foreground">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("intro");
  const [readingProgress, setReadingProgress] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    setReadingProgress(Math.min(progress, 100));
    setShowNav(scrollTop > 500);

    const sectionElements = sections.map(s => document.getElementById(s.id));
    for (let i = sectionElements.length - 1; i >= 0; i--) {
      const el = sectionElements[i];
      if (el && el.getBoundingClientRect().top <= 160) {
        setActiveSection(sections[i].id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent">
        <div className="h-full bg-[#1E40AF] transition-[width] duration-75 ease-linear" style={{ width: `${readingProgress}%` }} />
      </div>

      {/* Hero section */}
      <header className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]">
          <img src="/manus-storage/hero-water-abstract_3659eae4.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-[720px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          >
            {/* Brand mark */}
            <div className="flex items-center gap-3 mb-12">
              <img src="/manus-storage/logo-water-flow_29ae1617.png" alt="人工智能如水" className="w-10 h-10" />
              <div className="h-5 w-px bg-foreground/15" />
              <span className="text-sm text-foreground/50 font-medium tracking-wide">面向小学教师与大众的 AI 智能体认知开场稿</span>
            </div>

            {/* Title */}
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-[1.1] tracking-tight mb-8">
              人工智能如水
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-foreground/50 leading-relaxed mb-8 max-w-[520px]">
              修订版 v2 · 增补代码智能体拐点与 Harness Engineering
            </p>

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-foreground/35">
              <span className="font-medium">2026.07</span>
              <span className="w-1 h-1 rounded-full bg-foreground/20" />
              <span>保留文字张力版</span>
            </div>
          </motion.div>

          {/* Epigraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="mt-16 pt-10 border-t border-foreground/8"
          >
            <p className="font-serif text-2xl md:text-3xl leading-[1.6] text-foreground/75 italic tracking-tight">
              不是先学会按钮，而是先学会看见水流。<br />
              不是把 AI 关进工具箱，而是为它修建河道。
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main content area */}
      <div className="relative max-w-[1140px] mx-auto px-6">
        <div className="flex gap-16">
          {/* Left sidebar TOC - desktop only */}
          <aside className={`hidden lg:block w-[180px] shrink-0 transition-all duration-500 ${showNav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <nav className="sticky top-12 pt-8">
              <div className="text-[10px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-5">目录</div>
              <ul className="space-y-0.5">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`group text-left w-full text-[13px] py-2 px-3 rounded transition-all duration-200 ${
                        activeSection === section.id
                          ? "text-[#1E40AF] font-semibold bg-[#1E40AF]/[0.06] border-l-2 border-[#1E40AF]"
                          : "text-foreground/45 hover:text-foreground/75 border-l-2 border-transparent"
                      }`}
                    >
                      <span className="text-[10px] mr-1.5 opacity-60">{section.num}</span>
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Article body */}
          <article className="flex-1 max-w-[680px] pb-32 article-body">
            {/* Section 1 */}
            <AnimatedSection>
              <ChapterOpener id="intro" num="一" title="人工智能如水" />
              <p>有时候，我愿意把人工智能看作一种流体。</p>
              <p>和我抱有同样看法的人，也许并不多。更多时候，我们是通过机械的学习、记忆和模仿，从一段段提示词里探索 AI 的交互逻辑。可在我看来，这就像伸手去抓住流水：我们越用力，它越从指缝间滑走。效率太低，也太容易错过 AI 真正的本质。</p>
              <p>它是流动的、可变的，而不是坚硬的实体；它不是一套僵化固定的架构，也不是一台安静等待指令的机器。它更像水，像雾，像一场正在逼近的潮汐：你看不见它完整的形状，却能感到它正在改变周围的一切。</p>
              <p>很多我们熟悉的东西，也有这种流动性。音乐、电影、脑海深处的思想、各类艺术作品，甚至一节好课，都是如此。一个老师备课时，最初也许只有一个模糊的念头；经过查阅、推敲、试讲、修改，才慢慢生长成一节真正能够抵达学生的课。</p>
              <p>所谓提示词，也不过是这个过程的新名字：我们用语言为未知开路，用一句一句任务说明，把混沌引向清晰。</p>

              <DefinitionCard title="提示词">
                提示词并不神秘。它就是我们对 AI 发出的"任务说明"。例如："请帮我设计一节三年级科学课，主题是水的三态，要求有生活导入、安全实验、三个追问问题和观察记录表。"这句话，就是提示词。
              </DefinitionCard>

              <p>然而，人工智能也不只是机器。机器通常有固定功能，而 AI 会在语言、材料、任务、场景之间不断迁移。它也不是鱼类这样的生物物种，但它又确实带有某种"活物般"的应答：会试探，会修正，会根据环境改变姿态。</p>
              <p>与其急着把它塞进"工具"或"生命"的旧盒子，不如说它正处在二者之间，像一种新的文化，一座正在形成的语言孤岛。</p>
              <p>所以我认为，最大的难题，并不是让师生理解、接纳并熟记这些复杂的新知识体系。真正的挑战，是应对未知：我们该如何看待那些无形、无法触及、完全不可预判的事物？</p>
              <p>它闯进课堂，闯进作业，闯进备课本，闯进家长群，也闯进每一个孩子未来可能使用的世界。这才是我们必须首先讨论的问题：不是"AI 怎么用"，而是<strong>"当知识开始流动，我们怎样重新做老师"</strong>。</p>

              <PullQuote>
                让我们把知识理解成流动之物，如水奔涌，如浪潮翻涌。新的 AI 理念，会拓宽我们的眼界，丰富我们的感知，也会迫使我们付诸更多实践。
              </PullQuote>
            </AnimatedSection>

            {/* Section 2 */}
            <AnimatedSection>
              <ChapterOpener id="agent" num="二" title="从聊天框到智能体：2025 年末的拐点" />
              <p>首先，我们来聊聊 AI 智能体。它是理解这一轮变化的核心关键点。</p>
              <p>上一版我把"2025 年末代码类智能体迎来关键拐点、质的飞跃"处理得比较保守。现在看，这个判断应该保留，只是需要讲清楚：所谓"质的飞跃"，不是说 AI 突然变成了真正的人，也不是说它从此永远正确；而是说，代码类智能体开始从"帮你写几段代码"，走向<strong>"在一个环境里持续做事"</strong>。</p>
              <p>这个变化非常关键。过去，我们习惯把人工智能理解成一个聊天框：你问一句，它答一句；你给一个问题，它给一个答案。那是旧阶段的 AI，像一口井，站在旁边打水就可以。</p>
              <p><strong>但智能体的出现，意味着水开始流动。</strong></p>

              <DefinitionCard title="AI 智能体">
                可以先把它理解为一个"会执行任务的 AI 助手"。普通聊天 AI 更像会回答问题的同桌；智能体更像会拆任务、会查资料、会整理文件、会调用工具、会交付结果的数字助教。它的核心不只是"说"，而是围绕一个目标持续行动。
              </DefinitionCard>

              <p>为什么说 2025 年末至 2026 年春值得单独拿出来讲？因为一批代码类智能体和前沿模型，把"持续执行"推到了更清晰的位置。安德烈·卡帕西在 2026 年初谈到，Claude 与 Codex 等智能体能力在 2025 年 12 月前后跨过某种连贯性阈值，引发了软件工程中的"phase shift"。</p>
              <p>以 Claude Opus 4.6 为例，它被大量开发者和企业场景用于复杂、多步骤、长上下文任务：读大型代码库、拆分子任务、调用工具、使用子智能体、处理跨仓库问题。再看 GPT-5.5，它的官方定位已经不只是"回答问题"，而是面向 agentic coding、computer use、knowledge work 这类需要跨上下文推理和长时间行动的场景。Codex 则更直接：它以软件工程智能体的形式读写文件、运行测试、提交修改，并留下日志和测试证据。</p>
              <p>这就是为什么我愿意把这一轮变化称作"拐点"：AI 不再只是写下答案，而是在被允许的环境里推进流程。</p>

              <PullQuote>
                从教育角度看，代码类智能体的重要性不在于每位老师都要写代码，而在于代码场景训练出的四种能力正在泛化：拆解问题、调用工具、验证结果、修复错误。
              </PullQuote>

              <p>这四种能力一旦离开代码场景，进入备课、教研、文档、数据整理和课堂设计，人工智能就不再只是"帮我写一段话"的机器，而成为"帮我推进一项工作"的外部思考系统。</p>
              <p>这并不意味着它已经无所不能。恰恰相反，越是能行动的 AI，越需要清晰的目标、边界和监督。它像一把钥匙，也像一柄利刃：它能打开过去普通人难以进入的门，也可能在我们粗心时划伤手。</p>
            </AnimatedSection>

            {/* Section 3 */}
            <AnimatedSection>
              <ChapterOpener id="generalize" num="三" title="模型能力为何会泛化" />
              <p>很多老师可能会问：代码智能体的突破，和小学教育有什么关系？</p>
              <p>表面看，关系不大。老师不需要每天修复软件漏洞，也不需要提交 GitHub 代码。但如果我们只看"代码"这个外壳，就会错过真正的水势。</p>
              <p>代码任务本质上是一类高度严格的复杂任务。它要求 AI 读懂大量上下文，定位问题，制定步骤，修改文件，运行测试，发现失败，再修正。它不能只写得漂亮，还要经得起执行。换句话说，代码场景逼迫 AI 学会了一个更普遍的能力：<strong>把想法变成可检查的行动</strong>。</p>
              <p>这种能力一旦泛化到教育场景，就会出现完全不同的工作方式。</p>
              <ul>
                <li><strong>语文老师</strong>不只是让 AI 生成阅读问题，而是让它根据课文、学情和目标，生成问题梯度，并解释每个问题训练什么能力。</li>
                <li><strong>科学老师</strong>不只是让 AI 写实验步骤，而是让它检查实验是否安全、材料是否容易获得、学生观察点是否清楚。</li>
                <li><strong>班主任</strong>不只是让 AI 写通知，而是让它把家长反馈归类，区分"需要马上处理的问题"和"可以纳入长期班级建设的问题"。</li>
                <li><strong>教研组</strong>不只是让 AI 整理会议纪要，而是让它追踪不同老师的观点，形成可执行的下一步安排。</li>
              </ul>
              <p>这里的变化不是"AI 代替老师"，而是"AI 把老师从低层重复劳动中松绑"。老师真正要做的，反而更难：判断、筛选、追问、重构，以及为孩子负责。</p>

              <DefinitionCard title="泛化能力">
                泛化能力，就是一种能力从原来的场景迁移到新场景。代码智能体在软件工程里学会了"拆解-执行-检查-修正"，这些能力就可能迁移到教学设计、资料整理、活动策划和研究写作中。
              </DefinitionCard>
            </AnimatedSection>

            {/* Section 4 */}
            <AnimatedSection>
              <ChapterOpener id="teacher" num="四" title="它如何进入小学教师的日常" />
              <p>以一位小学科学老师为例。她要准备《水的三态》这一课。过去，她要自己查资料、设计实验、制作课件、准备提问，还要兼顾学生安全和课堂节奏。现在，她可以对 AI 说：</p>

              <PromptCard>
                请帮我设计一节三年级科学课，主题是水的三态。要有生活导入、安全实验、三个追问问题，以及一份学生观察记录表。语言要适合小学生。请最后列出：哪些内容需要教师现场判断，哪些内容不能交给 AI 自动决定。
              </PromptCard>

              <p>几秒钟之后，AI 可能就会给出一整套初稿。它会把课堂拆成导入、实验、观察、讨论、总结和作业。表面上看，这只是提高效率；但它背后真正改变的是：老师第一次拥有了一个可以随时调用、随时修改、随时追问的外部思考系统。</p>
              <p>它不会替代老师，但它会改变老师工作的重心。过去，老师的大量时间花在搜集、整理和排版上；未来，老师更重要的能力会变成判断、筛选、追问和重新设计。</p>
              <p>语文老师可以让 AI 生成一组阅读追问，但必须判断这些问题是否真正适合本班学生。班主任可以让 AI 整理家长反馈，但必须保护学生隐私，不能上传姓名、电话、家庭住址、成绩排名等敏感信息。数学老师可以让 AI 设计分层练习，但必须判断题目是否符合儿童认知规律。美术老师可以让 AI 生成创意灵感，但必须把审美选择权重新交还给学生。</p>
              <p>这就是 AI 与教育之间最微妙的关系：它能放大教师，却不能替教师负责；它能生成内容，却不能理解一个孩子的眼神；它能模拟教学语言，却不能真正承担教育中的爱、判断和等待。</p>

              <CaseCard title="让 AI 成为提问伙伴，而不是代写工具">
                阅读课上，老师可以让 AI 根据一篇课文提出三个问题，再让学生判断：这些问题好不好？有没有问到重点？有没有遗漏人物情感？这样，AI 不再是"替学生完成作业"的机器，而是训练学生提问、判断和表达的伙伴。
              </CaseCard>

              <p>我们再聊聊更日常的工作场景。大家经常要处理 PPT、PDF、Word、表格、活动方案、听课记录和教研材料。智能体能够帮助老师汇总信息、生成分析意见、整理格式、输出反馈文档。</p>

              <Highlight>
                AI 不是老师的替代品，而是老师的放大器。它可以提高效率，但不能替我们承担教育判断；它可以生成材料，但不能替我们理解孩子；它可以给出建议，但不能替我们负责。
              </Highlight>
            </AnimatedSection>

            {/* Section 5 */}
            <AnimatedSection>
              <ChapterOpener id="barrier" num="五" title="技术门槛正在被水流冲开" />
              <p>就拿 GitHub 上的开源项目与讨论工单来说。如果你几乎没有计算机技术基础，过去根本体会不到开源的魅力。打开 GitHub 页面，你会像被抛到一座陌生码头：满眼都是代码、分支、Issue、Pull Request、README，手足无措，无从下手。</p>

              <DefinitionCard title="GitHub 与开源">
                GitHub 可以简单理解为一个全球开发者共享代码、文档和项目的平台。"开源"就是把某些软件或资料公开出来，让更多人学习、使用、改进。老师不一定要会编程，但可以让 AI 帮你把陌生的技术页面翻译成普通人能懂的话。
              </DefinitionCard>

              <p>现在，一切正在改变。你可以把一个项目链接交给 Codex、Manus、WorkBuddy 或任意一款合适的智能体，请它解释：这个项目是做什么的？适合谁用？我应该先看哪一部分？有没有安全风险？我能不能把其中某个思路转化成课堂案例？</p>
              <p>AI 智能体不会让所有人瞬间成为工程师，但它像一位翻译，把原本封闭的技术语言翻成更可进入的普通语言。它帮普通人跨过第一道门槛，让我们有机会看见更广阔的互联网天地。</p>

              <PullQuote>
                过去，专业知识像高墙；现在，AI 正在把墙面冲刷成坡道。你仍然需要攀登，但你不再只能站在墙外仰望。
              </PullQuote>
            </AnimatedSection>

            {/* Section 6 */}
            <AnimatedSection>
              <ChapterOpener id="harness" num="六" title="Harness Engineering：为水流修建河道" />
              <p>说到这里，就必须补充一个正在变得越来越重要的概念：Harness Engineering。</p>
              <p>这个词可以暂时译作"智能体牵引工程""智能体运行框架工程"，也可以用我们这篇文章的比喻来理解：<strong>河道工程</strong>。</p>

              <DefinitionCard title="Harness Engineering">
                Harness 原本有"马具、束带、安全带、牵引装置"的意思。在智能体里，它指包裹在模型外面的整套运行系统：任务说明、工具、文件空间、记忆、权限、日志、测试、反馈循环、人工接管机制等。简单说，模型是水力，Harness 是河道、闸门、水尺和护栏。
              </DefinitionCard>

              <p>过去我们常说"提示词工程"。那更像是对水说话：请你往这里流，请你不要溅出来。后来我们又说"语境工程"：不只是说话，还要给 AI 背景、材料、例子和标准。再往后，到了智能体时代，问题就不只是"怎么说"，而是"让它在哪里运行、能拿到什么、能操作什么、错了怎么停、结果怎么验"。</p>
              <p><strong>这就是 Harness Engineering 的意义。</strong></p>

              <FrameworkCard items={[
                { label: "提示词工程", desc: "对水说话" },
                { label: "语境工程", desc: "给水源、地图和材料" },
                { label: "Harness Engineering", desc: "修河道、设闸门、放水尺", active: true },
              ]} />

              <p>这对老师同样有启发。我们未必每天都要搭建复杂系统，但我们可以用同样的思想来设计 AI 使用流程。</p>

              <CaseCard title="教师版 Harness：一次安全的 AI 备课流程">
                <div className="space-y-2 mt-2">
                  <p><strong>1. 目标：</strong>明确年级、学科、课时和教学目标。</p>
                  <p><strong>2. 材料：</strong>提供课文、课标片段或教案草稿，而不是只丢一句空话。</p>
                  <p><strong>3. 边界：</strong>说明不能代替学生作答，不能上传隐私，不能使用超龄表达。</p>
                  <p><strong>4. 检查：</strong>要求 AI 自检事实、难度、安全性和课堂可执行性。</p>
                  <p><strong>5. 人工接管：</strong>最后由老师修改，尤其是学生真实情况、课堂节奏和情感判断。</p>
                </div>
              </CaseCard>

              <PromptCard>
                你是我的备课助教。请根据我提供的材料设计一节四年级语文阅读课。要求：不替学生生成标准答案；每个问题都要说明训练目标；问题难度分为基础、提升、开放三层；最后列出可能误导学生的地方，并提醒我人工检查。
              </PromptCard>

              <p>这段话已经不只是"提示词"。它实际上为 AI 设计了一个小型 Harness：有角色、有目标、有材料要求、有边界、有输出格式，还有自我检查。水流被引导进了河道。</p>
              <p>技术领域的 Harness 还会更复杂。它可能包括文件系统，让智能体保存中间结果；包括沙盒，让 AI 运行代码但不伤害真实系统；包括日志，让人类追踪它做过什么；包括测试，让结果不是凭感觉通过，而是有证据通过；包括权限，让 AI 不能随便碰不该碰的东西。</p>
              <p>这就是为什么，智能体时代的核心能力不再只是"会不会写提示词"。真正重要的是：<strong>我们能不能把任务、材料、边界、工具和检查流程组织起来，让 AI 的流动变得可用、可控、可追踪。</strong></p>
            </AnimatedSection>

            {/* Section 7 */}
            <AnimatedSection>
              <ChapterOpener id="container" num="七" title={"从\u201c写提示词\u201d到\u201c设计容器\u201d"} />
              <p>我们将人工智能比作液体与流水，是有内在缘由的。在智能体领域，我们越来越少地只给它一两条固定有序的提示词。很多时候，我们要依靠目标、语境、偏好、材料、规则和运行框架共同引导它。</p>
              <p>这就好比为水流打造容器：我们搭建外部框架，让内部的力量奔涌而出，把实实在在的成果具象化。这正是我们驾驭水流的方式。</p>

              <DefinitionCard title="API、MCP、约束与循环">
                API 可以理解成软件之间互相连接的"插座"：一个工具想调用另一个工具的能力，就需要接口。MCP 可以先粗略理解为一种更通用的"转接头"，让 AI 更容易连接外部工具和数据。所谓约束，就是告诉 AI 什么能做、什么不能做；所谓循环，就是让 AI 先生成，再自检，再修正。对老师来说，不必记住术语，先记住三件事：目标、边界、检查。
              </DefinitionCard>

              <p>一旦把智能体看作流水，我们自然而然就会为它打造容器、划定边界。借助这个比喻，我们能更容易看懂大模型与智能体的不确定性。只要把 AI 想象成流动的水，很多看似抽象的概念就会变得清楚。</p>
              <p>如果老师只对 AI 说："帮我写一篇作文。"那么水流就会漫开，可能生成一篇漂亮却空洞的文章。但如果老师说："请不要替学生完成作文，只帮他提出三个可以继续观察的角度，并提醒他补充自己的真实经历。"这时，水就被引向了教育真正需要的方向。</p>
              <p>我们何其幸运，身处这样一个时代转折点。整个世界站在十字路口，满怀踌躇，不断探索。我们能够亲眼见证一众顶尖人才，去攻克最关键、也最有意思的难题：我们该如何适应人工智能？该选择什么样的模型？未来又将走向何方？</p>

              <PullQuote>
                这个时代，属于在座的每一个人。我们将亲身见证，整个人类族群如何一步步思索问题、寻找出路。
              </PullQuote>
            </AnimatedSection>

            {/* Section 8 */}
            <AnimatedSection>
              <ChapterOpener id="river" num="八" title="上善若水，但水需要河道" />
              <p>流水本身并不是我们最终想要的东西。很多时候，水只是一种手段。我们搭建好结构框架，水流就会裹挟泥沙杂质分离出去，最终留下清澈规整的成果。另一些时候，我们需要调配溶液。水充当载体，我们就能混合各类原料，调配出各式各样的饮品。</p>
              <p>放到大模型与智能体上也是同理。我们时而需要多样化的选择，时而需要清晰严谨的框架。智能体兼具这两种特质，就如同一柄双刃剑。它能给我们灵感，也会带来误差；它能帮助我们提高效率，也可能让人产生依赖；它能拓展课堂，也可能削弱学生真正的思考。</p>
              <p>所以，AI 教育不是教学生偷懒，而是教学生如何提问。不是教老师交出判断，而是帮助老师把判断变得更清醒。不是让课堂失去人味，而是让老师从重复劳动里抽身出来，把更多时间还给真正的人。</p>
              <p>中国有一句古语：<strong>上善若水</strong>。</p>
              <p>此前我们一直把 AI 比作流水。倘若人工智能顺应水的品性，那它终将向善，对吗？</p>
              <p>我认为，不能这么简单地下结论。水可以滋养万物，也可以冲毁堤岸；可以灌溉田野，也可以成为洪水；可以洗去泥沙，也可以裹挟杂质。人工智能也是如此。它不天然向善，也不必然作恶。它的方向，取决于我们给它怎样的容器、怎样的边界、怎样的使用方式。</p>
              <p>所以，<strong>人工智能是否向善，不是技术自己决定的，而是由使用它的人、设计它的制度、进入它的课堂共同决定的。</strong></p>
              <p>如果我们希望 AI 向善，就必须像治理水一样治理它，像引导水一样引导它，像敬畏水一样敬畏它。教师在这个时代的角色，不是被 AI 替代的人，也不是被技术推着走的人。教师应该成为河道的设计者，成为方向的判断者，成为孩子面对未知世界时最早的引路人。</p>

              <Highlight>
                如果人工智能是一条奔涌而来的大河，那么我们今天学习它，不是为了站在岸边背诵水文知识，而是为了学会造舟、识流、定向。
              </Highlight>
            </AnimatedSection>

            {/* Ending */}
            <AnimatedSection>
              <div className="pt-24 pb-8">
                {/* Final statement - large, emotional */}
                <div className="py-16 text-center border-t border-b border-[#1E40AF]/15">
                  <p className="font-serif text-2xl md:text-4xl leading-[1.5] text-foreground font-bold tracking-tight">
                    最终，带着学生一起驶向<br className="hidden md:block" />那个更开阔、更丰沛，<br className="hidden md:block" />也更值得期待的春天。
                  </p>
                </div>

                {/* Five principles */}
                <div className="mt-20">
                  <div className="flex items-baseline gap-3 mb-8">
                    <div className="h-px flex-1 bg-gradient-to-r from-[#1E40AF]/20 to-transparent" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-8">面向小学教师的五句使用原则</h3>
                  <div className="space-y-5">
                    {[
                      "不要把 AI 当答案机，要把它当提问伙伴。",
                      "不要让 AI 替学生完成表达，要让它帮助学生发现可以继续观察的地方。",
                      "不要上传学生隐私信息，尤其是姓名、电话、住址、成绩排名和家庭细节。",
                      "不要照搬 AI 输出，教师必须做最后判断。",
                      "先给目标，再给材料，再给边界，最后做检查。",
                    ].map((principle, i) => (
                      <div key={i} className="flex gap-5 items-start group">
                        <span className="shrink-0 w-8 h-8 rounded-full bg-[#1E40AF]/8 text-[#1E40AF] text-sm font-bold flex items-center justify-center mt-0.5 group-hover:bg-[#1E40AF]/15 transition-colors">
                          {i + 1}
                        </span>
                        <p className="text-[1.05rem] leading-relaxed text-foreground/80 pt-1">{principle}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final summary card */}
                <div className="mt-16 py-10 px-8 bg-[#1E40AF]/[0.04] rounded-xl border border-[#1E40AF]/10 text-center">
                  <p className="font-serif text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                    AI 是水，老师是河道的设计者。
                  </p>
                </div>

                {/* Core thesis */}
                <div className="mt-20 text-center">
                  <p className="font-serif text-base text-foreground/40 italic leading-relaxed max-w-[480px] mx-auto">
                    模型能力是水势，Harness Engineering 是河道工程。<br />
                    没有水势，河道是空的；没有河道，水势也可能漫灌。
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Footer */}
            <footer className="mt-24 pt-10 border-t border-foreground/8">
              <div className="flex items-center gap-4 mb-6">
                <img src="/manus-storage/logo-water-flow_29ae1617.png" alt="人工智能如水" className="w-8 h-8 opacity-70" />
                <div>
                  <div className="font-serif text-sm font-semibold text-foreground/70">人工智能如水</div>
                  <div className="text-xs text-foreground/35">面向小学教师与大众的 AI 智能体认知开场稿</div>
                </div>
              </div>
              <div className="text-xs text-foreground/25">
                2026.07 · 保留文字张力版
              </div>
            </footer>
          </article>
        </div>
      </div>

      {/* Mobile TOC button */}
      <div className={`lg:hidden fixed bottom-6 right-6 z-40 transition-all duration-300 ${showNav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <MobileTocButton sections={sections} activeSection={activeSection} onSelect={scrollToSection} />
      </div>
    </div>
  );
}

// Mobile TOC button component
function MobileTocButton({ sections, activeSection, onSelect }: {
  sections: { id: string; num: string; title: string }[];
  activeSection: string;
  onSelect: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-[#1E40AF] text-white shadow-lg shadow-[#1E40AF]/20 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
        aria-label="目录"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M3 4.5h12M3 9h12M3 13.5h12" />
        </svg>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={() => setOpen(false)} />
          <div className="fixed bottom-20 right-6 z-50 bg-background border border-border rounded-xl shadow-2xl p-5 w-64 max-h-[60vh] overflow-y-auto">
            <div className="text-[10px] font-bold text-foreground/30 uppercase tracking-[0.2em] mb-4">目录</div>
            <ul className="space-y-0.5">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => { onSelect(section.id); setOpen(false); }}
                    className={`text-left w-full text-sm py-2.5 px-3 rounded-md transition-all ${
                      activeSection === section.id
                        ? "text-[#1E40AF] font-semibold bg-[#1E40AF]/[0.06]"
                        : "text-foreground/50 hover:text-foreground/80"
                    }`}
                  >
                    <span className="text-[10px] mr-1.5 opacity-50">{section.num}</span>
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  );
}

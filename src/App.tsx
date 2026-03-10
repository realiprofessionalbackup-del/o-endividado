/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  Play, 
  Lock, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  Star, 
  Clock,
  AlertCircle,
  TrendingUp,
  Heart,
  UserCheck
} from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-brand-primary/10 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-bold text-lg hover:text-brand-accent transition-colors"
      >
        <span>{question}</span>
        <ChevronDown className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="mt-2 text-brand-primary/70 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export default function App() {
  const scrollToOffer = () => {
    document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 pb-20 md:pb-32 px-4 overflow-hidden bg-brand-primary text-brand-secondary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#d4af37,transparent_70%)]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-brand-accent/20 text-brand-accent text-xs md:text-sm font-bold mb-6 uppercase tracking-widest">
              A saída não é fugir, é encarar com honra
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-6 md:mb-8 leading-tight px-2">
              Pare de se esconder das dívidas e <span className="text-brand-accent italic">retome o controle</span> da sua vida emocional
            </h1>
            <p className="text-lg md:text-2xl text-brand-secondary/80 mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Um treinamento profundo para quem está esmagado pela pressão das cobranças, pela vergonha e pelo medo do futuro. Aprenda a reconstruir sua dignidade e seu plano de saída.
            </p>
          </motion.div>

          {/* VSL Area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="grid md:grid-cols-5 gap-8 items-center">
              {/* Video Container (Vertical) */}
              <div className="md:col-span-2 flex justify-center">
                <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)] border-[8px] border-brand-primary bg-black">
                  <iframe 
                    src="https://www.youtube.com/embed/PI9VrfE6LbU?autoplay=0&controls=1&rel=0" 
                    title="VSL - Recomeço com Honra"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Key Points next to Video */}
              <div className="md:col-span-3 text-left space-y-6">
                <div className="bg-brand-accent/10 p-6 rounded-2xl border border-brand-accent/20">
                  <h3 className="text-xl font-bold text-brand-accent mb-4 flex items-center gap-2">
                    <Play size={20} fill="currentColor" /> Assista ao vídeo acima
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={18} />
                      <span className="text-brand-secondary/90">Entenda por que você se sente paralisado e como quebrar esse ciclo hoje.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={18} />
                      <span className="text-brand-secondary/90">Descubra o método para retomar sua dignidade diante de qualquer credor.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-brand-accent shrink-0 mt-1" size={18} />
                      <span className="text-brand-secondary/90">O primeiro passo prático para organizar sua mente e seu bolso.</span>
                    </li>
                  </ul>
                </div>
                <p className="text-brand-secondary/60 italic text-sm">
                  * Aperte o play para entender como o treinamento vai transformar sua realidade emocional.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col items-center gap-6 px-4">
            <button onClick={scrollToOffer} className="btn-primary w-full max-w-md text-lg md:text-xl">
              Quero retomar minha paz agora
            </button>
            
            <div className="flex flex-col items-center">
              <span className="text-brand-secondary/60 line-through text-base md:text-lg">De R$ 197,00</span>
              <span className="text-4xl md:text-6xl font-black text-brand-accent">Por apenas R$ 19,90</span>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs md:text-sm text-brand-secondary/60 font-medium">
              <span className="flex items-center gap-1 whitespace-nowrap"><Lock size={14} /> Acesso Imediato</span>
              <span className="flex items-center gap-1 whitespace-nowrap"><ShieldCheck size={14} /> Compra 100% Segura</span>
              <span className="flex items-center gap-1 whitespace-nowrap"><Clock size={14} /> Direto ao ponto</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. IDENTIFICAÇÃO COM A DOR */}
      <section className="py-24 px-4 bg-brand-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16 leading-tight">
            Você acorda e a primeira coisa que sente é um <span className="text-brand-action">peso no peito?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "O medo de atender o celular e ouvir mais uma cobrança.",
              "A vergonha de não conseguir dar o que sua família merece.",
              "A sensação de que você fracassou e não tem mais saída.",
              "O cansaço mental de tentar fazer contas que nunca fecham.",
              "A vontade de sumir para não ter que encarar os credores.",
              "A culpa que te impede de dormir e de ter paz no almoço de domingo."
            ].map((text, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border-l-4 border-brand-action"
              >
                <AlertCircle className="text-brand-action shrink-0" />
                <p className="text-lg font-medium text-brand-primary/80 italic">"{text}"</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl md:text-2xl font-serif italic text-brand-primary/70">
              Eu sei. Eu conheço esse silêncio ensurdecedor. Eu conheço a pressão que parece que vai explodir sua cabeça.
            </p>
          </div>
        </div>
      </section>

      {/* 3. AUTORIDADE VIVIDA */}
      <section className="py-24 px-4 bg-brand-primary text-brand-secondary">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-brand-accent opacity-50"></div>
            <img 
              src="https://i.ibb.co/zhD6LJBx/Whats-App-Image-2026-03-10-at-16-38-17.jpg" 
              alt="Miqueias Santos" 
              className="rounded-2xl shadow-2xl w-full h-auto object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-brand-accent opacity-50"></div>
            
            <div className="mt-8 text-center md:text-left">
              <h4 className="text-2xl font-black text-brand-accent">Miqueias Santos</h4>
              <p className="text-brand-secondary/60 font-medium">Especialista em vendas e aceleração comercial</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-black mb-8 leading-tight">Eu não estudei isso em livros. <span className="text-brand-accent italic">Eu sobrevivi a isso.</span></h2>
            <div className="space-y-6 text-lg text-brand-secondary/80 leading-relaxed">
              <p>Houve um tempo em que meu nome era motivo de vergonha. Eu evitava o olhar das pessoas, evitava abrir o correio e sentia que minha dignidade tinha sido enterrada sob uma montanha de boletos.</p>
              <p>Eu descobri, da maneira mais dura, que a dívida não quebra só o seu bolso. Ela quebra a sua alma. Ela rouba sua identidade e te transforma em um fugitivo dentro da própria casa.</p>
              <p>Mas eu também descobri como voltar. Como olhar nos olhos de quem eu devia, como organizar o caos e como reconstruir minha vida com honra, passo a passo.</p>
              <p className="font-bold text-brand-accent text-xl">Este curso é o mapa que eu gostaria de ter recebido quando estava no fundo do poço.</p>
            </div>
            <button onClick={scrollToOffer} className="mt-10 flex items-center gap-2 text-brand-accent font-bold hover:gap-4 transition-all">
              QUERO QUE VOCÊ ME MOSTRE O CAMINHO <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. O QUE VAI APRENDER */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">O Plano de Reconstrução</h2>
            <p className="text-xl text-brand-primary/60">Tudo o que você precisa para sair da paralisia e começar a agir.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Mente Blindada", desc: "Como reduzir o caos mental e parar de se sentir um fracassado.", icon: <Heart /> },
              { title: "Postura de Honra", desc: "Como falar com credores sem perder a sua dignidade ou sua paz.", icon: <UserCheck /> },
              { title: "Mapa do Caos", desc: "Aprenda a organizar todas as dívidas e classificar prioridades reais.", icon: <TrendingUp /> },
              { title: "Estratégia de Negociação", desc: "Como se posicionar para conseguir as melhores condições de pagamento.", icon: <ShieldCheck /> },
              { title: "Proteção Familiar", desc: "Como blindar sua casa e sua família do estresse da crise.", icon: <Lock /> },
              { title: "Novas Fontes", desc: "Princípios práticos para abrir novas fontes de caixa e recomeçar.", icon: <TrendingUp /> }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-brand-secondary border border-brand-primary/5 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-brand-primary text-brand-accent rounded-lg flex items-center justify-center mb-6">
                  {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-brand-primary/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ANTES E DEPOIS */}
      <section className="py-24 px-4 bg-brand-primary text-brand-secondary overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="p-12 bg-black/40">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-2 text-brand-action">
                <XCircle /> O ESTADO DE CAOS
              </h3>
              <ul className="space-y-4 opacity-60">
                <li className="flex items-center gap-3">Fuga constante de ligações</li>
                <li className="flex items-center gap-3">Vergonha de encarar a família</li>
                <li className="flex items-center gap-3">Mente acelerada e sem sono</li>
                <li className="flex items-center gap-3">Sensação de estar perdido</li>
                <li className="flex items-center gap-3">Dívidas crescendo sem controle</li>
              </ul>
            </div>
            <div className="p-12 bg-brand-accent/10 border-l border-white/10">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-2 text-brand-success">
                <CheckCircle2 /> O ESTADO DE HONRA
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 font-bold text-brand-secondary">Clareza total sobre os números</li>
                <li className="flex items-center gap-3 font-bold text-brand-secondary">Postura firme diante de credores</li>
                <li className="flex items-center gap-3 font-bold text-brand-secondary">Paz mental para trabalhar e criar</li>
                <li className="flex items-center gap-3 font-bold text-brand-secondary">Plano prático de pagamento</li>
                <li className="flex items-center gap-3 font-bold text-brand-secondary">Dignidade e respeito retomados</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OFERTA IRRESISTÍVEL */}
      <section id="oferta" className="py-20 md:py-24 px-4 bg-brand-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card p-6 md:p-12 rounded-3xl border-2 border-brand-accent">
            <h2 className="text-2xl md:text-5xl font-black mb-6">A decisão que muda o seu <span className="text-brand-accent italic">amanhã</span></h2>
            <p className="text-lg md:text-xl mb-10 text-brand-primary/70">
              Você pode continuar carregando esse peso sozinho, ou pode investir menos que o valor de um lanche para receber o caminho da sua reconstrução.
            </p>
            
            <div className="mb-10 md:mb-12">
              <span className="block text-brand-primary/40 line-through text-xl md:text-2xl mb-2">De R$ 197,00</span>
              <div className="flex flex-col items-center">
                <span className="text-6xl md:text-9xl font-black text-brand-action">R$ 19,90</span>
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-primary/60 mt-2">Pagamento único • Acesso vitalício</span>
              </div>
            </div>
            
            <button className="btn-primary w-full max-w-md text-xl md:text-2xl mb-8">
              SIM! QUERO RECOMEÇAR AGORA
            </button>
            
            <div className="flex justify-center gap-8 flex-wrap">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-6 opacity-50" referrerPolicy="no-referrer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8 opacity-50" referrerPolicy="no-referrer" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Logo_Pix.png" alt="Pix" className="h-6 opacity-50" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. DEPOIMENTOS */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">Quem já deu o primeiro passo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Carlos M.", text: "Eu não conseguia nem olhar pro meu extrato. Esse curso me deu a coragem que eu precisava para encarar a realidade e parar de fugir.", role: "Pai de família" },
              { name: "Ana Paula S.", text: "O valor é simbólico perto da paz que eu senti ao entender que eu não sou as minhas dívidas. Recomendo para todos.", role: "Empreendedora" },
              { name: "Ricardo F.", text: "Finalmente um conteúdo que fala a verdade, sem fórmulas mágicas. É sobre honra, postura e trabalho duro. Vale cada centavo.", role: "Autônomo" }
            ].map((dep, i) => (
              <div key={i} className="p-8 rounded-2xl bg-brand-secondary shadow-sm border border-brand-primary/5">
                <div className="flex gap-1 text-brand-accent mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg italic mb-6 text-brand-primary/80">"{dep.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center font-bold text-brand-primary">
                    {dep.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{dep.name}</h4>
                    <span className="text-sm text-brand-primary/50">{dep.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-24 px-4 bg-brand-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-16">Dúvidas Frequentes</h2>
          <div className="space-y-2">
            <FAQItem 
              question="Esse curso é para quem está endividado?" 
              answer="Sim, é focado exatamente em quem está vivendo o caos das dívidas e precisa de uma direção emocional e prática para sair da paralisia." 
            />
            <FAQItem 
              question="Vou aprender só sobre finanças ou também sobre a parte emocional?" 
              answer="O foco principal é a reconstrução emocional e a postura de honra. Sem organizar a mente, você não consegue organizar o bolso." 
            />
            <FAQItem 
              question="O acesso é imediato?" 
              answer="Sim! Assim que o pagamento for confirmado, você recebe os dados de acesso no seu e-mail imediatamente." 
            />
            <FAQItem 
              question="O valor é mesmo só R$ 19,90?" 
              answer="Sim. Fizemos esse valor acessível justamente porque sabemos que quem mais precisa desse conteúdo está passando por restrição financeira." 
            />
            <FAQItem 
              question="Por quanto tempo terei acesso?" 
              answer="O acesso é vitalício. Você pode assistir e rever as aulas sempre que precisar, no seu tempo." 
            />
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-32 px-4 bg-brand-primary text-brand-secondary text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#d4af37,transparent_50%)]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Você vai continuar carregando esse peso sozinho ou vai <span className="text-brand-accent italic">aceitar ajuda?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-brand-secondary/70 max-w-2xl mx-auto">
            Amanhã você vai desejar ter começado hoje. Dê o primeiro passo para a sua liberdade emocional.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <button onClick={scrollToOffer} className="btn-primary w-full max-w-md text-2xl">
              QUERO MEU RECOMEÇO AGORA
            </button>
            <div className="text-4xl md:text-6xl font-black text-brand-accent">R$ 19,90</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black text-white/40 text-center text-sm">
        <div className="max-w-6xl mx-auto">
          <p className="mb-4">© 2026 Recomeço com Honra. Todos os direitos reservados.</p>
          <p className="max-w-2xl mx-auto leading-relaxed">
            Este produto não garante resultados financeiros imediatos. O sucesso depende da aplicação prática dos princípios ensinados e do esforço individual de cada aluno. Não vendemos ilusões, vendemos direção e postura.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

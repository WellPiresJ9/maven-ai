import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const HuntersCaseStudy: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-100 relative">
      {/* Global Noise Overlay */}
      <div className="bg-noise"></div>
      
      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-24 pb-16">
          {/* Back Button */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <button 
              onClick={() => {
                window.location.hash = '#cases';
              }}
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Voltar para cases
            </button>
          </div>

          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="glass-card rounded-[32px] p-8 md:p-16">
              {/* Logo */}
              <div className="mb-12 flex justify-center">
                <div className="h-32 bg-white rounded-2xl flex items-center justify-center p-8 w-full max-w-md">
                  <img 
                    src="/assets/logos/hunters_manpower_logo1.jpeg" 
                    alt="Hunters Logo" 
                    className="max-w-full max-h-full object-contain scale-125"
                  />
                </div>
              </div>

              <h1 className="font-serif text-4xl md:text-6xl font-medium text-white mb-6 text-center">
                Hunters
              </h1>
            </div>
          </section>

          {/* Company Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="glass-card rounded-[32px] p-8 md:p-12">
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">A empresa</h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                A Hunter Embarque é uma empresa especializada no recrutamento de profissionais para atuação embarcada em embarcações marítimas.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Desde 2023, vem se consolidando como uma das empresas que mais crescem no setor marítimo no Brasil, com forte investimento em tecnologia e automação como base da sua estratégia de escala.
              </p>
              
              {/* Divider */}
              <div className="my-12 border-t border-cyan-500/20"></div>
            </div>
          </section>

          {/* Challenge Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="glass-card rounded-[32px] p-8 md:p-12">
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">O desafio</h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Com o aumento no volume de vagas e candidatos, o processo tradicional de RH tornou-se um gargalo. Sempre que novas oportunidades eram divulgadas em grupos de WhatsApp ou redes sociais, o time precisava conduzir entrevistas longas e manuais, o que limitava a capacidade de crescimento e sobrecarregava a equipe.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Além disso, parte dos candidatos possuía menor familiaridade com processos formais escritos, exigindo uma abordagem mais acessível e fluida.
              </p>
              
              {/* Divider */}
              <div className="my-12 border-t border-cyan-500/20"></div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="glass-card rounded-[32px] p-8 md:p-12">
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">A solução</h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Implementamos um Agente de IA no WhatsApp, a <strong className="text-cyan-400">Júlia — a AI Embarcadora</strong>, responsável por automatizar toda a etapa inicial do recrutamento.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                A Júlia realiza entrevistas completas por texto e áudio, avalia os candidatos com base no método e perfil ideal definidos pela Hunter Embarque e cruza automaticamente essas informações com o banco de vagas atualizado diariamente.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Quando há compatibilidade, o candidato é conectado imediatamente ao time da Hunter Embarque, acelerando todo o fluxo de contratação.
              </p>
              
              {/* Divider */}
              <div className="my-12 border-t border-cyan-500/20"></div>
            </div>
          </section>

          {/* Results Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="glass-card rounded-[32px] p-8 md:p-12">
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-white mb-8">Os resultados</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
                  <p className="text-lg text-slate-300">
                    Automação total da etapa inicial de entrevistas
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
                  <p className="text-lg text-slate-300">
                    Redução significativa do esforço manual do RH
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
                  <p className="text-lg text-slate-300">
                    Maior velocidade na conexão entre profissionais e vagas
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
                  <p className="text-lg text-slate-300">
                    Padronização na avaliação dos candidatos
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
                  <p className="text-lg text-slate-300">
                    Base tecnológica sólida para escalar o recrutamento de forma contínua
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-slate-300 leading-relaxed italic text-cyan-300/80">
                A automação passou a ser parte central do plano de crescimento da Hunter Embarque, viabilizando sua visão de se tornar a plataforma de conexão entre profissionais embarcados e embarcações.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-[32px] p-8 md:p-12 text-center">
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">
                Quer resultados similares para sua empresa?
              </h3>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Agende uma consultoria gratuita e descubra como nossos Agentes de IA podem transformar seus processos.
              </p>
              <a 
                href="#contato" 
                className="liquid-button inline-block px-8 py-4 rounded-full font-semibold text-white hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all"
              >
                Saber mais
              </a>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};


import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const WittelCaseStudy: React.FC = () => {
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
                    src="/assets/logos/logo%20wittel%201.png" 
                    alt="Wittel Logo" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              <h1 className="font-serif text-4xl md:text-6xl font-medium text-white mb-6 text-center">
                Wittel
              </h1>
              
              <h2 className="font-serif text-2xl md:text-4xl font-medium text-cyan-400 mb-8 text-center">
                Como a Wittel aumentou a taxa de comparecimento em reuniões de vendas em 70%
              </h2>
              
              <p className="text-lg md:text-xl text-slate-300 text-center max-w-4xl mx-auto mb-12">
                Com o uso de um Agente IA, a empresa melhorou o engajamento e capturou insights valiosos com uma taxa de resposta NPS de 85%.
              </p>
            </div>
          </section>

          {/* Solution Highlights */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card rounded-[32px] p-8 text-center">
                <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4">-50%</div>
                <p className="text-slate-300 text-lg">Redução do tempo de agendamentos e reuniões</p>
              </div>
              
              <div className="glass-card rounded-[32px] p-8 text-center">
                <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4">+10%</div>
                <p className="text-slate-300 text-lg">Melhoria na eficiência operacional e na experiência do cliente</p>
              </div>
            </div>
          </section>

          {/* Company Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="glass-card rounded-[32px] p-8 md:p-12">
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">A empresa</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                A Wittel Comunicações é uma empresa focada em Customer Experience (CX), oferecendo soluções tecnológicas para otimizar o relacionamento entre marcas e consumidores. Sempre à frente em inovações, a Wittel visa aprimorar a jornada do cliente e aumentar a eficiência operacional nas suas vendas.
              </p>
            </div>
          </section>

          {/* Challenge Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="glass-card rounded-[32px] p-8 md:p-12">
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">O desafio</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                Com uma alta taxa de no-show em reuniões de vendas e um processo manual de coleta de feedback dos clientes, a Wittel enfrentava dificuldades para gerenciar leads inbound de forma eficiente. A falta de dados estratégicos limitava a capacidade da empresa de ajustar e melhorar sua abordagem de vendas.
              </p>
            </div>
          </section>

          {/* Solution Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="glass-card rounded-[32px] p-8 md:p-12">
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">A solução</h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Três frentes foram implementadas usando um Agente IA integrado ao WhatsApp e ao site da Wittel:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-slate-300 flex-1">
                    Agendamento automatizado de reuniões de vendas, permitindo que os leads escolhessem horários convenientes.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-slate-300 flex-1">
                    Envio automático de lembretes pré-chamada, reduzindo a taxa de no-show ao manter os leads engajados e informados.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-slate-300 flex-1">
                    Pesquisas NPS automatizadas pós-reunião, facilitando a coleta de feedback valioso para otimizar a experiência de vendas.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="glass-card rounded-[32px] p-8 md:p-12">
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-white mb-8">Os resultados</h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                A automação trouxe resultados impactantes para a Wittel:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
                  <p className="text-lg text-slate-300">
                    <strong className="text-cyan-400">Aumento de 70%</strong> na taxa de comparecimento às reuniões de vendas, impulsionado pelos lembretes personalizados.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
                  <p className="text-lg text-slate-300">
                    <strong className="text-cyan-400">85% de taxa de resposta</strong> nas pesquisas NPS, permitindo insights valiosos que aprimoraram a abordagem de vendas.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
                  <p className="text-lg text-slate-300">
                    <strong className="text-cyan-400">Redução de 50%</strong> no tempo de agendamento, tornando o processo mais ágil e eficiente.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
                  <p className="text-lg text-slate-300">
                    <strong className="text-cyan-400">Experiência do cliente aprimorada</strong>, com um fluxo mais autônomo e otimizado desde o agendamento até o feedback final.
                  </p>
                </div>
              </div>
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


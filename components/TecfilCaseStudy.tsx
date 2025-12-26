import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const TecfilCaseStudy: React.FC = () => {
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
                    src="/assets/logos/tecfil-logo1.png" 
                    alt="Tecfil Logo" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              <h1 className="font-serif text-4xl md:text-6xl font-medium text-white mb-6 text-center">
                Tecfil
              </h1>
              
              <h2 className="font-serif text-2xl md:text-4xl font-medium text-cyan-400 mb-8 text-center">
                Como a TECFIL reduziu o tempo de consulta de informações em 90%
              </h2>
              
              <p className="text-lg md:text-xl text-slate-300 text-center max-w-4xl mx-auto mb-12">
                Com o uso de um chatbot de recuperação de informações (RAG), a empresa otimizou o processo de vendas e melhorou a eficiência operacional em apenas 3 meses.
              </p>
            </div>
          </section>

          {/* Solution Highlights */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card rounded-[32px] p-8 text-center">
                <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4">+200 horas</div>
                <p className="text-slate-300 text-lg">Economia mensal em trabalho manual</p>
              </div>
              
              <div className="glass-card rounded-[32px] p-8 text-center">
                <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-4">35%</div>
                <p className="text-slate-300 text-lg">Redução no tempo médio de atendimento</p>
              </div>
            </div>
          </section>

          {/* Company Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="glass-card rounded-[32px] p-8 md:p-12">
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">A empresa</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                A TECFIL é uma fabricante líder no setor automotivo, especializada na produção de filtros de ar. Oferecendo uma ampla gama de produtos, a empresa busca constantemente melhorar sua eficiência e atendimento ao cliente.
              </p>
            </div>
          </section>

          {/* Challenge Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="glass-card rounded-[32px] p-8 md:p-12">
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">O desafio</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                A TECFIL enfrentava uma situação desafiadora: seus agentes de vendas tinham que consultar múltiplas planilhas com até 15 mil linhas para encontrar informações sobre os produtos, como filtros de ar, seus preços e especificações técnicas. Esse processo lento e ineficiente impactava negativamente a produtividade e a satisfação dos clientes.
              </p>
            </div>
          </section>

          {/* Solution Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
            <div className="glass-card rounded-[32px] p-8 md:p-12">
              <h3 className="font-serif text-3xl md:text-4xl font-medium text-white mb-6">A solução</h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Implementamos um chatbot de recuperação de informações (RAG), que:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-slate-300 flex-1">
                    Forneceu respostas instantâneas sobre disponibilidade de produtos, preços e especificações técnicas.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-slate-300 flex-1">
                    Eliminou a necessidade de buscas manuais, permitindo que os agentes de vendas encontrassem rapidamente as informações necessárias.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-slate-300 flex-1">
                    Aprimorou a experiência do cliente com um atendimento mais eficiente e ágil.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-lg text-slate-300 flex-1">
                    Centralizou todas as informações em uma base de dados unificada e acessível.
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
                Com a implementação do chatbot de recuperação de informações, a TECFIL obteve resultados impressionantes:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
                  <p className="text-lg text-slate-300">
                    <strong className="text-cyan-400">Aceleração na velocidade de resposta</strong>, que possibilitou uma interação mais dinâmica com os clientes, resultando em um atendimento ágil e eficaz.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
                  <p className="text-lg text-slate-300">
                    <strong className="text-cyan-400">Feedback positivo dos clientes</strong>, demonstrado em avaliações favoráveis e uma maior lealdade, consolidando ainda mais a reputação da empresa no mercado.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 mr-4 flex-shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]"></div>
                  <p className="text-lg text-slate-300">
                    <strong className="text-cyan-400">Ganho de centenas de horas mensais</strong>, permitindo que a equipe se direcionasse a projetos de maior impacto e inovação dentro da empresa.
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


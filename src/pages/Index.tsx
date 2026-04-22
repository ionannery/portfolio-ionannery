import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Phone, MapPin, Server, Cloud, Database, Monitor, Sun, Moon, Shield, Siren, ScanSearch, Code2, BookOpen, CloudCog, MonitorCog, KanbanSquare, Award } from 'lucide-react';
import certCcdl2 from '@/assets/cert-ccdl2.png';
import certAwsCp from '@/assets/cert-aws-cp.png';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    setTheme('dark');
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'certifications', 'experience', 'projects', 'contact'];
      const scrollY = window.scrollY;
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      setTheme('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  };

  const githubUrl = "https://github.com/ionannery";
  const linkedinUrl = "https://www.linkedin.com/in/ionan-nery/";

  const projects = [
    {
      title: 'project-terraform-AWS-app-BIA',
      description: 'Provisionamento completo de infraestrutura AWS via Terraform: VPC, ECS, RDS, Auto Scaling, ALB, ACM, S3, CloudWatch, IAM, EC2, Route 53 e Secrets Manager. Ideal para deploy automatizado e escalável de aplicações web.',
      technologies: ['Terraform', 'AWS', 'ECS', 'RDS', 'ALB', 'ACM', 'S3', 'CloudWatch', 'IAM', 'EC2', 'Route 53'],
      github: 'https://github.com/ionannery/project-terraform-AWS-app-BIA',
    },
    {
      title: 'iac-alura',
      description: 'Infraestrutura como código para ambientes EC2 na AWS, com separação de produção e desenvolvimento, configuração automática via Ansible e deploy de API Django. Inclui balanceamento de carga.',
      technologies: ['Terraform', 'AWS', 'EC2', 'Ansible', 'Django', 'Load Balancer'],
      github: 'https://github.com/ionannery/iac-alura',
    },
    {
      title: 'IOC Nexus',
      description: 'Plataforma de verificação e consulta de Indicadores de Comprometimento (IOCs) em múltiplas fontes de inteligência de ameaças globais. Permite análise rápida de IPs, hashes, domínios e URLs para identificação de atividades maliciosas.',
      technologies: ['Cybersecurity', 'Threat Intelligence', 'IOC Analysis'],
      github: 'https://iocnexus.lovable.app/',
    },
    {
      title: 'bia',
      description: 'Deploy automatizado de aplicação Node.js na AWS usando ECS, ALB, Route53 e HTTPS via ACM. Projeto prático do bootcamp AWS.',
      technologies: ['AWS', 'ECS', 'ALB', 'Route53', 'HTTPS', 'Docker', 'Node.js'],
      github: 'https://github.com/ionannery/bia',
    },
    {
      title: 'CI-CD-GO-Github-Actions-alura',
      description: 'Exemplo de pipeline CI/CD para aplicações Go, usando Github Actions para build, testes e deploy automatizados.',
      technologies: ['Go', 'Github Actions', 'CI/CD'],
      github: 'https://github.com/ionannery/CI-CD-GO-Github-Actions-alura',
    },
    {
      title: 'quality_gtsnetv1',
      description: 'Sistema web para automação de relatórios e geração de scripts de configuração para Unidades Lotéricas. Backend Node.js/Express, frontend HTML/CSS/JS, geração de PDF, upload de imagens e busca de relatórios.',
      technologies: ['Node.js', 'Express', 'HTML', 'CSS', 'JavaScript', 'PDF'],
      github: 'https://github.com/ionannery/quality_gtsnetv1',
    },
  ];

  const experiences = [
    {
      role: 'Cyber Security Analyst - Blue Team',
      company: 'Ready.ti',
      period: 'jun de 2025 - o momento · 2 meses',
      location: 'Teresina, Piauí, Brasil · Presencial',
      description: [
        'Análise aprofundada de alertas e incidentes no SIEM Securonix, incluindo investigação de correlações, enriquecimento de dados e determinação de verdadeiro/falso positivo.',
        'Resposta a incidentes com o SentinelOne, conduzindo análises de comportamento, verificação de IOC/IOA, isolamento de endpoints e orientação para contenção.',
        'Responsável pela criação e manutenção de playbooks, tanto operacionais para o N1, padronizando triagem e escalonamento, quanto playbooks de automação para o SOAR do Securonix, incluindo enriquecimento de IOCs, bloqueio de IP\'s notificações e ações de resposta.',
        'Participação na otimização contínua das regras do SIEM, criando casos de uso, ajustando correlações e reduzindo falsos positivos para aumentar a eficácia da detecção.',
        'Administração de firewalls Fortigate, além do gerenciamento e operação das plataformas FortiManager, FortiAnalyzer e FortiAuthenticator.'
      ],
      achievements: [
        'Fortigate, Fortimanager, Fortianalyzer, Blue Team, SD-WAN, EDR/XDR, SIEM, Wazuh, Securonix, SentinelOne, CrowdStrike'
      ],
    },
    {
      role: 'Network Support Analyst',
      company: 'Mamtech Tecnologia',
      period: 'fev de 2025 - jun de 2025 · 5 meses',
      location: 'Teresina, Piauí, Brasil · Presencial',
      description: [
        'Atendimento de chamados via STC e SGFT, solucionando problemas de rede.',
        'Suporte técnico remoto e em campo para clientes e equipe.',
        'Troubleshooting de redes, identificando e corrigindo falhas.',
        'Manutenção e configuração de equipamentos Cisco, Mikrotik, Meraki, Elsys e Fortinet.',
        'Gerenciamento de roteadores, switches, firewalls e access points.',
        'Monitoramento de redes para garantir desempenho e disponibilidade.',
        'Implementação de políticas de segurança: VPNs, filtros de tráfego e controle de acesso.',
        'Documentação técnica de procedimentos e topologias.',
        'Colaboração em projetos de infraestrutura de rede com a equipe de TI.'
      ],
      achievements: [
        'Cisco, HP, Huawei, Elsys, Fortinet, Ansible, Automação de rede',
      ],
    },
    {
      role: 'Cloud Network Analyst',
      company: 'Orbbi',
      period: 'mai de 2024 - dez de 2024 · 8 meses',
      location: 'João Pessoa, Paraíba, Brasil · Remota',
      description: [
        'Gestão e sustentação de ambientes em nuvem AWS.',
        'Provisionamento de recursos com Terraform.',
        'Suporte em EC2, VPC, Subnet, Route Table, NAT Gateway, Security Group, Network ACL, Internet Gateway.',
        'Suporte para Linux (CentOS, Amazon Linux).',
        'Configuração de iptables e segurança de rede.',
        'Documentação de ambiente e processos.',
        'Implementação e manutenção de túneis IPSEC (OpenSwan, StrongSwan).',
        'Gerenciamento de servidores VPN com OpenVPN.'
      ],
      achievements: [
        'AWS, Terraform, Linux, GitLab, Fortigate Cloud-native',
      ],
    },
    {
      role: 'Information Security Analyst',
      company: 'Grupo Binário',
      period: 'set de 2022 - abr de 2024 · 1 ano 8 meses',
      location: 'São Paulo, Brasil · Remota',
      description: [
        'Atuação em SOC: detecção de incidentes e configuração de segurança.',
        'Consultoria e implementação de regras em NGFW e Application Control.',
        'Gestão de Fortimanager, Fortigate e Fortianalyzer.',
        'Troubleshooting em Firewalls (Fortigate).',
        'Criação e alteração de regras de QoS, Traffic Shapping, Webfilter e Appcontrol.',
        'Suporte e implementação de VPN IPsec e SSL.',
        'Suporte FSSO e redes SD-WAN.',
        'Utilização do Control Desk IBM.'
      ],
      achievements: [
        'Fortigate, Fortimanager, Fortianalyzer'
      ],
    },
    {
      role: 'Information Security Analyst',
      company: 'The Forense',
      period: 'jan de 2022 - ago de 2022 · 8 meses',
      location: 'Teresina, Piauí, Brasil · Presencial',
      description: [
        'Estágio em Segurança da Informação focado em análise de vulnerabilidades e perícia forense.',
        'Análise de vulnerabilidades (OpenVas e Nessus).',
        'Gerenciamento da plataforma EAD (Moodle).'
      ],
      achievements: [
        'OpenVas, Nessus, Moodle, Perícia Forense',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'certifications', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' ? 'Início' : 
                   section === 'about' ? 'Sobre Mim' :
                   section === 'certifications' ? 'Certificações' :
                   section === 'experience' ? 'Experiência' :
                   section === 'projects' ? 'Projetos' : 'Contato'}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              {/* Botão de alternância de tema */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-muted transition-colors focus:outline-none"
                aria-label="Alternar tema"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - 2 columns */}
      <section id="home" className="min-h-screen flex items-center pt-24 pb-16 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Left column ~35% */}
            <aside className="lg:col-span-4 animate-slide-in">
              <Card className="p-8 card-hover sticky top-28">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <Shield size={18} />
                  <span className="text-xs uppercase tracking-widest font-semibold">Blue Team · SOC</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
                  Cyber Security Analyst
                </h1>
                <p className="text-lg font-medium text-foreground mb-1">Ionan Nery</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                  <MapPin size={14} className="text-primary" />
                  <span>Teresina, Piauí — Brasil</span>
                </div>

                <div className="space-y-2 text-sm mb-6">
                  <a href="mailto:ionannery@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail size={16} className="text-primary" />
                    <span>ionannery@gmail.com</span>
                  </a>
                  <a href="tel:+5586998244141" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone size={16} className="text-primary" />
                    <span>+55 (86) 99824-4141</span>
                  </a>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border flex justify-between text-primary/60">
                  <Cloud size={22} />
                  <Server size={22} />
                  <Database size={22} />
                  <Monitor size={22} />
                </div>
              </Card>
            </aside>

            {/* Right column ~65% */}
            <div id="about" className="lg:col-span-8 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-primary" />
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">Sobre mim</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Defesa, detecção e resposta em ambientes reais.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Analista de Segurança Cibernética com atuação em Blue Team e operações de SOC, focado em monitoramento ativo, triagem de alertas, análise e resposta a incidentes e defesa de perímetro. Atuo no suporte a clientes do setor público, investigando alertas em ambientes reais com SIEM, EDR/XDR e NGFW. Experiência prática com detecção de CVEs, persistência, movimentação lateral e phishing avançado. Graduado em Sistemas de Informação, com foco em automação de threat intelligence e geração de relatórios de segurança.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={() => scrollToSection('projects')} className="text-base px-6">
                  Ver Projetos
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="text-base px-6">
                  Entre em Contato
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">Principais Competências</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Stack técnico organizado por domínio de atuação em segurança cibernética e operações.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Shield, title: 'Firewalls', items: ['FortiGate', 'Palo Alto'] },
              { icon: Siren, title: 'SIEM', items: ['Elastic', 'Wazuh', 'Securonix'] },
              { icon: ScanSearch, title: 'EDR / XDR', items: ['Cortex XDR (Palo Alto)', 'CrowdStrike Falcon', 'SentinelOne'] },
              { icon: Database, title: 'Vulnerability Management', items: ['OpenVAS', 'Qualys'] },
              { icon: Code2, title: 'Scripting', items: ['Python', 'Bash', 'PowerShell'] },
              { icon: BookOpen, title: 'Frameworks e Metodologias', items: ['MITRE ATT&CK', 'Cyber Kill Chain', 'NIST'] },
              { icon: CloudCog, title: 'Cloud Security', items: ['AWS Shield', 'Amazon GuardDuty', 'Amazon Inspector'] },
              { icon: MonitorCog, title: 'Sistemas Operacionais', items: ['Windows', 'Linux', 'macOS'] },
              { icon: KanbanSquare, title: 'Metodologias Ágeis', items: ['Kanban', 'Scrum (Jira)'] },
            ].map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <Card key={idx} className="p-6 card-hover animate-fade-in">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold">{cat.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">{item}</Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">Certificações</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Credenciais validadas em segurança cibernética e cloud.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Certified CyberDefender Level 2 (CCDL2)',
                issuer: 'CyberDefenders',
                image: certCcdl2,
              },
              {
                name: 'AWS Certified Cloud Practitioner',
                issuer: 'Amazon Web Services',
                image: certAwsCp,
              },
              {
                // TODO: Substituir 'image' pelo arquivo da badge oficial quando disponível
                name: 'Fortinet Certified Associate Cybersecurity',
                issuer: 'Fortinet',
                image: null,
              },
            ].map((cert, idx) => (
              <Card key={idx} className="p-6 card-hover animate-fade-in flex items-center gap-5">
                <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-muted/40 border border-border flex items-center justify-center overflow-hidden">
                  {cert.image ? (
                    <img src={cert.image} alt={`Badge ${cert.name}`} className="w-full h-full object-contain p-1" loading="lazy" />
                  ) : (
                    <Award size={36} className="text-primary" />
                  )}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold leading-tight mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">Experiência Profissional</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-8 card-hover animate-slide-in">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary">{exp.role}</h3>
                    <p className="text-lg text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                <ul className="list-disc list-inside text-muted-foreground mb-4 leading-relaxed space-y-1">
                  {Array.isArray(exp.description)
                    ? exp.description.map((item, i) => <li key={i}>{item}</li>)
                    : <li>{exp.description}</li>}
                </ul>
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm uppercase tracking-wide">Destaques:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">Projetos</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 card-hover animate-fade-in">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">Contato</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Vamos Conversar ?</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Interessado em colaborar ou discutir oportunidades? Estou sempre aberto a novos desafios e projetos interessantes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-primary" />
                  <span>ionannery@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-primary" />
                  <span>+55 (86) 99824-4141</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-primary" />
                  <span>Teresina, Piauí</span>
                </div>
              </div>
            </div>
            <Card className="p-6 animate-fade-in">
              <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = {
                  nome: form.nome.value,
                  email: form.email.value,
                  assunto: form.assunto.value,
                  mensagem: form.mensagem.value,
                };
                await fetch('https://formsubmit.co/ajax/ionannery@gmail.com', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                  },
                  body: JSON.stringify(data),
                });
                alert('Mensagem enviada com sucesso!');
                form.reset();
              }}>
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <Input name="nome" placeholder="Seu nome completo" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input name="email" type="email" placeholder="seu@email.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Assunto</label>
                  <Input name="assunto" placeholder="Assunto da mensagem" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea name="mensagem" placeholder="Sua mensagem aqui..." className="min-h-[120px]" required />
                </div>
                <Button className="w-full" type="submit">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Portfólio Ionan Nery. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm" asChild>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={16} />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <Linkedin size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

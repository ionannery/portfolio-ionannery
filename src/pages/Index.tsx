import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Phone, MapPin, Server, Cloud, Database, Monitor, Sun, Moon } from 'lucide-react';

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
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
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
      title: 'project-pixels-art',
      description: 'Aplicação web para criar e colorir desenhos em um quadro de pixels. Desenvolvido com JavaScript, HTML e CSS.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/ionannery/project-pixels-art',
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
        'Atuação no time de Blue Team em ambiente de SOC, com foco em detecção, análise e resposta a incidentes de segurança cibernética. Sólida experiência em administração de NGFW FortiGate (configuração, controle de web filter e app control, troubleshooting, além de integração, análise avançada de logs e gestão centralizada através das soluções FortiAnalyzer e FortiManager.',
        ' ',
        'Administração de NGFW (Fortigate).',
        'Implementação túneis VPN (IPSec e SSL).',
        'Roteamento dinâmico (BGP).',
        'Apoio em redes SD-WAN e melhorias contínuas de segurança.',
        'Alteração/Criação e Administração de regras de firewall.',
        'Criação de regras de QoS/Traffic Shapping',
        'Configurações de perfis de Webfilter, AppControl.',
        'Gerenciamento centralizado via FortiManager.',
        'Análise avançada de logs e geração de relatórios com FortiAnalyzer.',
        'Experiência com SIEM Securonix e proteção de endpoints com SentinelOne.'
      ],
      achievements: [
        'Fortigate, Fortimanager, Fortianalyzer, Blue Team, SD-WAN, EDR/XDR , SIEM, Wazuh, Securonix, SentinelOne'
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
              {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section === 'home' ? 'Início' : 
                   section === 'about' ? 'Sobre Mim' :
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

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Cyber Security Analyst
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Analista de segurança da Informação (Blue Team), com experiência em SOC, detecção e resposta a incidentes, administração de NGFW FortiGate e gestão centralizada com FortiAnalyzer/FortiManager.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="text-lg px-8 py-6"
              >
                Ver Projetos
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-6"
              >
                Entre em Contato
              </Button>
            </div>
          </div>
          <div className="mt-16 animate-float">
            <div className="flex justify-center space-x-8 text-primary/60">
              <Cloud size={40} />
              <Server size={40} />
              <Database size={40} />
              <Monitor size={40} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">Sobre Mim</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in">
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Profissional com foco em Segurança Cibernética, atuando em Blue Team. Experiência em monitoramento ativo, análise de ameaças, detecção e resposta a incidentes, defesa de perímetro, investigação e gerenciamento de vulnerabilidades.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Tenho vivência em ambiente de SOC, comprometido com a entrega de soluções seguras e eficazes para a proteção dos ativos da organização.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex items-center gap-2" asChild>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2" asChild>
                    <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <Linkedin size={20} />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
              <div className="animate-fade-in">
                <Card className="p-6 card-hover">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Competências Principais</h3>
                  <div className="mb-4">
                    <div className="font-semibold mb-1">Certificações:</div>
                    <ul className="list-disc list-inside text-muted-foreground text-sm mb-2">
                      <li>AWS Cloud Practitioner</li>
                      <li>Fortinet Certified Associate Cybersecurity</li>
                    </ul>
                  </div>
                  <div className="font-semibold mb-1">Principais Competências:</div>
                  <ul className="list-disc list-inside text-muted-foreground text-sm">
                    <li><strong>Firewalls</strong> - Fortigate, PfSense</li>
                    <li><strong>SIEM</strong> - Wazuh, Securonix</li>
                    <li><strong>EDR/XDR</strong> - SentinelOne</li>
                    <li><strong>Vulnerability Management</strong> - Openvas, Nessus</li>
                    <li><strong>Frameworks e Metodologias</strong> - NIST, Cyber Kill Chain, MITRE ATT&CK</li>
                    <li><strong>Cloud Security</strong> - AWS Shield, Amazon GuardDuty, Amazon Inspector</li>
                    <li><strong>Sistemas Operacionais</strong> - Windows, Linux, MacOS</li>
                    <li><strong>Metodologias</strong> - Kanban, Scrum (Jira)</li>
                    <li><strong>Monitoramento</strong> - Zabbix, Grafana, CloudWatch</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
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

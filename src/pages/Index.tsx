
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Server, Cloud, Database, Monitor, Zap } from 'lucide-react';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    'AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 
    'Jenkins', 'GitLab CI/CD', 'Python', 'Bash', 'Linux', 'Monitoring'
  ];

  const projects = [
    {
      title: 'Infrastructure as Code Platform',
      description: 'Plataforma completa de IaC usando Terraform e AWS para provisionamento automatizado de recursos cloud.',
      technologies: ['Terraform', 'AWS', 'Python', 'Docker'],
      github: '#',
      demo: '#'
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Sistema robusto de CI/CD com Jenkins e GitLab para deployment automatizado e integração contínua.',
      technologies: ['Jenkins', 'GitLab', 'Docker', 'Kubernetes'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Monitoring & Alerting System',
      description: 'Stack completo de monitoramento com Prometheus, Grafana e alertas inteligentes para infraestrutura.',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Python'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Cloud Migration Tool',
      description: 'Ferramenta para migração automatizada de aplicações legacy para arquitetura cloud-native.',
      technologies: ['Python', 'AWS', 'Docker', 'Terraform'],
      github: '#',
      demo: '#'
    }
  ];

  const experiences = [
    {
      role: 'DevOps Engineer Senior',
      company: 'Tech Solutions Corp',
      period: '2022 - Presente',
      description: 'Liderança técnica em projetos de transformação digital, implementação de practices DevOps e automação de infraestrutura cloud.',
      achievements: [
        'Reduziu tempo de deployment em 70% através de CI/CD automatizado',
        'Implementou Infrastructure as Code reduzindo custos em 40%',
        'Liderou migração para arquitetura de microserviços'
      ]
    },
    {
      role: 'Cloud Infrastructure Specialist',
      company: 'Digital Innovations Ltd',
      period: '2020 - 2022',
      description: 'Especialista em soluções cloud AWS e Azure, automação de processos e otimização de performance.',
      achievements: [
        'Projetou arquitetura cloud para aplicações de alta disponibilidade',
        'Implementou monitoring e alerting que reduziu downtime em 85%',
        'Automatizou provisioning de recursos com Terraform'
      ]
    },
    {
      role: 'Systems Administrator',
      company: 'Enterprise Systems Inc',
      period: '2018 - 2020',
      description: 'Administração de sistemas Linux, implementação de containers e versionamento de código.',
      achievements: [
        'Containerizou aplicações legacy aumentando eficiência',
        'Implementou backup automatizado e disaster recovery',
        'Otimizou performance de servidores em 60%'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">DevOps Portfolio</div>
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
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center gradient-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              DevOps & Cloud
              <span className="text-primary block">Infrastructure</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Especialista em automação, infraestrutura cloud e práticas DevOps modernas. 
              Transformando ideias em soluções escaláveis e eficientes.
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
                  Sou um profissional apaixonado por tecnologia com foco em DevOps e infraestrutura cloud. 
                  Com formação DevOps Pro e certificações relevantes, possuo expertise em automação, 
                  containerização e arquitetura de soluções escaláveis.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Minha missão é otimizar processos, reduzir custos operacionais e acelerar o time-to-market 
                  através da implementação de práticas DevOps modernas e soluções cloud-native.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Github size={20} />
                    GitHub
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Linkedin size={20} />
                    LinkedIn
                  </Button>
                </div>
              </div>
              <div className="animate-fade-in">
                <Card className="p-6 card-hover">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Competências Principais</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap size={16} className="text-primary" />
                      <span>AWS Certified Solutions Architect</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap size={16} className="text-primary" />
                      <span>Kubernetes Administrator (CKA)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap size={16} className="text-primary" />
                      <span>DevOps Pro Certification</span>
                    </div>
                  </div>
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
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0">
                    {exp.period}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wide">Principais Conquistas:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
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
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
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
              <h3 className="text-2xl font-semibold mb-6 text-primary">Vamos Conversar</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Interessado em colaborar ou discutir oportunidades? 
                Estou sempre aberto a novos desafios e projetos interessantes.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-primary" />
                  <span>contato@devopsportfolio.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-primary" />
                  <span>+55 (11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-primary" />
                  <span>São Paulo, Brasil</span>
                </div>
              </div>
            </div>
            <Card className="p-6 animate-fade-in">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <Input placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Assunto</label>
                  <Input placeholder="Assunto da mensagem" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea 
                    placeholder="Sua mensagem aqui..." 
                    className="min-h-[120px]"
                  />
                </div>
                <Button className="w-full">
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
              © 2024 DevOps Portfolio. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button variant="ghost" size="sm">
                <Github size={16} />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin size={16} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

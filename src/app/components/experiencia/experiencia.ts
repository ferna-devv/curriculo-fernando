import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Experiencia } from '../../models/experiencia.interface';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienciaComponent {
  readonly trajetoria = signal<Experiencia[]>([
    {
      periodo: '2026 - Presente',
      titulo: 'Graduação em Tecnologia',
      instituicao: 'Faculdade Uniateneu',
      descricao:
        'Construção de fundamentos sólidos em computação, algoritmos, arquitetura de sistemas e metodologias de desenvolvimento.',
      tags: ['Algoritmos', 'Engenharia de Software', 'Sistemas'],
      icone: '🎓',
      destaque: false,
    },
    {
      periodo: '2026 - Foco Principal',
      titulo: 'Imersão em Bancos de Dados & Backend',
      instituicao: 'Prática & Modelagem de Dados',
      descricao:
        'Foco diário na modelagem relacional de dados, escrita de queries eficientes em SQL/PostgreSQL e integração de lógica de negócio estruturada com Node.js e TypeScript.',
      tags: ['PostgreSQL', 'SQL', 'Modelagem Relacional', 'Node.js'],
      icone: '🗄️',
      destaque: true,
    },
    {
      periodo: '2026',
      titulo: 'Aceleração Prática & Projetos',
      instituicao: 'Desenvolvimento Contínuo',
      descricao:
        'Criação contínua de aplicações reais para acelerar o aprendizado, aplicando controle de versão com Git/GitHub, tipagem estrita e padrões limpos de código.',
      tags: ['TypeScript', 'Git & GitHub', 'Clean Code'],
      icone: '🚀',
      destaque: false,
    },
  ]);
}

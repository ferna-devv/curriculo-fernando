import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { Skill, CategoriaSkill } from '../../models/skill.interface';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  // 1. Estado de origem: Qual filtro o usuário escolheu (começa em 'Todos')
  readonly filtroAtivo = signal<CategoriaSkill>('Todos');

  // 2. Lista base com suas habilidades reais de desenvolvedor
  readonly todasAsSkills = signal<Skill[]>([
    {
      nome: 'Node.js',
      categoria: 'Backend',
      nivelTexto: 'Praticando',
      progresso: 65,
      icone: '🟢',
    },
    {
      nome: 'TypeScript',
      categoria: 'Backend',
      nivelTexto: 'Praticando',
      progresso: 60,
      icone: '🔷',
    },
    {
      nome: 'JavaScript',
      categoria: 'Backend',
      nivelTexto: 'Praticando',
      progresso: 70,
      icone: '⚡',
    },
    {
      nome: 'SQL / PostgreSQL',
      categoria: 'Banco de Dados',
      nivelTexto: 'Estudando',
      progresso: 50,
      icone: '🐘',
    },
    {
      nome: 'Git & GitHub',
      categoria: 'Ferramentas',
      nivelTexto: 'Praticando',
      progresso: 65,
      icone: '🐙',
    },
    {
      nome: 'HTML & SCSS',
      categoria: 'Fundamentos Web',
      nivelTexto: 'Conhecimento Base',
      progresso: 60,
      icone: '🎨',
    },
  ]);

  // 3. As categorias para os botões de filtro
  readonly categorias: CategoriaSkill[] = [
    'Todos',
    'Backend',
    'Banco de Dados',
    'Ferramentas',
    'Fundamentos Web',
  ];

  // 4. COMPUTED: Recalcula a lista exibida automaticamente quando o filtroAtivo mudar!
  readonly skillsFiltradas = computed(() => {
    const filtro = this.filtroAtivo();
    if (filtro === 'Todos') {
      return this.todasAsSkills();
    }
    return this.todasAsSkills().filter((skill) => skill.categoria === filtro);
  });

  // 5. Ação disparada pelo clique do usuário
  setFiltro(categoria: CategoriaSkill): void {
    this.filtroAtivo.set(categoria);
  }
}

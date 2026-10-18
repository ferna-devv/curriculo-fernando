// src/app/models/skill.interface.ts

export type CategoriaSkill = 'Todos' | 'Backend' | 'Banco de Dados' | 'Ferramentas' | 'Fundamentos Web';

export type NivelProficiencia = 'Estudando' | 'Praticando' | 'Conhecimento Base';

export interface Skill {
  nome: string;
  categoria: 'Backend' | 'Banco de Dados' | 'Ferramentas' | 'Fundamentos Web';
  nivelTexto: NivelProficiencia;
  progresso: number; // 0 a 100 para a barra visual
  icone: string;     // Emojis ou símbolos tech para cada card
}

// src/app/models/experiencia.interface.ts

export interface Experiencia {
  periodo: string;
  titulo: string;
  instituicao: string;
  descricao: string;
  tags: string[];
  icone: string;
  destaque?: boolean;
}

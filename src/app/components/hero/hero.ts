import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  readonly nome = signal('Fernando Luciano Oliveira de Andrade');
  readonly papel = signal('Dev Backend | Banco de Dados');
  readonly bio = signal(
    'Estudante na Faculdade Uniateneu com foco em desenvolvimento backend e bancos de dados. Apaixonado por construir arquiteturas sólidas, lógica estruturada e acelerar o aprendizado na prática.'
  );
  readonly avatarUrl = signal('/avatar.jpg');
}

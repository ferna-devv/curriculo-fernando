import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContatoComponent {
  readonly email = signal('fernandokloa@hotmail.com');
  readonly linkedinUrl = signal(
    'https://br.linkedin.com/in/fernando-luciano-oliveira-de-andrade-866135207'
  );
  readonly githubUrl = signal('https://github.com');

  // Estado para o feedback visual de 'Copiado!'
  readonly copiado = signal(false);

  // Estado para alternância de tema (Dark <-> Light)
  readonly temaEscuro = signal(true);

  // 1. Copiar E-mail com a Clipboard API nativa
  async copiarEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.email());
      this.copiado.set(true);
      // Volta ao estado original após 2 segundos
      setTimeout(() => this.copiado.set(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar e-mail:', err);
    }
  }

  // 2. Alternar entre Tema Escuro e Claro
  alternarTema(): void {
    this.temaEscuro.update((atual) => !atual);
    const novoTema = this.temaEscuro() ? 'dark' : 'light';
    
    // Altera o atributo na tag <html> para ativar as variáveis CSS da Fase 2!
    if (novoTema === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }
}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { SkillsComponent } from './components/skills/skills';
import { ExperienciaComponent } from './components/experiencia/experiencia';
import { ContatoComponent } from './components/contato/contato';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    SkillsComponent,
    ExperienciaComponent,
    ContatoComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}

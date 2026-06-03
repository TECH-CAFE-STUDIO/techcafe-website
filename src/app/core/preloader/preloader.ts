import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-preloader',
  imports: [],
  templateUrl: './preloader.html',
  styleUrl: './preloader.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Preloader {
  private el = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      const host = this.el.nativeElement;

      const tl = gsap.timeline();

      tl.to(host.querySelector('.ambient-glow'), {
        opacity: 1,
        scale: 1.2,
        duration: 0.7,
        ease: 'power2.out',
      })
        .to(host.querySelector('.logo'), {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power4.out',
        }, '-=0.4')
        .to(host.querySelector('.logo'), {
          scale: 1.03,
          duration: 0.2,
        })
        .to(host.querySelector('.logo'), {
          scale: 1,
          duration: 0.2,
        })
        .to(host.querySelector('.preloader'), {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
        }, '+=0.2');
    });
  }
}

// eslint-disable-next-line simple-import-sort/imports
import { isTouchDevice } from '$utils/deviceInfo';
import { gsap } from 'gsap';

export const cursor = () => {
  if (isTouchDevice()) {
    console.log('Touch device detected. Cursor effect disabled.');
    return;
  }

  class CursorInkTrail {
    private pageWrapper: HTMLElement;
    private cursorWrapper: HTMLElement;
    private trailElements: HTMLDivElement[] = [];
    private trailLength: number;
    private positions: { x: number; y: number }[] = [];
    private shrinkTimeout: number | null = null;
    private defaultColor: string;
    private hoverColor: string;
    private templateElement: HTMLElement;

    constructor() {
      this.pageWrapper = document.querySelector('.page-wrapper') as HTMLElement;
      this.cursorWrapper = document.querySelector('.cursor_component') as HTMLElement;
      this.templateElement = document.querySelector('.trail-segment-template') as HTMLElement;
      this.trailLength = 50;
      this.defaultColor = '#751e03';
      this.hoverColor = '#f18a00';

      this.init();
    }

    private init() {
      for (let i = 0; i < this.trailLength; i++) {
        this.positions.push({ x: 0, y: 0 });
      }

      for (let i = 0; i < this.trailLength; i++) {
        const segment = this.templateElement.cloneNode(true) as HTMLDivElement;
        segment.style.display = 'block'; // Ensure clones are visible
        gsap.set(segment, { opacity: 1 - i / this.trailLength }); // Set initial opacity with GSAP
        this.trailElements.push(segment);
        this.cursorWrapper.appendChild(segment);
      }

      window.addEventListener('mousemove', this.handleMouseMove.bind(this));
      window.addEventListener('mouseover', this.handleMouseOver.bind(this));
      window.addEventListener('mouseout', this.handleMouseOut.bind(this));
    }

    private handleMouseMove(event: MouseEvent) {
      if (this.shrinkTimeout) clearTimeout(this.shrinkTimeout);

      const lastPosition = this.positions[0];
      const dx = event.clientX - lastPosition.x;
      const dy = event.clientY - lastPosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const step = 3;

      if (distance > step) {
        const steps = Math.ceil(distance / step);
        for (let i = 1; i <= steps; i++) {
          this.positions.unshift({
            x: lastPosition.x + (dx / steps) * i,
            y: lastPosition.y + (dy / steps) * i,
          });
          this.positions.pop();
        }
      } else {
        this.positions.unshift({ x: event.clientX, y: event.clientY });
        this.positions.pop();
      }

      // Animate each segment’s position and opacity
      this.trailElements.forEach((segment, index) => {
        const { x, y } = this.positions[index];
        gsap.to(segment, {
          x,
          y,
          opacity: 1 - index / this.trailLength,
          duration: 0.2,
          overwrite: 'auto',
          ease: 'power1.out',
        });
      });

      this.shrinkTimeout = window.setTimeout(() => this.shrinkTrail(), 500);
    }

    private handleMouseOver(event: MouseEvent) {
      const target = (event.target as HTMLElement).closest('[data-hover-element]');
      if (target) {
        this.trailElements.forEach((segment) => {
          gsap.to(segment, { backgroundColor: this.hoverColor, duration: 0.2 });
        });
      }
    }

    private handleMouseOut(event: MouseEvent) {
      const target = (event.target as HTMLElement).closest('[data-hover-element]');
      if (target) {
        this.trailElements.forEach((segment) => {
          gsap.to(segment, { backgroundColor: this.defaultColor, duration: 0.2 });
        });
      }
    }

    private shrinkTrail() {
      this.trailElements.forEach((segment) => {
        gsap.to(segment, { opacity: 0, duration: 0.3, stagger: 0.2, ease: 'power2.out' });
      });
    }
  }

  new CursorInkTrail();
};

export default cursor;

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import {
  defaultRateCardPlan,
  normalizeRateCardPlan,
  RateCardFeature,
  RateCardInput,
  RateCardPlan,
  RateCardSpecItem
} from '@fhi/rate-card-core';

@Component({
  selector: 'fhi-rate-card',
  templateUrl: './fhi-rate-card.component.html',
  styleUrls: ['../../../../core/src/components/rate-card/styles/rate-card.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class FhiRateCardComponent {
  @Input() set data(value: RateCardInput) {
    this.setData(value);
  }

  @Output() ctaClick = new EventEmitter<RateCardPlan>();
  @Output() journeyOpen = new EventEmitter<RateCardPlan>();
  @Output() journeyClose = new EventEmitter<RateCardPlan>();

  plan = defaultRateCardPlan();
  featuresOpen = false;
  journeyModalOpen = false;

  setData(value: RateCardInput): void {
    this.plan = normalizeRateCardPlan(value);
    this.closeJourney();
  }

  openJourney(): void {
    this.journeyModalOpen = true;
    this.journeyOpen.emit(this.plan);
  }

  closeJourney(): void {
    if (this.journeyModalOpen) {
      this.journeyClose.emit(this.plan);
    }
    this.journeyModalOpen = false;
  }

  closeJourneyOnBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeJourney();
    }
  }

  emitCta(): void {
    this.ctaClick.emit(this.plan);
  }

  featureTrackBy(index: number, feature: RateCardFeature): string {
    return `${feature.text}-${index}`;
  }

  stepTrackBy(index: number, step: { period: string }): string {
    return `${step.period}-${index}`;
  }

  journeyStepClass(style: string): string {
    return `fhi-rate-card__journey-step fhi-rate-card__journey-step--${style}`;
  }

  iconLabel(name: string): string {
    if (name === 'plus') return '+';
    if (name === 'star') return '*';
    if (name === 'download') return 'v';
    if (name === 'upload') return '^';
    if (name === 'unlimited') return 'un';
    if (name === 'tag') return '$';
    return 'ok';
  }

  specItems(): Array<{ item: RateCardSpecItem; icon: 'download' | 'upload' | 'unlimited' }> {
    return [
      { item: this.plan.specs.download, icon: 'download' },
      { item: this.plan.specs.upload, icon: 'upload' },
      { item: this.plan.specs.usage, icon: 'unlimited' }
    ];
  }
}

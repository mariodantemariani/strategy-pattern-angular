import { Injectable } from '@angular/core';

const collectionOfStrategies = {
  english: 'englishGreetingService',
  spanish: 'spanishGreetingService',
};

export abstract class GreetingStrategy {
  abstract greet(): string;
}

@Injectable()
export class GreetingService {
  private strategy: GreetingStrategy | undefined;

  constructor(
    private englishGreetingService: EnglishGreetingService,
    private spanishGreetingService: SpanishGreetingService
  ) {}

  setStrategy(strategy: any) {
    const value =
      collectionOfStrategies[strategy as keyof typeof collectionOfStrategies];

    console.log('@@@-strategy selected: ' + value);

    if (strategy === 'english') {
      this.strategy = this.englishGreetingService;
    } else if (strategy === 'spanish') {
      this.strategy = this.spanishGreetingService;
    } else {
      throw new Error('Unsupported language:' + strategy);
    }
  }

  greet(): string {
    if (!this.strategy) {
      throw new Error('Strategy is not set yets!');
    }
    return this.strategy.greet();
  }
}

@Injectable()
export class EnglishGreetingService extends GreetingStrategy {
  constructor() {
    super();
  }

  greet(): string {
    return 'Hello!';
  }
}

@Injectable()
export class SpanishGreetingService extends GreetingStrategy {
  constructor() {
    super();
  }

  greet(): string {
    return '¡Hola!';
  }
}

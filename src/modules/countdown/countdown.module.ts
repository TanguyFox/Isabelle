import { IsabelleModule } from '@/modules/bot-module.js';
import { CountdownCommand } from './commands/countdown.command.js';

export class CountDown extends IsabelleModule {
  readonly name = 'Countdown';

  init(): void {
    this.registerCommands([new CountdownCommand()]);
  }
}

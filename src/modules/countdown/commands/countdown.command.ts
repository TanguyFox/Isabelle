import { IsabelleCommand } from '@/manager/commands/command.interface.js';
import { SlashCommandBuilder, CommandInteraction } from 'discord.js';
import { fromURL } from 'node-ical';

export class CountdownCommand implements IsabelleCommand {
  commandData: SlashCommandBuilder = new SlashCommandBuilder()
    .setName('calendar')
    .setDescription('Get the calendar of the 1A FISA students');

  async executeCommand(interaction: CommandInteraction) {
    const calendarData = await fromURL(
      'https://edt.telecomnancy.univ-lorraine.fr/static/fisa_1a.ics',
    );
    console.log(calendarData);
    await interaction.reply('Calendar data fetched');
  }
}

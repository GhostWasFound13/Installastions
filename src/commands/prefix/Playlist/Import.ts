import {
  EmbedBuilder,
  PermissionsBitField,
  ApplicationCommandOptionType,
  Message,
} from "discord.js";
import { convertTime } from "../../../structures/ConvertTime.js";
import { Manager } from "../../../manager.js";
import { PlaylistInterface } from "../../../types/Playlist.js";
let playlist: PlaylistInterface | null;

export default {
  name: "playlist-import",
  description: "Import a playlist to queue.",
  category: "Playlist",
  usage: "<playlist_name_or_id>",
  aliases: ["pl-import"],
  owner: false,
  premium: false,
  lavalink: true,
  isManager: false,

  run: async (
    client: Manager,
    message: Message,
    args: string[],
    language: string,
    prefix: string
  ) => {
    const value = args[0] ? args[0] : null;

    if (value == null)
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
            .setDescription(
              `${client.i18n.get(language, "playlist", "invalid")}`
            )
            .setColor(client.color),
        ],
      });

    const { channel } = message.member!.voice;
    if (!channel)
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
            .setDescription(
              `${client.i18n.get(language, "playlist", "import_voice")}`
            )
            .setColor(client.color),
        ],
      });

    const player = await client.manager.createPlayer({
      guildId: message.guild!.id,
      voiceId: message.member!.voice.channel!.id,
      textId: message.channel.id,
      deaf: true,
    });

    const SongAdd = [];
    let SongLoad = 0;

    if (value) {
      const Plist = value.replace(/_/g, " ");

      const fullList = await client.db.get("playlist");

      const pid = Object.keys(fullList).filter(function (key) {
        return (
          fullList[key].owner == message.author.id &&
          fullList[key].name == Plist
        );
      });

      playlist = fullList[pid[0]];
    }

    if (!playlist)
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
            .setDescription(
              `${client.i18n.get(language, "playlist", "invalid")}`
            )
            .setColor(client.color),
        ],
      });

    if (playlist.private && playlist.owner !== message.author.id) {
      message.channel.send({
        embeds: [
          new EmbedBuilder()
            .setDescription(
              `${client.i18n.get(language, "playlist", "import_private")}`
            )
            .setColor(client.color),
        ],
      });
      return;
    }

    const totalDuration = convertTime(
      playlist.tracks!.reduce((acc, cur) => acc + cur.length!, 0)
    );

    const msg = await message.channel.send({
      embeds: [
        new EmbedBuilder()
          .setDescription(
            `${client.i18n.get(language, "playlist", "import_loading")}`
          )
          .setColor(client.color),
      ],
    });

    for (let i = 0; i < playlist.tracks!.length; i++) {
      const res = await player.search(playlist.tracks![i].uri, {
        requester: message.author,
      });
      if (res.type == "TRACK") {
        SongAdd.push(res.tracks[0]);
        SongLoad++;
      } else if (res.type == "PLAYLIST") {
        for (let t = 0; t < res.tracks.length; t++) {
          SongAdd.push(res.tracks[t]);
          SongLoad++;
        }
      } else if (res.type == "SEARCH") {
        SongAdd.push(res.tracks[0]);
        SongLoad++;
      }
      if (SongLoad == playlist.tracks!.length) {
        player.queue.add(SongAdd);
        const embed = new EmbedBuilder() // **Imported • \`${Plist}\`** (${playlist.tracks.length} tracks) • ${message.author}
          .setDescription(
            `${client.i18n.get(language, "playlist", "import_imported", {
              name: playlist.name,
              tracks: String(playlist.tracks!.length),
              duration: totalDuration,
              user: String(message.author),
            })}`
          )
          .setColor(client.color);

        msg.edit({ content: " ", embeds: [embed] });
        if (!player.playing) {
          player.play();
        }
      }
    }
  },
};

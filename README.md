# 🤖 Cepheus Observer (cepheus-bot)

Simplest Telegram bot for querying Minecraft server through [default query protocol](https://minecraft.wiki/w/Query). Made for myself. Responds in Russian

## Versions
There are two versions available:
- `legacy` branch: unmaintained, depends on deprecated [minecraft-server-util](https://github.com/PassTheMayo/minecraft-server-util) (UDP)
- `master` branch: **recommended**, depends on [node-minecraft-protocol](https://github.com/PrismarineJS/node-minecraft-protocol) (TCP)

You can try both to see which one works for you

## Installation
```bash
git clone https://github.com/DrumYum/cepheus-bot

cp .env-example .env

docker compose up
```

## Limitations
Modern Minecraft versions sometimes hide player nicknames behind "Anonymous Player", even for ~~pirate~~ offline servers

## TODO:
- [ ] track player online statistics
- [ ] i18n
- [ ] reduce docker images size (currently ~400MB)

# cepheus-bot 🤖

Simplest Telegram bot for querying Minecraft server through default query protocol. Made for myself. Responds in Russian

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

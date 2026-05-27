# Vozhakin Group

Personal portfolio site for Yasha Vozhakin — static HTML + JS, Apple Wallet-inspired card stack with liquid glass aesthetic and cosmic starfield background.

## Files

- `index.html` — main public page, reads `cards.json`
- `admin.html` — content editor (loads/exports cards.json)
- `cards.json` — content data (projects, profile, contacts, footer)
- `*.png`, `*.svg` — project logos and other assets

## Deploy

Static — Vercel auto-deploys this repo on push. No build step.

## Админка: настройка сервера один раз

Чтобы сохранять изменения в админке через пароль (без передачи токенов в браузер),
поставьте две переменные окружения в Vercel: Settings → Environment Variables:

- `GITHUB_TOKEN` — Personal Access Token c правом Contents: Read+Write на этот репо
  (https://github.com/settings/personal-access-tokens)
- `ADMIN_PASSWORD` — любой пароль, которым будет открываться админка

После Redeploy в Vercel — в админке нажимаете «Сохранить на сайт», вводите пароль,
данные коммитятся через `/api/save-cards`, и Vercel пересобирает сайт.

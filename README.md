# MAKE SOMETHING

Maker collective website — project-based community for people who make real things.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
- `npm run test` — unit tests

## Routes

- `/` — Home
- `/about` — About
- `/projects` — Project archive
- `/projects/[id]` — Project detail
- `/makers` — Makers
- `/join` — Application form (`POST /api/join`)

## Join form setup

지원서는 `/api/join`으로 전송됩니다. 아래 중 **하나**를 `.env.local`(로컬) / Vercel Environment Variables(배포)에 넣으세요.

```bash
# A) Formspree
FORMSPREE_FORM_ID=xxxxxxxx

# B) 이메일 수신 (FormSubmit)
JOIN_NOTIFY_EMAIL=you@example.com

# C) 커스텀 웹훅
JOIN_WEBHOOK_URL=https://hooks.example.com/...
```

로컬에서 env가 없으면 development 모드로 콘솔에만 기록되고 성공 처리됩니다.


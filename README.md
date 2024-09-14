# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

---

## DB Verbindung

1. Ich nutze erstmal docker nicht, habe lokal auf windows postgres installiert.
2. Ich habe nicht hinbekommen mich einfach mit docker zu verbinden weil mein postgres service darüber lag von windows
3. Weiteres Problem war der DB name, welcher keine Bindestriche halten darf

```sh
PS C:\Users\Kacpe>  psql postgresql://postgres:PASSWORD@localhost:5432/t3-first-test
psql: error: connection to server at "localhost" (::1), port 5432 failed: FATAL:  Datenbank »t3-first-test« existiert nicht

# Das ist der richtige Befehl
PS C:\Users\Kacpe>  psql postgresql://postgres:shacoPASSWORD@localhost:5432/t3_first_test
```

TODO verstehen und zurordnen db commandos

```json
    "db:generate": "drizzle-kit generate"
    "db:migrate": "drizzle-kit migrate"
    "db:push": "drizzle-kit push"
    "db:studio": "drizzle-kit studio"
```

## Zusammenfassung

Ich hatte paar Schwierigkeiten ein Projekt aufzusetzten auf windows. Vorallem wegen der DB.
Ich musste:

1. Node 20 LTS installieren
2. mit yarn dependencies installieren
3. .env beschreiben
4. Discord App regristierien für auth
5. postgressql installieren
6. verbindung zur db herstelllen. Dabei beachten dass der Datenbank name gültig ist! und keine bindestriche enthällt.
7. db:generate -> db:migrate -> db:push
8. db:studio um in die DB zu gucken

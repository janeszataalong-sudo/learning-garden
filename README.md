# สวนเรียนรู้ · Learning Garden

A complete, Thai-first learning app with **nine games**, an English switch, responsive touch controls, optional browser speech, and device-local stars. No paid libraries, build step, AI keys, database, login, or external assets are required.

## Start here: GitHub → Railway

**Use a new GitHub repository and a new Railway project/service for this app.** Your existing website and service do not need any changes.

1. Extract this ZIP. It contains the project files at the ZIP root.
2. Create a **new empty GitHub repository**, for example `learning-garden`.
3. Upload the **extracted files and folders**, not the ZIP itself. The repository root must contain `Dockerfile`, `package.json`, `server.mjs`, `railway.json`, and `public/`. Do not put everything inside an extra enclosing folder. Include `.github/` for automatic checks; some file pickers hide dot folders.
4. Commit the files to the repository. For the most reliable upload of every file, open the extracted folder in GitHub Desktop, add it as a local repository, commit, and publish it as a **new repository**. If needed, use “Create a repository here” when GitHub Desktop says the folder is not yet a repository.
5. In Railway, choose **New Project → Deploy from GitHub repo** and select this new repository. Allow GitHub access to this repository if prompted. Do not select or replace your existing website service.
6. Railway detects the root `Dockerfile` and reads `railway.json`. There are **no application secrets or environment variables to add**. Railway supplies `PORT`; the app listens on it at `0.0.0.0`.
7. After deployment is healthy, open the service's **Settings → Networking → Public Networking → Generate Domain**. Use the app port Railway detects/supplies. Open the generated HTTPS URL on your phone.
8. Confirm the home page shows nine cards. Visit `/health` on that domain: it should return `{"status":"ok"}`. Play a game, earn a star, reload, and switch languages.

**Important:** GitHub/Railway do not deploy the contents of an uploaded ZIP automatically. Extract once, upload its contents together, then connect the repository. Railway hosting may require a paid plan or consume your hosting allowance; the games themselves have no AI usage charges.

Official setup references: [GitHub deployment](https://docs.railway.com/quick-start), [Dockerfile services](https://docs.railway.com/services), [health checks](https://docs.railway.com/deployments/healthchecks), [configuration](https://docs.railway.com/config-as-code/reference).

## Run on your computer

Install Node.js 22 or newer, open a terminal inside the extracted folder, and run:

```sh
npm start
```

Open `http://localhost:3000`. No `npm install` is needed: the project uses Node's built-in modules only. Use the server rather than opening `index.html` directly because the app uses browser JavaScript modules.

```sh
npm test
```

Tests cover game rules and the actual HTTP server. GitHub Actions also builds the Docker image and verifies its health endpoint on a supplied port.

Optional Docker check:

```sh
docker build -t learning-garden .
docker run --rm -e PORT=8080 -p 8080:8080 learning-garden
```

Open `http://localhost:8080` and `/health`.

## The nine games

| Game | What children do |
|---|---|
| Math Adventure | Complete five randomized addition/subtraction puzzles. Starter has object counting; Challenge uses larger numbers. |
| Robot Maze | Queue arrow commands, undo them, then run an animated robot through three solvable mazes. |
| English Word Explorer | Match pictures to English vocabulary with Thai support and optional spoken English. |
| Memory Match | Find six pairs; mismatches turn back after a short pause. |
| Little Scientist | Predict six everyday science outcomes and discover explanations. |
| Shape Builder | Choose ordered shape pieces to match four building blueprints. |
| Daily Life Challenge | Arrange four everyday routines step by step. |
| Thai Money Shop | Use baht denominations to pay exact prices or give change on five purchases. |
| Clock Explorer | Match five analog times or explore freely. Unnumbered dial; time written in words. Hour hand moves with minutes. |

## Family notes

- Intended for shared play around ages 4–8. Young readers may need an adult to read prompts.
- Wrong answers can be retried; no time pressure, lives, ads, purchases, or leaderboards.
- A star is awarded once per solved challenge. Replaying can earn new stars.
- Stars and language settings stay in `localStorage` on the current browser/device. Clearing browser data removes them. Private browsing or blocked storage may prevent persistence; games still work.
- Parent page offers an explicit two-tap star reset and optional speech. Browser speech availability varies; Thai voices may be missing. Depending on device, voice synthesis can use the browser/OS voice service. All written instructions remain available.
- Clock hour slider has twelve positions and minute slider moves in quarter-hour steps. Both are keyboard accessible. Explore mode awards no stars; use Match mode for challenges.
- Simplified baht controls teach values, not authentic note/coin appearance. Nothing can be purchased.
- No analytics or personal data collection. Hosting providers can retain normal request logs.
- The app runs independently of ChatGPT. It does not use tokens or an AI API. It still needs a web server connection to load; it is not an installable offline PWA.

## Files

`public/` contains the entire frontend; `logic.js` holds reusable rules and content, `app.js` runs the interface, and `style.css` supplies the responsive design. `server.mjs` serves assets and `/health`. `Dockerfile` and `railway.json` configure hosting. `.github/workflows/check.yml` runs checks on GitHub. `tests/` contains the verification suite.

## Troubleshooting

- **Deployment fails:** check that `Dockerfile` and `public/` are at the repository root and read Railway build logs. No install command or API key is necessary.
- **Health check fails:** keep `/health` configured and use Railway's supplied `PORT`. Do not force a different start command or port.
- **Page has no styling:** confirm `public/style.css` was included and redeploy the complete folder contents.
- **Sound unavailable:** turn it off and use the written prompts. Check OS/browser voice availability.
- **Older app after updating:** reload the page; files are served with `no-cache` to request the newest version.
- **Progress differs across phones:** progress is intentionally local and does not synchronize.

This version was rebuilt from the requested game titles because the earlier chat reference did not expose the original ZIP or source. It includes the requested Thai Money Shop and number-free Clock Explorer as fresh implementations.

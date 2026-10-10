# Verification · 10 October 2026

## Passed

- Ten automated test groups (`npm test`): randomized math generation (2,000 cases), all three maze paths and collision rules, memory pair integrity, shape/routine order, Thai baht payment/change, analog hand angles and time matching, bilingual content, real HTTP server behavior, and production startup on an environment-supplied PORT.
- JavaScript syntax check for the frontend.
- HTTP checks: all five frontend assets return 200; `/health` returns `{ "status": "ok" }`; HEAD responses have no body; missing/invalid paths and unsupported methods are handled.
- Browser interactions: completed a full five-question math session, verified wrong-answer retry and star awards; programmed the robot to reach home; matched an English word; revealed and completed all six memory pairs; selected a science prediction and received its explanation; completed a shape blueprint and checked the assembled house; ordered a daily routine; paid an exact baht amount and calculated change; adjusted clock hands with keyboard controls and matched a target.
- Language switch preserved the current solved challenge. Reload preserved stars and language on the test device.
- Phone-width inspection confirmed all nine cards and no horizontal overflow on the hub and all nine game screens. Clock board contained no visible numeric characters.
- No browser warning/error logs appeared in the final browser check.

## Deployment preparation and limits

- Node server uses `0.0.0.0` and Railway's supplied `PORT` (default 3000 locally), and implements `/health`. Production startup with a supplied PORT was tested as a separate process.
- Included Dockerfile runs as the non-root Node user. Railway config declares Dockerfile building and health checks.
- Included GitHub Actions workflow runs the tests, builds the container, starts it with `PORT=8080`, and checks `/health`.
- Railway setup was checked against official documentation linked in `README.md`.
- **No Railway service was created or deployed, and no existing website/service was accessed or changed.** Remote deployment and its public URL remain unverified until the user deploys the new repository.
- Docker was not available on the local machine, so the container build was not executed locally. The included GitHub workflow will run that check when uploaded with `.github/` intact.
- Mobile checks used a browser viewport override, not a physical phone. Speech support depends on the browser/device and is optional; voice output was not certified across platforms.
- The original ZIP/source could not be retrieved from the referenced conversation. These are fresh implementations of the requested games.

The tests and checks are included for repeatable verification after upload or future changes. No external application dependencies are required.

# Vector Lab

A browser-based Bengali Class 11 Physics MCQ quiz for vectors and kinematics.

## Included

- 55-question participant flow with 90-minute timer
- Bengali question display with answer navigation and progress bar
- Automatic score, percentage, correct/wrong counts, and answer review
- Admin view with live updates across open tabs in the same browser
- Local persistence through `localStorage`
- CSV export for submitted results

## Run

Open `index.html` directly in a browser, or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Important limitation

This is a static browser application. The live tracker synchronizes open tabs on the same browser/device. Multi-device classroom tracking requires connecting the existing UI to Firebase, Supabase, or a WebSocket backend.

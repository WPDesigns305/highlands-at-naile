HIGHLANDS AT NAILE - DIGITAL SHOWBOOK
=====================================

FILES (keep all of them together in one folder)
  index.html   Interactive showbook (this is the link / QR code destination)
  print.html   Print layout, letter size, same data
  data.js      ALL show content: entries, classes, schedule, sponsors, results
  qrcode.js    QR code generator used by both pages (no internet needed)

HOW TO UPDATE
  Open data.js in any text editor (Notepad, TextEdit, VS Code).
  Replace the sample entries, add sponsors, set the judge, and save.
  Upload the new data.js; both pages update automatically.

POSTING RESULTS ON SHOW DAY
  Set  place: 1  (2, 3...) on entries, and type champion names into the
  "winner" fields. Re-upload data.js. Placed entries sort to the top
  with ribbon colors.

FREE HOSTING (pick one, sign in with scottishhighlandsatnaile@gmail.com)
  Netlify Drop  - app.netlify.com/drop : drag this folder onto the page.
                  To update, drag the folder onto your site's Deploys tab.
  GitHub Pages  - upload the files to a public repo, then
                  Settings > Pages > Deploy from branch.

AFTER IT'S HOSTED
  Put the real web address in  siteUrl  at the top of data.js so the QR
  code on the print version and the Share button point to it.

PRINTING
  Open print.html in Chrome or Edge, press Ctrl+P (Cmd+P on Mac),
  choose Letter, margins Default, and turn ON "Background graphics".
  Choose "Save as PDF" to make a PDF for the printer.

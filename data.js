/* =====================================================================
   HIGHLANDS AT NAILE — SHOWBOOK DATA
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit. Both the interactive showbook
   (index.html) and the print version (print.html) read from it.

   - Entries marked  sample: true  are placeholders. Delete them and add
     real entries. A yellow "sample entries" notice shows on both pages
     until every sample entry is gone.
   - To post results during the show, fill in  place: 1, 2, 3...  on an
     entry and fill in the champion names at the bottom of each show.
     Re-upload this file and the live showbook updates.
   - Text in quotes can contain anything except a straight double quote.
   ===================================================================== */

window.SHOWBOOK = {
  lastUpdated: "November 12, 2026",

  // Put the final web address here once the site is hosted.
  // The QR code on the print version and the Share button use it.
  siteUrl: "https://example.com/highlands-at-naile/",

  show: {
    title: "Highlands at NAILE",
    edition: "2026 Highland Cattle Show",
    expo: "North American International Livestock Exposition",
    date: "Wednesday, November 18, 2026",
    venue: "Kentucky Exposition Center",
    city: "Louisville, Kentucky",
    sanction: "AHCA ROE sanctioned show",
    judge: "To be announced",
    ringman: "",
    reps: "Joseph and Kayla DeLong",
    email: "scottishhighlandsatnaile@gmail.com",
    welcome:
      "Welcome to the Highland show at NAILE. Whether you are leading a heifer into the ring for the first time or have shown Highlands for decades, we are glad you are here. Our goal is simple: build the premier Highland show in the eastern United States, one year at a time, with exhibitors, families and sponsors who love this breed. Stop by the Highland hospitality area in the barn, say hello, and tell us how we can make next year even better."
  },

  schedule: [
    { day: "Tuesday, Nov 17", time: "All day", event: "Highland move-in and check-in" },
    { day: "Wednesday, Nov 18", time: "12:00 PM or later", event: "Junior Highland Show, following the Junior Braunvieh Show" },
    { day: "Wednesday, Nov 18", time: "Following juniors", event: "Junior showmanship" },
    { day: "Wednesday, Nov 18", time: "Following showmanship", event: "Open Highland Show" },
    { day: "Wednesday, Nov 18", time: "After the show", event: "Awards and photos in the Highland hospitality area" }
  ],

  /* ---------------- JUNIOR SHOW ---------------- */
  junior: {
    note: "A junior's age is their age on January 1. Juniors may show through age 21.",
    classes: [
      {
        num: "101", name: "Heifer calves", born: "Birth dates per premium book",
        entries: [
          { back: "11", animal: "Sample Heifer of Glen", reg: "", dob: "2026-02-14", sire: "Sample Sire", dam: "Sample Dam", exhibitor: "Sample Exhibitor", farm: "Sample Farm", town: "Fremont", state: "IN", place: null, sample: true },
          { back: "12", animal: "Sample Bonnie Lass", reg: "", dob: "2026-03-02", sire: "Sample Sire", dam: "Sample Dam", exhibitor: "Sample Exhibitor", farm: "Sample Farm", town: "Lexington", state: "KY", place: null, sample: true }
        ]
      },
      {
        num: "102", name: "Yearling heifers", born: "Birth dates per premium book",
        entries: [
          { back: "14", animal: "Sample Heather Mist", reg: "", dob: "2025-04-10", sire: "Sample Sire", dam: "Sample Dam", exhibitor: "Sample Exhibitor", farm: "Sample Farm", town: "Columbus", state: "OH", place: null, sample: true }
        ]
      },
      {
        num: "103", name: "Two-year-old heifers", born: "Birth dates per premium book",
        entries: []
      }
    ],
    champions: [
      { title: "Grand Champion Junior Heifer", winner: "" },
      { title: "Reserve Grand Champion Junior Heifer", winner: "" }
    ]
  },

  /* ---------------- SHOWMANSHIP ---------------- */
  showmanship: {
    note: "Ages are as of January 1. Division winners return to compete for Overall Showman.",
    divisions: [
      { name: "PeeWee", ages: "Confirm ages", noRank: true,
        note: "Every PeeWee showman is a winner. No placings.",
        entries: [ { back: "11", exhibitor: "Sample Exhibitor", age: "6", town: "Fremont", state: "IN", place: null, sample: true } ] },
      { name: "Junior division", ages: "Confirm ages",
        entries: [ { back: "12", exhibitor: "Sample Exhibitor", age: "10", town: "Lexington", state: "KY", place: null, sample: true } ] },
      { name: "Intermediate division", ages: "Confirm ages", entries: [] },
      { name: "Senior division", ages: "Confirm ages",
        entries: [ { back: "14", exhibitor: "Sample Exhibitor", age: "17", town: "Columbus", state: "OH", place: null, sample: true } ] }
    ],
    champions: [
      { title: "Overall Showman", winner: "" },
      { title: "Reserve Overall Showman", winner: "" }
    ]
  },

  /* ---------------- OPEN SHOW ---------------- */
  open: {
    note: "All animals must be registered with the AHCA or CHCS and owned by the exhibitor.",
    classes: [
      { num: "201", name: "Heifer calves", born: "Birth dates per premium book",
        entries: [
          { back: "21", animal: "Sample Morag of the Glen", reg: "", dob: "2026-01-20", sire: "Sample Sire", dam: "Sample Dam", exhibitor: "Sample Exhibitor", farm: "Sample Highland Farm", town: "Fremont", state: "IN", place: null, sample: true }
        ] },
      { num: "202", name: "Yearling heifers", born: "Birth dates per premium book", entries: [] },
      { num: "203", name: "Two-year-old heifers", born: "Birth dates per premium book", entries: [] },
      { num: "204", name: "Cows", born: "Birth dates per premium book", entries: [] },
      { num: "205", name: "Cow/calf pairs", born: "Calf no more than 250 days old, nursing", entries: [] },
      { num: "301", name: "Bull calves", born: "Birth dates per premium book",
        entries: [
          { back: "31", animal: "Sample Laird of Lochside", reg: "", dob: "2026-02-03", sire: "Sample Sire", dam: "Sample Dam", exhibitor: "Sample Exhibitor", farm: "Sample Highland Farm", town: "Bowling Green", state: "KY", place: null, sample: true }
        ] },
      { num: "302", name: "Yearling bulls", born: "Birth dates per premium book", entries: [] },
      { num: "303", name: "Two-year-old and older bulls", born: "Birth dates per premium book", entries: [] },
      { num: "401", name: "Get-of-sire", born: "Pre-entry required", entries: [] },
      { num: "402", name: "Produce-of-dam", born: "Pre-entry required", entries: [] },
      { num: "403", name: "Breeder's herd", born: "Pre-entry required", entries: [] }
    ],
    champions: [
      { title: "Grand Champion Female", winner: "" },
      { title: "Reserve Grand Champion Female", winner: "" },
      { title: "Grand Champion Bull", winner: "" },
      { title: "Reserve Grand Champion Bull", winner: "" }
    ]
  },

  /* ---------------- SPONSORS ----------------
     Add sponsors under their level. Optional fields:
       logo: "logo-file.png" (put the image next to index.html)
       url:  "https://their-site.com"
       ad:   "One or two lines of ad copy"
  ------------------------------------------- */
  sponsorLevels: [
    { id: "partner",  name: "Highlands at NAILE Partner", price: "$1,000", limit: 3 },
    { id: "platinum", name: "Platinum", price: "$500" },
    { id: "gold",     name: "Gold",     price: "$250" },
    { id: "silver",   name: "Silver",   price: "$100" },
    { id: "bronze",   name: "Bronze",   price: "$50" }
  ],
  sponsors: [
    // { level: "partner", name: "Your Farm Name", town: "Town, ST", url: "https://...", logo: "", ad: "Registered Highland breeding stock. Visitors welcome." },
  ]
};

// ─────────────────────────────────────────────────────────────
//  GATHERINGS: the list that powers the "Gatherings" page.
//
//  To add an event: copy the template below, paste it inside the
//  square brackets, and fill it in. Keep the quote marks and the
//  commas exactly as they are. Dates must be YEAR-MONTH-DAY.
//
//  Past events disappear on their own (the page checks the date),
//  and the newest-first order is handled for you, so you can add
//  events in any order.
//
//  TEMPLATE
//  {
//    date: "2026-12-05",            // required, YYYY-MM-DD
//    endDate: "",                   // optional, for multi-day events
//    time: "7:00 PM",               // optional
//    title: "Event name",           // required
//    type: "Performance",           // Performance, Gathering, Talk, or Workshop
//    location: "Venue, City",       // optional
//    description: "One or two sentences about the event.",
//    link: "https://example.com",   // optional (tickets, RSVP, details)
//    linkLabel: "Get tickets",      // optional button text
//  },
// ─────────────────────────────────────────────────────────────

export const gatherings = [
  {
    date: "2027-04-02",
    title: "Kin by Chiko in concert",
    type: "Performance",
    location: "The CheckOut",
    description: "An evening of original music and storytelling.",
  },
];

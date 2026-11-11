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
    time: "7:30 PM (doors 6:30)",
    title: "Kin by Chiko in concert",
    type: "Performance",
    location: "The CheckOut, 4116 N Clark St, Chicago",
    description: "Out of the Storm: an intimate program on sorrow and the quiet, resilient spaces we seek for healing after loss, moving across centuries of music from art song to contemporary work, including Mahler's Kindertotenlieder. 21+.",
    link: "https://dice.fm/partner/tickets/event/6936a7-out-of-the-storm-kin-by-chiko-2nd-apr-the-checkout-chicago-tickets",
    linkLabel: "Get tickets",
  },
];

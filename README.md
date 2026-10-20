# Suomisaundi System — Menu

An independent, capitalized subsystem repository for the Suomisaundi System.

- `index.html` boots `index.js`.
- `index.js` redirects to the central website after ten seconds.
- `system.js` exports an initial structured-record interface for future modules.

Central entry point: https://suomisaundi-system.github.io/

**Status:** foundational data contracts only. This is not a complete accounting, payments, ticketing, event management, or other production application.

## Hierarchical navigation
`menu.js` exports `createMenu(groups,{onSelect,collapsed})`. It renders accessible HTML disclosure groups with one-open-at-a-time behavior and callbacks supplied by the parent application. The central site maintains its own system registry and searchable inventory.

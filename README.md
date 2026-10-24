# SneakerDrop · Buggy external demo

A standalone fictional e-commerce checkout for testing VoiceTrace's external inspector. It is intentionally separate from the VoiceTrace app. Nothing is sold and no payments or addresses are transmitted.

Use **Start VoiceTrace capture**, or activate the bookmarklet from VoiceTrace, before triggering a bug. Enter an observation in the floating overlay and click **Review in VoiceTrace** to import context and generate a ticket.

Planted bugs: promo API failure simulation (explicitly labeled, no real promo API), a real caught TypeError and NaN total at quantity 2+, unreadable address contrast, and fixed-width mobile overflow. Console errors are emitted for all four so the existing external overlay captures them.

Static files in `dist/`. No dependencies or build required. `overlay.js` is generated from the existing VoiceTrace bookmarklet for the deployed VoiceTrace origin. The activation shortcut loads that exact overlay as an external script.

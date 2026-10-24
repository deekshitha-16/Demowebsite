# SneakerDrop · Buggy external demo

A standalone fictional e-commerce checkout for testing VoiceTrace's external inspector. It is intentionally separate from the VoiceTrace app. The visible page contains only storefront content, without QA instructions or diagnostic panels. Nothing is sold and no payments or addresses are transmitted.

Activate the bookmarklet from VoiceTrace before triggering a bug. Enter an observation in the floating overlay and click **Review in VoiceTrace** to import context and generate a ticket.

Planted bugs: promo API failure simulation (explicitly labeled, no real promo API), a real caught TypeError and NaN total at quantity 2+, unreadable address contrast, and fixed-width mobile overflow that activates at browser widths of 600px or less. Console errors are emitted for all four so the existing external overlay captures them.

Static files in `dist/`. No dependencies or build required. `overlay.js` is generated from the existing VoiceTrace bookmarklet for the deployed VoiceTrace origin. The standalone shop has no embedded capture panel; use the bookmarklet from the external inspector.

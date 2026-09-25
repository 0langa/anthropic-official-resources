# Pattern consistency audit

Every existing surface that already solves this, before you design a new one.

10 minDesignClaude Cowork

Try in CoworkCopy prompt

![](https://academy.claude.com/assets/v1/thumbnail.light-pa0satz7.png)![](https://academy.claude.com/assets/v1/thumbnail.dark-ewc5ye4g.png)

Film: the user asks Claude to find every surface already using a similar filtering pattern before designing a new one, checking a component inventory, library, code, and usage data, then recommending which to reuse. The user saves this as a repeatable skill.

Find existing patterns before you design

You are about to design something the product may already have.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%230ACF83'%20d='M8%2024a4%204%200%200%200%204-4v-4H8a4%204%200%200%200%200%208Z'/%3e%3cpath%20fill='%23A259FF'%20d='M4%2012a4%204%200%200%201%204-4h4v8H8a4%204%200%200%201-4-4Z'/%3e%3cpath%20fill='%23F24E1E'%20d='M4%204a4%204%200%200%201%204-4h4v8H8a4%204%200%200%201-4-4Z'/%3e%3cpath%20fill='%23FF7262'%20d='M12%200h4a4%204%200%200%201%200%208h-4V0Z'/%3e%3cpath%20fill='%231ABCFE'%20d='M20%2012a4%204%200%201%201-8%200%204%204%200%200%201%208%200Z'/%3e%3c/svg%3e)

Figma

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)

GitHub

Design-system / Audits / inline-filter

Inventory, ownership, screenshot, usage export

Folder

component-inventory.md

38 components

MD

search-results-current.png

The surface to design

PNG

Design

/design-critique

/design-handoff

/design-system

How can I help you today?

**/**design-handoff Before I propose an inline-filter pattern for search results, find every surface using something similar: chips, segmented controls, dropdown filters, faceted sidebars. For each, note which team owns it and how it performed. Tell me which to reuse and why.

Reading component-inventory.md0s

Read6 sources

Readcomponent-inventory.md, 38 components

Readsurface-ownership.csv, 22 surfaces

Openedsearch-results-current.png

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%230ACF83'%20d='M8%2024a4%204%200%200%200%204-4v-4H8a4%204%200%200%200%200%208Z'/%3e%3cpath%20fill='%23A259FF'%20d='M4%2012a4%204%200%200%201%204-4h4v8H8a4%204%200%200%201-4-4Z'/%3e%3cpath%20fill='%23F24E1E'%20d='M4%204a4%204%200%200%201%204-4h4v8H8a4%204%200%200%201-4-4Z'/%3e%3cpath%20fill='%23FF7262'%20d='M12%200h4a4%204%200%200%201%200%208h-4V0Z'/%3e%3cpath%20fill='%231ABCFE'%20d='M20%2012a4%204%200%201%201-8%200%204%204%200%200%201%208%200Z'/%3e%3c/svg%3e)Searchedfilter and facet components in the library

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)Searchedproduct code using those components

Readfilter-usage-90d.csv

Used 6 sources34s

I searched the library, the orchard/web code and 90 days of usage for your four variants and found five surfaces that already filter inline: four use library components, one is hand-built. Reuse FilterChip / Group from Saved items: the only multi-select of the five, in the library and the code, and second most used.

inline-filter-audit.md

Document

Download

**inline-filter-audit.md**MDSaved to Design-system / Audits

# Inline filter: what already exists

For Search results (owner Search & Nav; no filters today, search-results-current.png). Sources: component-inventory.md, Orchard / Product UI in Figma, orchard/web@main, filter-usage-90d.csv (1 Jun–29 Aug 2026). 28 Aug 2026.

## Side by side

Used = sessions on that surface where the control was touched, last 90 days.

<table class="sbs" style="font-size:13.5px"><thead><tr><th></th><th>Surface</th><th>Pattern and component</th><th>Owner</th><th>Library and code</th><th style="text-align:right">Used</th></tr></thead><tbody><tr class="rec"><td style="padding-left:0"><div style="width:150px;height:44px;overflow:hidden;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(20,20,19,.1);background:#fafafa;position:relative"><div style="position:absolute;left:6px;top:7px;transform:scale(.5);transform-origin:0 0;white-space:nowrap"><div segoe="" style="font-family:-apple-system,BlinkMacSystemFont," ui",system-ui,sans-serif;color:#1d1f24;display:flex;gap:8px;flex-wrap:wrap;align-items:center"=""><span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:500;background:#1d3b8f;color:#fff">In stock<b style="font-weight:400;opacity:.7">×</b></span><span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:500;background:#1d3b8f;color:#fff">Under £50<b style="font-weight:400;opacity:.7">×</b></span><span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:500;background:#1d3b8f;color:#fff">Supplier: 3<b style="font-weight:400;opacity:.7">×</b></span><span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:500;background:#fff;box-shadow:inset 0 0 0 1px #cfd3da;color:#1d1f24">Lead time</span><a style="font-size:13px;color:#1d3b8f;margin-left:4px">Clear all</a></div></div></div></td><td><b>Saved items</b></td><td>Chip row<small style="display:block;color:rgba(20,20,19,.6)"><code>FilterChip / Group</code></small></td><td>Personalisation</td><td>Figma v5.2<small style="display:block;color:rgba(20,20,19,.6)"><code>packages/ui/FilterChipGroup</code></small></td><td style="text-align:right;font-weight:500">31%</td></tr><tr class=""><td style="padding-left:0"><div style="width:150px;height:44px;overflow:hidden;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(20,20,19,.1);background:#fafafa;position:relative"><div style="position:absolute;left:6px;top:7px;transform:scale(.5);transform-origin:0 0;white-space:nowrap"><div segoe="" style="font-family:-apple-system,BlinkMacSystemFont," ui",system-ui,sans-serif;color:#1d1f24;width:220px"=""><div style="font-size:12px;font-weight:600;color:#5b616e;margin:0 0 6px">Category</div><div style="display:flex;align-items:center;gap:8px;font-size:13px;margin:0 0 6px"><i style="width:14px;height:14px;border-radius:3px;background:#1d3b8f;box-shadow:none;display:inline-block"></i>Fasteners<span style="margin-left:auto;color:#7a808c">1,204</span></div><div style="display:flex;align-items:center;gap:8px;font-size:13px;margin:0 0 6px"><i style="width:14px;height:14px;border-radius:3px;box-shadow:inset 0 0 0 1.5px #9aa1ad;display:inline-block"></i>Bearings<span style="margin-left:auto;color:#7a808c">612</span></div><div style="display:flex;align-items:center;gap:8px;font-size:13px;margin:0 0 6px"><i style="width:14px;height:14px;border-radius:3px;box-shadow:inset 0 0 0 1.5px #9aa1ad;display:inline-block"></i>Seals<span style="margin-left:auto;color:#7a808c">388</span></div><div style="font-size:12px;font-weight:600;color:#5b616e;margin:10px 0 6px">Lead time</div><div style="display:flex;align-items:center;gap:8px;font-size:13px;margin:0 0 6px"><i style="width:14px;height:14px;border-radius:3px;background:#1d3b8f;box-shadow:none;display:inline-block"></i>Under 3 days<span style="margin-left:auto;color:#7a808c">940</span></div><div style="display:flex;align-items:center;gap:8px;font-size:13px;margin:0 0 6px"><i style="width:14px;height:14px;border-radius:3px;box-shadow:inset 0 0 0 1.5px #9aa1ad;display:inline-block"></i>3–7 days<span style="margin-left:auto;color:#7a808c">701</span></div></div></div></div></td><td><b>Browse catalog</b></td><td>Facet sidebar<small style="display:block;color:rgba(20,20,19,.6)"><code>FacetPanel</code></small></td><td>Discovery</td><td>Figma v5.0<small style="display:block;color:rgba(20,20,19,.6)"><code>packages/ui/FacetPanel</code></small></td><td style="text-align:right;font-weight:500">44%</td></tr><tr class=""><td style="padding-left:0"><div style="width:150px;height:44px;overflow:hidden;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(20,20,19,.1);background:#fafafa;position:relative"><div style="position:absolute;left:6px;top:7px;transform:scale(.5);transform-origin:0 0;white-space:nowrap"><div segoe="" style="font-family:-apple-system,BlinkMacSystemFont," ui",system-ui,sans-serif;color:#1d1f24;display:inline-flex;background:#eef0f3;border-radius:8px;padding:3px"=""><span style="padding:6px 16px;font-size:13px;font-weight:500;border-radius:6px;color:#5b616e">All</span><span style="padding:6px 16px;font-size:13px;font-weight:500;border-radius:6px;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.12)">Open <b style="font-weight:500;color:#5b616e">218</b></span><span style="padding:6px 16px;font-size:13px;font-weight:500;border-radius:6px;color:#5b616e">Fulfilled</span><span style="padding:6px 16px;font-size:13px;font-weight:500;border-radius:6px;color:#5b616e">Canceled</span></div></div></div></td><td><b>Orders</b></td><td>Segmented control<small style="display:block;color:rgba(20,20,19,.6)"><code>SegmentedControl</code></small></td><td>Commerce</td><td>Figma v4.8<small style="display:block;color:rgba(20,20,19,.6)"><code>packages/ui/SegmentedControl</code></small></td><td style="text-align:right;font-weight:500">58%</td></tr><tr class=""><td style="padding-left:0"><div style="width:150px;height:44px;overflow:hidden;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(20,20,19,.1);background:#fafafa;position:relative"><div style="position:absolute;left:6px;top:7px;transform:scale(.5);transform-origin:0 0;white-space:nowrap"><div segoe="" style="font-family:-apple-system,BlinkMacSystemFont," ui",system-ui,sans-serif;color:#1d1f24;display:flex;gap:8px;align-items:center"=""><span style="display:inline-flex;align-items:center;gap:18px;height:32px;padding:0 10px 0 12px;border:1px solid #cfd3da;border-radius:4px;font-size:13px;background:#fff">Period: Q3<b style="font-size:9px;color:#5b616e">▼</b></span><span style="display:inline-flex;align-items:center;gap:18px;height:32px;padding:0 10px 0 12px;border:1px solid #cfd3da;border-radius:4px;font-size:13px;background:#fff">Region: All<b style="font-size:9px;color:#5b616e">▼</b></span><span style="display:inline-flex;align-items:center;gap:18px;height:32px;padding:0 10px 0 12px;border:1px solid #cfd3da;border-radius:4px;font-size:13px;background:#fff">Category<b style="font-size:9px;color:#5b616e">▼</b></span><span style="height:32px;padding:0 14px;border-radius:4px;background:#1d3b8f;color:#fff;font-size:13px;font-weight:500;display:inline-flex;align-items:center">Apply</span></div></div></div></td><td><b>Reports</b></td><td>Dropdown bar<small style="display:block;color:rgba(20,20,19,.6)"><code>DropdownFilterBar</code></small></td><td>Insights</td><td>Figma v4.1, deprecated<small style="display:block;color:rgba(20,20,19,.6)"><code>apps/reports/FilterBar</code></small></td><td style="text-align:right;font-weight:500">12%</td></tr><tr class=""><td style="padding-left:0"><div style="width:150px;height:44px;overflow:hidden;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(20,20,19,.1);background:#fafafa;position:relative"><div style="position:absolute;left:6px;top:7px;transform:scale(.5);transform-origin:0 0;white-space:nowrap"><div segoe="" style="font-family:-apple-system,BlinkMacSystemFont," ui",system-ui,sans-serif;color:#1d1f24;display:flex;gap:8px;flex-wrap:wrap;align-items:center"=""><span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:500;background:#3a6f5c;color:#fff">In stock<b style="font-weight:400;opacity:.7">×</b></span><span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:500;background:#3a6f5c;color:#fff">Approved<b style="font-weight:400;opacity:.7">×</b></span><span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:500;background:#3a6f5c;color:#fff">Region: UK<b style="font-weight:400;opacity:.7">×</b></span><span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:500;background:#fff;box-shadow:inset 0 0 0 1px #cfd3da;color:#1d1f24">Lead time</span><a style="font-size:13px;color:#3a6f5c;margin-left:4px">Clear all</a></div></div></div></td><td><b>Supplier directory</b></td><td>Chip row, hand-built<small style="display:block;color:rgba(20,20,19,.6)"><code>not in @orchard/ui</code></small></td><td>Partnerships</td><td>Not in library<small style="display:block;color:rgba(20,20,19,.6)"><code>apps/suppliers/chips.css</code></small></td><td style="text-align:right;font-weight:500">9%</td></tr></tbody></table>

## Recommendation

Reuse **`FilterChip / Group`** for search results. It is the only one of the five that is multi-select, which search facets need; it already ships in @orchard/ui v5.2 and in Figma with selected, count and clear states; and 31% of Saved-items sessions use it, second only to Orders’ segmented control, which switches a single status and is not a filter. Extend it with one thing: a “More filters” chip that opens `FacetPanel`’s facet list as a sheet past five facets. Talk to Personalisation (component owner) and Discovery (facet schema).

## If we reuse it, who else should move

Supplier directory’s hand-built chips and Reports’ deprecated `DropdownFilterBar` both move to `FilterChip / Group`: one inline-filter pattern on four surfaces, `FacetPanel` kept for Browse. Not a fit: `SegmentedControl`, single choice among statuses.

Every instance sits side by side with its owner, component and usage.

**inline-filter-audit.md**MDSaved to Design-system / Audits

# Inline filter: what already exists

For Search results (owner Search & Nav; no filters today, search-results-current.png). Sources: component-inventory.md, Orchard / Product UI in Figma, orchard/web@main, filter-usage-90d.csv (1 Jun–29 Aug 2026). 28 Aug 2026.

## Side by side

Used = sessions on that surface where the control was touched, last 90 days.

<table class="sbs" style="font-size:13.5px"><thead><tr><th></th><th>Surface</th><th>Pattern and component</th><th>Owner</th><th>Library and code</th><th style="text-align:right">Used</th></tr></thead><tbody><tr class="rec"><td style="padding-left:0"><div style="width:150px;height:44px;overflow:hidden;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(20,20,19,.1);background:#fafafa;position:relative"><div style="position:absolute;left:6px;top:7px;transform:scale(.5);transform-origin:0 0;white-space:nowrap"><div segoe="" style="font-family:-apple-system,BlinkMacSystemFont," ui",system-ui,sans-serif;color:#1d1f24;display:flex;gap:8px;flex-wrap:wrap;align-items:center"=""><span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:500;background:#1d3b8f;color:#fff">In stock<b style="font-weight:400;opacity:.7">×</b></span><span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:500;background:#1d3b8f;color:#fff">Under £50<b style="font-weight:400;opacity:.7">×</b></span><span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:500;background:#1d3b8f;color:#fff">Supplier: 3<b style="font-weight:400;opacity:.7">×</b></span><span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:500;background:#fff;box-shadow:inset 0 0 0 1px #cfd3da;color:#1d1f24">Lead time</span><a style="font-size:13px;color:#1d3b8f;margin-left:4px">Clear all</a></div></div></div></td><td><b>Saved items</b></td><td>Chip row<small style="display:block;color:rgba(20,20,19,.6)"><code>FilterChip / Group</code></small></td><td>Personalisation</td><td>Figma v5.2<small style="display:block;color:rgba(20,20,19,.6)"><code>packages/ui/FilterChipGroup</code></small></td><td style="text-align:right;font-weight:500">31%</td></tr><tr class=""><td style="padding-left:0"><div style="width:150px;height:44px;overflow:hidden;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(20,20,19,.1);background:#fafafa;position:relative"><div style="position:absolute;left:6px;top:7px;transform:scale(.5);transform-origin:0 0;white-space:nowrap"><div segoe="" style="font-family:-apple-system,BlinkMacSystemFont," ui",system-ui,sans-serif;color:#1d1f24;width:220px"=""><div style="font-size:12px;font-weight:600;color:#5b616e;margin:0 0 6px">Category</div><div style="display:flex;align-items:center;gap:8px;font-size:13px;margin:0 0 6px"><i style="width:14px;height:14px;border-radius:3px;background:#1d3b8f;box-shadow:none;display:inline-block"></i>Fasteners<span style="margin-left:auto;color:#7a808c">1,204</span></div><div style="display:flex;align-items:center;gap:8px;font-size:13px;margin:0 0 6px"><i style="width:14px;height:14px;border-radius:3px;box-shadow:inset 0 0 0 1.5px #9aa1ad;display:inline-block"></i>Bearings<span style="margin-left:auto;color:#7a808c">612</span></div><div style="display:flex;align-items:center;gap:8px;font-size:13px;margin:0 0 6px"><i style="width:14px;height:14px;border-radius:3px;box-shadow:inset 0 0 0 1.5px #9aa1ad;display:inline-block"></i>Seals<span style="margin-left:auto;color:#7a808c">388</span></div><div style="font-size:12px;font-weight:600;color:#5b616e;margin:10px 0 6px">Lead time</div><div style="display:flex;align-items:center;gap:8px;font-size:13px;margin:0 0 6px"><i style="width:14px;height:14px;border-radius:3px;background:#1d3b8f;box-shadow:none;display:inline-block"></i>Under 3 days<span style="margin-left:auto;color:#7a808c">940</span></div><div style="display:flex;align-items:center;gap:8px;font-size:13px;margin:0 0 6px"><i style="width:14px;height:14px;border-radius:3px;box-shadow:inset 0 0 0 1.5px #9aa1ad;display:inline-block"></i>3–7 days<span style="margin-left:auto;color:#7a808c">701</span></div></div></div></div></td><td><b>Browse catalog</b></td><td>Facet sidebar<small style="display:block;color:rgba(20,20,19,.6)"><code>FacetPanel</code></small></td><td>Discovery</td><td>Figma v5.0<small style="display:block;color:rgba(20,20,19,.6)"><code>packages/ui/FacetPanel</code></small></td><td style="text-align:right;font-weight:500">44%</td></tr><tr class=""><td style="padding-left:0"><div style="width:150px;height:44px;overflow:hidden;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(20,20,19,.1);background:#fafafa;position:relative"><div style="position:absolute;left:6px;top:7px;transform:scale(.5);transform-origin:0 0;white-space:nowrap"><div segoe="" style="font-family:-apple-system,BlinkMacSystemFont," ui",system-ui,sans-serif;color:#1d1f24;display:inline-flex;background:#eef0f3;border-radius:8px;padding:3px"=""><span style="padding:6px 16px;font-size:13px;font-weight:500;border-radius:6px;color:#5b616e">All</span><span style="padding:6px 16px;font-size:13px;font-weight:500;border-radius:6px;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.12)">Open <b style="font-weight:500;color:#5b616e">218</b></span><span style="padding:6px 16px;font-size:13px;font-weight:500;border-radius:6px;color:#5b616e">Fulfilled</span><span style="padding:6px 16px;font-size:13px;font-weight:500;border-radius:6px;color:#5b616e">Canceled</span></div></div></div></td><td><b>Orders</b></td><td>Segmented control<small style="display:block;color:rgba(20,20,19,.6)"><code>SegmentedControl</code></small></td><td>Commerce</td><td>Figma v4.8<small style="display:block;color:rgba(20,20,19,.6)"><code>packages/ui/SegmentedControl</code></small></td><td style="text-align:right;font-weight:500">58%</td></tr><tr class=""><td style="padding-left:0"><div style="width:150px;height:44px;overflow:hidden;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(20,20,19,.1);background:#fafafa;position:relative"><div style="position:absolute;left:6px;top:7px;transform:scale(.5);transform-origin:0 0;white-space:nowrap"><div segoe="" style="font-family:-apple-system,BlinkMacSystemFont," ui",system-ui,sans-serif;color:#1d1f24;display:flex;gap:8px;align-items:center"=""><span style="display:inline-flex;align-items:center;gap:18px;height:32px;padding:0 10px 0 12px;border:1px solid #cfd3da;border-radius:4px;font-size:13px;background:#fff">Period: Q3<b style="font-size:9px;color:#5b616e">▼</b></span><span style="display:inline-flex;align-items:center;gap:18px;height:32px;padding:0 10px 0 12px;border:1px solid #cfd3da;border-radius:4px;font-size:13px;background:#fff">Region: All<b style="font-size:9px;color:#5b616e">▼</b></span><span style="display:inline-flex;align-items:center;gap:18px;height:32px;padding:0 10px 0 12px;border:1px solid #cfd3da;border-radius:4px;font-size:13px;background:#fff">Category<b style="font-size:9px;color:#5b616e">▼</b></span><span style="height:32px;padding:0 14px;border-radius:4px;background:#1d3b8f;color:#fff;font-size:13px;font-weight:500;display:inline-flex;align-items:center">Apply</span></div></div></div></td><td><b>Reports</b></td><td>Dropdown bar<small style="display:block;color:rgba(20,20,19,.6)"><code>DropdownFilterBar</code></small></td><td>Insights</td><td>Figma v4.1, deprecated<small style="display:block;color:rgba(20,20,19,.6)"><code>apps/reports/FilterBar</code></small></td><td style="text-align:right;font-weight:500">12%</td></tr><tr class=""><td style="padding-left:0"><div style="width:150px;height:44px;overflow:hidden;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(20,20,19,.1);background:#fafafa;position:relative"><div style="position:absolute;left:6px;top:7px;transform:scale(.5);transform-origin:0 0;white-space:nowrap"><div segoe="" style="font-family:-apple-system,BlinkMacSystemFont," ui",system-ui,sans-serif;color:#1d1f24;display:flex;gap:8px;flex-wrap:wrap;align-items:center"=""><span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:500;background:#3a6f5c;color:#fff">In stock<b style="font-weight:400;opacity:.7">×</b></span><span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:500;background:#3a6f5c;color:#fff">Approved<b style="font-weight:400;opacity:.7">×</b></span><span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:500;background:#3a6f5c;color:#fff">Region: UK<b style="font-weight:400;opacity:.7">×</b></span><span style="display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 12px;border-radius:15px;font-size:13px;font-weight:500;background:#fff;box-shadow:inset 0 0 0 1px #cfd3da;color:#1d1f24">Lead time</span><a style="font-size:13px;color:#3a6f5c;margin-left:4px">Clear all</a></div></div></div></td><td><b>Supplier directory</b></td><td>Chip row, hand-built<small style="display:block;color:rgba(20,20,19,.6)"><code>not in @orchard/ui</code></small></td><td>Partnerships</td><td>Not in library<small style="display:block;color:rgba(20,20,19,.6)"><code>apps/suppliers/chips.css</code></small></td><td style="text-align:right;font-weight:500">9%</td></tr></tbody></table>

## Recommendation

Reuse **`FilterChip / Group`** for search results. It is the only one of the five that is multi-select, which search facets need; it already ships in @orchard/ui v5.2 and in Figma with selected, count and clear states; and 31% of Saved-items sessions use it, second only to Orders’ segmented control, which switches a single status and is not a filter. Extend it with one thing: a “More filters” chip that opens `FacetPanel`’s facet list as a sheet past five facets. Talk to Personalisation (component owner) and Discovery (facet schema).

## If we reuse it, who else should move

Supplier directory’s hand-built chips and Reports’ deprecated `DropdownFilterBar` both move to `FilterChip / Group`: one inline-filter pattern on four surfaces, `FacetPanel` kept for Browse. Not a fit: `SegmentedControl`, single choice among statuses.

Save this as a shared skill called pattern-audit: give it a pattern name and it writes the same side-by-side to Design-system / Audits.

**/pattern-audit**Give it a pattern name. Finds every existing instance in the library, the codebase and usage data, and writes the side-by-side with a reuse recommendation.

ReadsDesign-system folder![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%230ACF83'%20d='M8%2024a4%204%200%200%200%204-4v-4H8a4%204%200%200%200%200%208Z'/%3e%3cpath%20fill='%23A259FF'%20d='M4%2012a4%204%200%200%201%204-4h4v8H8a4%204%200%200%201-4-4Z'/%3e%3cpath%20fill='%23F24E1E'%20d='M4%204a4%204%200%200%201%204-4h4v8H8a4%204%200%200%201-4-4Z'/%3e%3cpath%20fill='%23FF7262'%20d='M12%200h4a4%204%200%200%201%200%208h-4V0Z'/%3e%3cpath%20fill='%231ABCFE'%20d='M20%2012a4%204%200%201%201-8%200%204%204%200%200%201%208%200Z'/%3e%3c/svg%3e)Figma![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)GitHub

Shared withEveryone in your organization can view

Claude Academy



0:03 / 0:541×

Illustration. Product screens are simplified.

Find existing patterns before you design

You are about to design something the product may already have.

Using the Design plugin’s handoff skill, name the pattern and ask for each owner and usage.

Claude checks your inventory first, then searches the library, the code and usage data.

Claude checks your inventory first, then searches the library, the code and usage data.

You get the audit and a recommendation, with what Claude found at the top.

Every instance sits side by side with its owner, component and usage.

Claude names one to reuse, and why the others do not fit.

Save it as a skill so any designer runs the same check by naming a pattern.

You design knowing what already exists and who owns it.

Before I propose an inline-filter pattern for search results, find every surface using something similar: chips, segmented controls, dropdown filters, faceted sidebars. For each, note which team owns it and how it performed. Tell me which to reuse and why.

I searched the library, the orchard/web code and 90 days of usage for your four variants and found five surfaces that already filter inline: four use library components, one is hand-built. Reuse FilterChip / Group from Saved items: the only multi-select of the five, in the library and the code, and second most used.

inline-filter-audit.md

Skill: /design-handoff (Design)

Connectors: Figma, GitHub

## Set up[](https://academy.claude.com/use-cases/pattern-consistency-audit)

### Try a plugin[](https://academy.claude.com/use-cases/pattern-consistency-audit)

The Design plugin ships with `/design-handoff` and other design-system skills as a starting point, already structured to inventory components and cross-reference where they live. If your admin manages plugins and it's not available yet, skip this; nothing below requires it.



DesignAccelerate design workflows — critique, design system management, UX writing, accessibility audits, research synthesis, and dev handoff. From exploration to pixel-perfect specs.

[Add](https://claude.ai/desktop/customize/plugins/new?marketplace=github.com%2Fanthropics%2Fknowledge-work-plugins&plugin=design)

`/design-handoff`Generate developer handoff specs from a design.

[Run](claude://cowork/new?q=%2Fdesign-handoff)

`/research-synthesis`Synthesize user research into themes, insights, and recommendations.

[Run](claude://cowork/new?q=%2Fresearch-synthesis)

Show all 7 skills

### Connect your tools[](https://academy.claude.com/use-cases/pattern-consistency-audit)

Claude Cowork is more powerful when it works directly with your systems. You control permissions and access. [Learn about tool access(opens in new tab)](https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access).

Navigate to **Customize → Connectors** in Cowork to set up.

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%230ACF83'%20d='M8%2024a4%204%200%200%200%204-4v-4H8a4%204%200%200%200%200%208Z'/%3e%3cpath%20fill='%23A259FF'%20d='M4%2012a4%204%200%200%201%204-4h4v8H8a4%204%200%200%201-4-4Z'/%3e%3cpath%20fill='%23F24E1E'%20d='M4%204a4%204%200%200%201%204-4h4v8H8a4%204%200%200%201-4-4Z'/%3e%3cpath%20fill='%23FF7262'%20d='M12%200h4a4%204%200%200%201%200%208h-4V0Z'/%3e%3cpath%20fill='%231ABCFE'%20d='M20%2012a4%204%200%201%201-8%200%204%204%200%200%201%208%200Z'/%3e%3c/svg%3e)

Figma

Search your component libraries and shipped files for every instance of the pattern.

[Connect](https://claude.ai/desktop/directory/figma)

![](data:image/svg+xml,%3csvg%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23181717'%20d='M12%20.3a12%2012%200%200%200-3.8%2023.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73%201.2.09%201.84%201.24%201.84%201.24%201.07%201.83%202.81%201.3%203.49%201%20.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93%200-1.31.47-2.38%201.24-3.22-.13-.3-.54-1.52.11-3.18%200%200%201.01-.32%203.3%201.23a11.5%2011.5%200%200%201%206%200c2.29-1.55%203.3-1.23%203.3-1.23.65%201.66.24%202.88.12%203.18.77.84%201.23%201.91%201.23%203.22%200%204.61-2.8%205.63-5.48%205.92.43.37.81%201.1.81%202.22v3.29c0%20.32.22.7.82.58A12%2012%200%200%200%2012%20.3'/%3e%3c/svg%3e)

GitHub

Find where the pattern is implemented in the product and who owns that surface.

[Connect](https://claude.ai/desktop/directory/github)



AmplitudeOptional

Pull engagement and conversion for each surface so the recommendation is grounded in data.

[Connect](https://claude.ai/desktop/directory/amplitude)

Browse all connectors[Open in Cowork](https://claude.ai/desktop/customize/connectors)



**Want to try this task before setting anything up?** Add your files to a working folder, point Cowork at the folder, and start with the prompt.

### Set your working folder[](https://academy.claude.com/use-cases/pattern-consistency-audit)

Drag the files you'll use (a Figma export of the design system, screenshots of the surfaces you already know about, the product sitemap) into one folder and point Cowork at it. Cowork reads from it and writes the audit back to it. [Create a Cowork project(opens in new tab)](https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork) from your design-system folder so the component inventory and ownership map stay attached for every audit.

Design-system / Audits / inline-filter

component-inventory.mdMar 18, 202642 KB

search-results-current.pngApr 26, 2026410 KB

surface-ownership.csvFeb 9, 20268 KB

In Cowork’s chat bar:Design-system / Audits / inline-filter

## The prompt[](https://academy.claude.com/use-cases/pattern-consistency-audit)

### Copy this into Claude Cowork[](https://academy.claude.com/use-cases/pattern-consistency-audit)

Before I propose a new inline-filter pattern for the search results page, find every surface in our product using something similar (chips, segmented controls, dropdown filters, faceted sidebars). For each, show a screenshot or Figma link, note which team owns it and how it performed (engagement or conversion if we have it). Tell me which pattern to reuse and why.



Design-system / Audits / inline-filterOpen in Cowork

### Why this works[](https://academy.claude.com/use-cases/pattern-consistency-audit)

Prompt

**Name the variants to search for.** Chips, segmented controls, dropdowns, facets are how the same intent shows up under different names; naming them widens the search.

Prompt

**Ask for the owner.** You'll need to talk to that team either way; the audit doubles as your stakeholder list.

Prompt

**Back the recommendation with data.** "How that surface performed" turns the recommendation from taste into evidence for the design crit.

Source

**Put your reference list in the folder.** Cowork starts from your component list, then checks the live product for what's drifted.

### Get a better draft[](https://academy.claude.com/use-cases/pattern-consistency-audit)

Practice

**Ask for the consolidation plan.** Add "if I should reuse one, list which other surfaces should migrate to it too" and the audit becomes a design-system roadmap item.

Practice

**Add a screenshot of the destination.** Drop a screenshot of where the pattern is going and Cowork weighs fit, not just precedent.

## Make Cowork work for you[](https://academy.claude.com/use-cases/pattern-consistency-audit)

A plugin skill is a starting point — customize it with your own practices and expertise. A few minutes of conversation and it runs with your standards from then on.

Make what we've done in this task so far into a skill, or edit the /design-handoff skill with my feedback.



Design-system / AuditsOpen in Cowork



**Tip:** tell Claude to edit the skill for you.

## Make it repeatable[](https://academy.claude.com/use-cases/pattern-consistency-audit)

### Make it the default first step[](https://academy.claude.com/use-cases/pattern-consistency-audit)

This audit should run before any new pattern enters review. Save it as a skill the whole design org can call with one line, swapping the pattern name each time, so "did we check what already exists" stops being a crit-week surprise.

Save this as /pattern-audit. It should take a pattern name, search Figma, the codebase, and Amplitude for existing instances, and write the side-by-side with a reuse recommendation to Design-system/Audits/<pattern>.md.



Design-system / AuditsOpen in Cowork

## Share with your teammates[](https://academy.claude.com/use-cases/pattern-consistency-audit)

Your customized `/pattern-audit` now carries your component inventory, your ownership map, and your performance lookups. Share it so every designer runs the same check before crit, and the design system stops growing five ways to do one thing.



Share the skill

In Cowork, open **Skills** → `/pattern-audit` → **Share** and pick your teammates (or your whole workspace, if your admin allows). They get the skill with your instructions baked in, they don't repeat Steps 1-3.

## What changes for design crit[](https://academy.claude.com/use-cases/pattern-consistency-audit)

You have every existing instance of the pattern inventoried with its owner and performance data, plus a recommendation on which to reuse. The decision is backed by evidence rather than preference.

You did this for one filter pattern. The same approach covers navigation, empty states, and form patterns — each one becomes a skill your team runs before proposing something new.

### Finish it where the file lives

[![](https://academy.claude.com/surfaces/design-icon.svg)

Claude Design

Mock the reuse option directly in your design file

Open](https://claude.ai/design)

[Next: Heuristic audit a flow](https://academy.claude.com/use-cases/design-heuristic-audit)

Was this helpful?

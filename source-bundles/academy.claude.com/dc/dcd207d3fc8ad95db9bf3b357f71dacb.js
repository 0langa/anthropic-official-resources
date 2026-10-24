import{Nm as e}from"../../../../content-de-meta-hica81ue.js";import{t}from"../../../../AppWindow-lhkzw0vv.js";import{o as n}from"../../../../ResourceWidget-hoexlr8x.js";import{r,u as i}from"../../../../WidgetCopy-bc9oepjc.js";import{i as a,n as o,r as s}from"../../../../ArtifactsTutorialKit-wanh8o4e.js";import{a as c,c as l,d as u,l as d,n as f,s as p}from"../../../../_window-mjlpdoxi.js";var m=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>This week</title>
    <style>
      :root {
        --wall: #f7f3ec; /* warm canvas */
        --card: #ffffff;
        --line: #f3eee5;
        --ink: #23262d;
        --ink-2: #555b66;
        --ink-3: #858b95;
        --blue: #3d6fe0; /* the one accent */
        --slip: #b5562f; /* status only: overdue and open */
        --slip-wash: #fcece3;
        --font:
          "Avenir Next", Avenir, Montserrat, Corbel, "Segoe UI", system-ui,
          -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif;
      }
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      html,
      body {
        height: 100%;
      }
      body {
        background: var(--wall);
        color: var(--ink);
        font: 400 15px/1.4 var(--font);
        -webkit-font-smoothing: antialiased;
        overflow-y: auto;
      }
      button,
      input {
        font: inherit;
        color: inherit;
      }
      .tn {
        font-variant-numeric: tabular-nums;
      }

      .app {
        max-width: 860px;
        margin: 0 auto;
        padding: 18px 16px 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        min-height: 100%;
      }

      /* header */
      .top {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 20px;
        padding: 0 4px;
      }
      h1 {
        font-size: 23px;
        line-height: 30px;
        font-weight: 700;
        letter-spacing: -0.02em;
      }
      .sub {
        margin-top: 4px;
        font-size: 15px;
        color: var(--ink-2);
      }
      .sub i {
        font-style: normal;
        color: var(--ink-3);
        margin: 0 6px;
      }
      .prog {
        min-width: 170px;
        text-align: right;
      }
      .prog .n {
        font-size: 15px;
        font-weight: 500;
        color: var(--ink-2);
      }
      .prog .n b {
        color: var(--ink);
        font-weight: 700;
      }
      .bar {
        margin-top: 8px;
        height: 8px;
        border-radius: 4px;
        background: #e7e0d3;
        overflow: hidden;
      }
      .bar i {
        display: block;
        height: 100%;
        width: 0;
        border-radius: 4px;
        background: var(--blue);
        transition: width 0.5s cubic-bezier(0.3, 0.7, 0.2, 1);
      }

      /* the list card */
      .card {
        background: var(--card);
        border-radius: 16px;
        box-shadow:
          0 1px 0 rgba(60, 45, 20, 0.04),
          0 18px 36px -28px rgba(60, 45, 20, 0.35),
          0 0 0 1px rgba(60, 45, 20, 0.06);
      }
      .list {
        padding: 6px 0;
      }
      .day {
        display: grid;
        grid-template-columns: 74px minmax(0, 1fr);
        border-top: 1px solid var(--line);
      }
      .day:first-child {
        border-top: 0;
      }
      .dl {
        padding: 15px 0 0 22px;
        font-size: 14px;
        font-weight: 600;
        color: var(--ink-3);
        letter-spacing: 0.01em;
      }
      .day.today .dl {
        color: var(--blue);
      }
      .day.today .dl::after {
        content: "today";
        display: block;
        font-weight: 500;
        font-size: 14px;
        color: var(--blue);
        opacity: 0.75;
        margin-top: 1px;
      }
      .rows {
        min-width: 0;
      }

      .row {
        display: grid;
        grid-template-columns: 24px minmax(0, 1fr) auto;
        align-items: center;
        gap: 14px;
        padding: 10px 22px 10px 0;
        border-top: 1px solid var(--line);
        transition: opacity 0.35s ease;
      }
      .row:first-child {
        border-top: 0;
      }
      .row .t {
        font-size: 15.5px;
        line-height: 21px;
        color: var(--ink);
        min-width: 0;
        overflow-wrap: anywhere;
        transition: color 0.3s ease;
      }
      .row .t span {
        background: linear-gradient(currentColor, currentColor) 0 55%/0 1.5px
          no-repeat;
        transition: background-size 0.35s ease;
        padding-bottom: 1px;
      }
      .tag {
        display: inline-block;
        font-style: normal;
        margin-left: 8px;
        padding: 1px 9px 2px;
        border-radius: 999px;
        background: var(--slip-wash);
        color: var(--slip);
        font-size: 14px;
        line-height: 19px;
        font-weight: 500;
        vertical-align: 1px;
      }
      /* an owner: one initial on their color */
      .av {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        font-size: 14px;
        font-weight: 600;
        color: #fff;
      }

      /* checkbox */
      .cb {
        appearance: none;
        -webkit-appearance: none;
        width: 24px;
        height: 24px;
        border-radius: 8px;
        border: 1.5px solid #cfc7b8;
        background: #fff;
        cursor: pointer;
        display: grid;
        place-items: center;
        transition:
          background 0.2s ease,
          border-color 0.2s ease,
          transform 0.15s ease;
      }
      .cb:hover {
        border-color: var(--blue);
      }
      .cb:active {
        transform: scale(0.92);
      }
      .cb svg {
        opacity: 0;
        transform: scale(0.6);
        transition:
          opacity 0.2s ease,
          transform 0.25s cubic-bezier(0.3, 1.6, 0.5, 1);
      }
      .cb[aria-checked="true"] {
        background: var(--blue);
        border-color: var(--blue);
      }
      .cb[aria-checked="true"] svg {
        opacity: 1;
        transform: scale(1);
      }
      .cb:focus-visible,
      .add input:focus-visible,
      .fold:focus-visible {
        outline: 2px solid var(--blue);
        outline-offset: 2px;
      }

      /* checked look: light strike, softer ink */
      .row.done .t {
        color: var(--ink-3);
      }
      .row.done .t span {
        background-size: 100% 1.5px;
      }
      .row.done .av {
        opacity: 0.7;
      }
      .row.leaving {
        opacity: 0;
      }

      /* add a priority */
      .add {
        display: grid;
        grid-template-columns: 74px 24px minmax(0, 1fr) auto;
        align-items: center;
        gap: 14px;
        padding: 12px 22px 14px 0;
        border-top: 1px solid var(--line);
      }
      .add .plus {
        grid-column: 2;
        width: 24px;
        height: 24px;
        border-radius: 8px;
        border: 1.5px dashed #cfc7b8;
        display: grid;
        place-items: center;
        color: var(--ink-3);
      }
      .add input {
        border: 0;
        background: transparent;
        outline: none;
        font-size: 15.5px;
        line-height: 21px;
        padding: 2px 0;
        min-width: 0;
        width: 100%;
      }
      .add input::placeholder {
        color: var(--ink-3);
      }
      .add .hint {
        font-size: 14px;
        color: var(--ink-3);
        white-space: nowrap;
        opacity: 0;
        transition: opacity 0.2s ease;
      }
      .add:focus-within .hint {
        opacity: 1;
      }

      /* done fold */
      .fold {
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        padding: 14px 22px;
        background: transparent;
        border: 0;
        text-align: left;
        cursor: pointer;
        font-size: 15px;
        font-weight: 600;
        color: var(--ink-2);
        border-radius: 16px;
      }
      .fold .chev {
        transition: transform 0.25s ease;
        color: var(--ink-3);
      }
      .fold[aria-expanded="true"] .chev {
        transform: rotate(90deg);
      }
      .fold .c {
        font-weight: 500;
        color: var(--ink-3);
      }
      .donelist {
        display: none;
        padding: 0 0 6px;
        border-top: 1px solid var(--line);
      }
      .donelist.open {
        display: block;
      }
      .donelist .row {
        grid-template-columns: 24px minmax(0, 1fr) auto auto;
        padding-left: 22px;
      }
      .donelist .due {
        font-size: 14px;
        color: var(--ink-3);
        min-width: 30px;
        text-align: right;
      }
      .empty {
        padding: 14px 22px;
        font-size: 14px;
        color: var(--ink-3);
      }

      @media (max-width: 600px) {
        .day {
          grid-template-columns: 58px minmax(0, 1fr);
        }
        .add {
          grid-template-columns: 58px 24px minmax(0, 1fr) auto;
        }
        .dl {
          padding-left: 16px;
        }
      }
      /* no room for the hint beside the field */
      @media (max-width: 440px) {
        .add .hint {
          display: none;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
          transition: none !important;
        }
      }
      /* while the page measures itself, nothing stretches to the frame */
      html.measuring,
      html.measuring body,
      html.measuring .app {
        height: auto !important;
        min-height: 0 !important;
      }
    </style>
  </head>
  <body>
    <div class="app">
      <header class="top">
        <div>
          <h1>This week</h1>
          <div class="sub">Ops<i>·</i>week of Sep 28</div>
        </div>
        <div class="prog">
          <div class="n tn">
            <b id="nDone">3</b> of <span id="nAll">9</span> done
          </div>
          <div class="bar" aria-hidden="true"><i id="barFill"></i></div>
        </div>
      </header>

      <section class="card">
        <div class="list" id="list"></div>
        <label class="add" for="newTitle">
          <span class="plus" aria-hidden="true"
            ><svg width="12" height="12" viewBox="0 0 12 12">
              <path
                d="M6 1.5v9M1.5 6h9"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
              /></svg
          ></span>
          <input
            id="newTitle"
            type="text"
            placeholder="Add a priority"
            autocomplete="off"
            maxlength="90"
            aria-label="Add a priority, press Enter to add it"
          />
          <span class="hint">Enter to add · due Fri</span>
        </label>
      </section>

      <section class="card">
        <button
          class="fold"
          id="fold"
          type="button"
          aria-expanded="false"
          aria-controls="doneList"
        >
          <svg
            class="chev"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            aria-hidden="true"
          >
            <path
              d="M5 3l4 4-4 4"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Done <span class="c tn" id="foldCount">3</span>
        </button>
        <div class="donelist" id="doneList"></div>
      </section>
    </div>

    <script>
      /* The tracker: check a priority off, add one, open Done. Nothing is saved; a reload starts the week over. */
      (function () {
        "use strict";

        var DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
        var TODAY = 2; /* Wednesday */
        var LAST_DAY = DAYS.length - 1;

        /* the team: one initial and a color each */
        var PEOPLE = {
          R: "#6f9a78",
          I: "#c98a55",
          C: "#8b7fc7",
          T: "#4f8fb8",
          M: "#cf6f7c",
        };
        var YOU = "M"; /* owns whatever the reader adds */

        /* sorted by deadline */
        var items = [
          {
            t: "Confirm the Q4 on-call schedule with the night shift",
            who: "R",
            due: 0,
            done: true,
          },
          {
            t: "Send September vendor invoices to finance",
            who: "I",
            due: 0,
            done: false,
          },
          {
            t: "Get the Dock 2 label printer replaced",
            who: "T",
            due: 1,
            done: true,
          },
          {
            t: "Sign the courier contract renewal",
            who: "M",
            due: 1,
            done: false,
          },
          {
            t: "Post notes from the warehouse safety walk",
            who: "C",
            due: 2,
            done: true,
          },
          {
            t: "Reorder packing tape and thermal labels",
            who: "R",
            due: 2,
            done: false,
          },
          {
            t: "Train the two new hires on the returns desk",
            who: "I",
            due: 3,
            done: false,
          },
          {
            t: "Draft the October shift schedule",
            who: "C",
            due: 3,
            done: false,
          },
          { t: "Close out the Q3 incident log", who: "T", due: 4, done: false },
        ];
        var foldOpen = false;

        var $ = function (id) {
          return document.getElementById(id);
        };
        var listEl = $("list"),
          doneEl = $("doneList"),
          foldBtn = $("fold"),
          input = $("newTitle");

        function el(tag, cls, text) {
          var e = document.createElement(tag);
          if (cls) e.className = cls;
          if (text != null) e.textContent = text;
          return e;
        }

        function tick() {
          var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          s.setAttribute("width", "14");
          s.setAttribute("height", "14");
          s.setAttribute("viewBox", "0 0 16 16");
          s.setAttribute("aria-hidden", "true");
          var p = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path",
          );
          p.setAttribute("d", "M3 8.5l3.2 3L13 4.5");
          p.setAttribute("fill", "none");
          p.setAttribute("stroke", "#fff");
          p.setAttribute("stroke-width", "2.4");
          p.setAttribute("stroke-linecap", "round");
          p.setAttribute("stroke-linejoin", "round");
          s.appendChild(p);
          return s;
        }

        function overdueTag() {
          return el("em", "tag", "overdue");
        }

        function rowFor(it, inDone) {
          var row = el("div", "row" + (it.done ? " done" : ""));

          var cb = el("button", "cb");
          cb.type = "button";
          cb.setAttribute("role", "checkbox");
          cb.setAttribute("aria-checked", it.done ? "true" : "false");
          cb.setAttribute(
            "aria-label",
            (it.done ? "Mark not done: " : "Mark done: ") + it.t,
          );
          cb.appendChild(tick());
          cb.addEventListener("click", function () {
            toggle(it, row, cb, inDone);
          });

          var t = el("div", "t");
          t.appendChild(el("span", "", it.t));
          if (!it.done && it.due < TODAY) t.appendChild(overdueTag());

          var av = el("span", "av", it.who);
          av.style.background = PEOPLE[it.who];
          av.setAttribute("aria-hidden", "true");

          row.appendChild(cb);
          row.appendChild(t);
          row.appendChild(av);
          if (inDone) row.appendChild(el("span", "due", DAYS[it.due]));
          return row;
        }

        function render() {
          /* open items, grouped by due day */
          listEl.textContent = "";
          DAYS.forEach(function (d, di) {
            var open = items.filter(function (it) {
              return !it.done && it.due === di;
            });
            if (!open.length) return;
            var day = el("section", "day" + (di === TODAY ? " today" : ""));
            day.appendChild(el("div", "dl", d));
            var rows = el("div", "rows");
            open.forEach(function (it) {
              rows.appendChild(rowFor(it, false));
            });
            day.appendChild(rows);
            listEl.appendChild(day);
          });
          if (!listEl.children.length)
            listEl.appendChild(el("div", "empty", "Nothing open. Nice week."));

          /* done fold */
          var done = items.filter(function (it) {
            return it.done;
          });
          doneEl.textContent = "";
          done.forEach(function (it) {
            doneEl.appendChild(rowFor(it, true));
          });
          if (!done.length)
            doneEl.appendChild(el("div", "empty", "Nothing checked off yet."));

          count();
        }

        function count() {
          var done = items.filter(function (it) {
            return it.done;
          }).length;
          $("nDone").textContent = done;
          $("nAll").textContent = items.length;
          $("foldCount").textContent = done;
          $("barFill").style.width =
            Math.round((done / items.length) * 100) + "%";
        }

        /* check: strike in place, update the count, then move the row to the other list */
        function toggle(it, row, cb, inDone) {
          it.done = !it.done;
          row.classList.toggle("done", it.done);
          cb.setAttribute("aria-checked", it.done ? "true" : "false");
          var tag = row.querySelector(".tag");
          if (it.done && tag) tag.remove();
          if (!it.done && !tag && it.due < TODAY)
            row.querySelector(".t").appendChild(overdueTag());
          count();
          clearTimeout(row._fade);
          clearTimeout(row._move);
          row.classList.remove("leaving");
          if (it.done === inDone)
            return; /* clicked back before it moved: stays put */
          row._fade = setTimeout(function () {
            row.classList.add("leaving");
          }, 380);
          row._move = setTimeout(render, 700);
        }

        foldBtn.addEventListener("click", function () {
          foldOpen = !foldOpen;
          doneEl.classList.toggle("open", foldOpen);
          foldBtn.setAttribute("aria-expanded", foldOpen ? "true" : "false");
        });

        input.addEventListener("keydown", function (e) {
          if (e.key !== "Enter") return;
          var title = input.value.replace(/\\s+/g, " ").trim();
          if (!title) return;
          items.push({ t: title, who: YOU, due: LAST_DAY, done: false });
          input.value = "";
          render();
        });

        render();
      })();

      /* Tell the host how tall the page wants to be (its content, not the frame it is stretched to), on load and whenever that changes. */
      (function () {
        "use strict";
        if (window.parent === window) return;
        var root = document.documentElement,
          app = document.querySelector(".app");
        var last = 0,
          raf = 0;
        function measure() {
          raf = 0;
          root.classList.add("measuring");
          var h = Math.ceil(app.getBoundingClientRect().height);
          root.classList.remove("measuring");
          if (h && Math.abs(h - last) > 1) {
            last = h;
            window.parent.postMessage({ artifactHeight: h }, "*");
          }
        }
        function ask() {
          if (!raf) raf = requestAnimationFrame(measure);
        }
        new ResizeObserver(ask).observe(app);
        new MutationObserver(ask).observe(document.body, {
          childList: true,
          subtree: true,
          characterData: true,
          attributes: true,
          attributeFilter: ["class", "style"],
        });
        window.addEventListener("load", ask);
        document.fonts.ready.then(ask);
        ask();
      })();
    <\/script>
  </body>
</html>
`,h=e(),g=[{who:"user",key:"week.t1",step:1,file:!0},{who:"claude",key:"week.t2",step:2},{who:"user",key:"week.t3",step:3},{who:"claude",key:"week.t4",card:!0}],_=`
  ${u}
  ${c}

  /* ---------- around the window ---------- */
  .la-title { margin: 0 2px 10px; font-size: 15px; line-height: 22px; font-weight: 600; color: var(--saa-ink); }
  .la-take { margin: 10px 2px 0; font-size: 14px; line-height: 20px; color: var(--saa-ink-2); max-width: 68ch; }

  /* ---------- Claude's window ---------- */
  .la-win { background: var(--la-win); color: var(--la-ink); display: grid; grid-template-columns: minmax(0, 1fr); }

  .la-user { display: flex; justify-content: flex-end; }

  /* the opening message on its own, which stands in for the conversation where there is no room for it */
  .la-lead { padding: 12px 12px 0; }

  /* the conversation, set small enough that all of it shows beside the pane in the article column. It takes the pane's height, and keeps a margin at the left for the step numbers */
  .la-chat { position: relative; min-width: 0; min-height: 0; }
  .la-scroll { position: absolute; inset: 0; overflow: auto; scrollbar-width: thin; padding: 14px 12px 10px 38px; display: flex; flex-direction: column; gap: 12px; }
  .la-turn { position: relative; }
  .la-num { position: absolute; left: -28px; top: 1px; width: 20px; height: 20px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-family: var(--saa-sans); font-size: 11px; line-height: 1; font-weight: 600;
    font-variant-numeric: tabular-nums; color: var(--saa-ink-2); box-shadow: inset 0 0 0 1px var(--saa-hair-strong); background: var(--la-win); }
  .la-chat .cw-msg { max-width: 100%; }
  .la-chat .cw-bubble { padding: 8px 12px 9px; font-size: 13.5px; line-height: 19px; }
  .la-claude { padding-right: 4px; font-family: var(--saa-serif); font-size: 14.5px; line-height: 22px; color: var(--la-ink); }
  .la-claude p { margin: 0; }

  /* the artifact's card in the reply, tinted because the artifact is open: the neutral gray sheet of a custom artifact, its name, its kind and who can open it */
  .la-card { position: relative; height: 56px; margin: 10px 0 0; border-radius: 10px; overflow: hidden; font-family: var(--saa-sans); background: var(--la-card);
    box-shadow: inset 0 0 0 0.5px var(--la-hair-20), 0 1px 2px rgba(0, 0, 0, 0.05); display: flex; align-items: center; }
  .la-sheet { position: absolute; left: 12px; top: 12px; width: 40px; height: 56px; border-radius: 6px; background: var(--la-sheet);
    box-shadow: inset 0 0 0 0.5px var(--la-sheet-ring), inset 0 1px 0 var(--la-sheet-hi), 0 4px 8px rgba(11, 11, 11, 0.08), 0 12px 28px -2px rgba(11, 11, 11, 0.08);
    display: flex; justify-content: center; padding-top: 11px; color: var(--la-sheet-ink); }
  .la-card-text { margin: 0 10px 0 64px; min-width: 0; flex: 1; display: grid; }
  .la-card-title { font-size: 13.5px; line-height: 18px; font-weight: 500; color: var(--la-ink); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .la-card-meta { font-size: 12px; line-height: 16px; color: var(--la-ink-5); display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; }

  ${d}
  ${l}

  /* ---------- stacked (a side pane, phones): the opening message, then the pane ---------- */
  @container saa (width < 640px) {
    .la-title { margin-bottom: 6px; font-size: 13px; line-height: 18px; font-weight: 400; color: var(--saa-ink-3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .la-chat { display: none; }
  }
  /* ---------- side by side from 640 px: the conversation beside the pane, as in Claude ---------- */
  @container saa (width >= 640px) {
    .la-win { grid-template-columns: clamp(252px, 36%, 380px) minmax(0, 1fr); }
    .la-lead { display: none; }
  }
`;function v(){let e=i(),c=n(),l=e("week.pane"),u=t=>(0,h.jsx)(f,{files:t.file?[{name:e(`${t.key}.file`),tag:e(`${t.key}.fileTag`)}]:[],attachedLabel:e("ui.attached"),children:e.rich(t.key,{},()=>r)});return(0,h.jsxs)(o,{css:_,label:e("week.aria"),children:[(0,h.jsx)("p",{className:"la-title",children:e("week.title")}),(0,h.jsx)(t,{children:(0,h.jsxs)("div",{className:"la-win",children:[(0,h.jsxs)("div",{className:"la-lead la-user",children:[(0,h.jsxs)("span",{className:"cw-sr",children:[e("ui.user"),": "]}),u(g[0])]}),(0,h.jsx)("section",{className:"la-chat","aria-label":e("chat.label"),children:(0,h.jsx)("div",{className:"la-scroll",children:g.map(t=>(0,h.jsxs)("div",{className:s("la-turn",t.who==="user"?"la-user":"la-claude"),children:[t.step!==void 0&&(0,h.jsxs)("span",{className:"la-num",children:[(0,h.jsxs)("span",{className:"cw-sr",children:[e("ui.step")," "]}),t.step]}),(0,h.jsxs)("span",{className:"cw-sr",children:[t.who==="user"?e("ui.user"):e("ui.claude"),":"," "]}),t.who==="user"?u(t):(0,h.jsx)("p",{children:e(t.key)}),t.card&&(0,h.jsxs)("div",{className:"la-card",children:[(0,h.jsx)("span",{className:"la-sheet","aria-hidden":"true",children:(0,h.jsx)(a,{name:"Artifacts",size:20})}),(0,h.jsxs)("span",{className:"la-card-text",children:[(0,h.jsx)("span",{className:"la-card-title",children:l}),(0,h.jsxs)("span",{className:"la-card-meta",children:[e("card.kind")," · ",(0,h.jsx)(a,{name:"Lock",size:12}),e("card.onlyYou")]})]})]})]},t.key))})}),(0,h.jsx)(p,{html:m,name:l,frameTitle:e("week.frame"),label:e("pane.label"),shareLabel:e("ui.share"),loadingLabel:e("ui.loading"),onLoad:c})]})}),(0,h.jsx)("p",{className:"la-take",children:e("week.takeaway")})]})}export{v as default};
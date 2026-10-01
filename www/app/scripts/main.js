(() => {
  const $ = (sel) => document.querySelector(sel);
  const grid = $("#grid");
  const dialog = $("#orderDialog");
  const state = { cat: "all", query: "" };

  const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function renderTabs() {
    $("#tabs").innerHTML = CATEGORIES.map((c) =>
      `<button class="tab" type="button" role="tab" data-cat="${c.id}" aria-selected="${c.id === state.cat}">${esc(c.label)}</button>`
    ).join("");
  }

  function renderProducts() {
    const q = state.query.trim().toLowerCase();
    const list = PRODUCTS.filter((p) =>
      (state.cat === "all" || p.cat === state.cat) && (!q || p.name.toLowerCase().includes(q))
    );

    if (!list.length) {
      grid.innerHTML = '<p class="empty">Produk tidak ditemukan. Coba kata kunci lain.</p>';
      return;
    }

    grid.innerHTML = list.map((p) => `
      <article class="card">
        <h3>${esc(p.name)}</h3>
        ${p.note ? `<p class="note">${esc(p.note)}</p>` : ""}
        ${p.groups.map(([title, items], g) => `
          <div class="group">
            <h4>${esc(title)}</h4>
            ${items.map(([label, price], i) => `
              <button class="row" type="button" data-p="${p.id}" data-g="${g}" data-i="${i}">
                <span>${esc(label)}</span><b>${rupiah(price)}</b>
              </button>`).join("")}
          </div>`).join("")}
      </article>`).join("");
  }

  function openDialog(selection) {
    const summary = $("#summary");
    let message = "Halo Admin Soya App, saya ingin order.\n\nMohon informasi paket yang tersedia.";

    if (selection) {
      const { product, group, label, price } = selection;
      summary.innerHTML = `<strong>${esc(product.name)}</strong>${esc(group)} &middot; ${esc(label)}<br><b>${rupiah(price)}</b>`;
      message = `Halo Admin Soya App, saya ingin order:\n\nProduk: ${product.name}\nPaket: ${group} - ${label}\nHarga: ${rupiah(price)}\n\nMohon informasi selanjutnya.`;
    } else {
      summary.innerHTML = "<strong>Tanya admin</strong>Pilih admin untuk konsultasi paket.";
    }

    $("#admins").innerHTML = ADMINS.map((a, i) =>
      `<a class="btn ${i ? "btn-ghost" : "btn-primary"}" target="_blank" rel="noopener" href="https://wa.me/${a.phone}?text=${encodeURIComponent(message)}">Chat ${esc(a.name)} (${esc(a.label)})</a>`
    ).join("");

    dialog.showModal();
  }

  grid.addEventListener("click", (e) => {
    const row = e.target.closest(".row");
    if (!row) return;
    const product = PRODUCTS.find((p) => p.id === row.dataset.p);
    const [group, items] = product.groups[row.dataset.g];
    const [label, price] = items[row.dataset.i];
    openDialog({ product, group, label, price });
  });

  $("#tabs").addEventListener("click", (e) => {
    const tab = e.target.closest(".tab");
    if (!tab) return;
    state.cat = tab.dataset.cat;
    renderTabs();
    renderProducts();
  });

  $("#search").addEventListener("input", (e) => {
    state.query = e.target.value;
    renderProducts();
  });

  document.querySelectorAll("[data-open-admin]").forEach((btn) => btn.addEventListener("click", () => openDialog(null)));
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog || e.target.closest("[data-close]")) dialog.close();
  });
  dialog.addEventListener("click", (e) => { if (e.target.closest("#admins a")) dialog.close(); });

  renderTabs();
  renderProducts();
})();

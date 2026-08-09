// Tab / thumbnail / triplet detail logic for the Dataset Viewer section.
// Depends on globals defined in dataset.js: DATASETS, DATASET_ORDER, DATASET_LABELS, PLACEHOLDER_SRC.

(function () {
  function fallbackToPlaceholder(imgEl) {
    imgEl.addEventListener('error', function () {
      if (imgEl.src !== PLACEHOLDER_SRC) imgEl.src = PLACEHOLDER_SRC;
    });
  }

  function renderThumbnails(dataset) {
    const container = document.getElementById('dataset-thumbnails');
    if (!container) return;
    container.innerHTML = '';
    const entries = DATASETS[dataset] || [];
    entries.forEach((item, idx) => {
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = `${DATASET_LABELS[dataset]} ${item.id}`;
      img.className = 'dataset-thumb';
      img.dataset.id = item.id;
      img.dataset.dataset = dataset;
      if (idx === 0) img.classList.add('selected');
      img.addEventListener('click', () => showDetail(dataset, item.id));
      fallbackToPlaceholder(img);
      container.appendChild(img);
    });
    if (entries.length > 0) showDetail(dataset, entries[0].id);
  }

  function showDetail(dataset, id) {
    const entries = DATASETS[dataset] || [];
    const item = entries.find(d => d.id === id);
    if (!item) return;

    const imageEl = document.getElementById('detail-image');
    const flowEl = document.getElementById('detail-flow');
    const langEl = document.getElementById('detail-language');

    if (imageEl) { imageEl.src = item.image; fallbackToPlaceholder(imageEl); }
    if (flowEl)  { flowEl.src  = item.flow;  fallbackToPlaceholder(flowEl);  }
    if (langEl)  { langEl.textContent = item.language; }

    document.querySelectorAll('.dataset-thumb').forEach(t => {
      t.classList.toggle('selected', t.dataset.dataset === dataset && t.dataset.id === id);
    });
  }

  function setupTabs() {
    document.querySelectorAll('#dataset-tabs li').forEach(li => {
      li.addEventListener('click', () => {
        document.querySelectorAll('#dataset-tabs li').forEach(x => x.classList.remove('is-active'));
        li.classList.add('is-active');
        renderThumbnails(li.dataset.dataset);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    setupTabs();
    renderThumbnails(DATASET_ORDER[0]);
  });
})();

// BOOST Dataset Viewer data — PLACEHOLDER.
// Replace each entry's `image` / `flow` with real asset paths under
// ./static/dataset/<source>/, and `language` with the real instruction.
// `dataset-viewer.js` falls back to PLACEHOLDER_SRC automatically on load error.

const PLACEHOLDER_SRC = './static/dataset/placeholder.png';

// Helper: build N placeholder entries for a source.
function _placeholderEntries(n) {
  const entries = [];
  for (let i = 1; i <= n; i++) {
    const id = String(i).padStart(2, '0');
    entries.push({
      id: id,
      image: PLACEHOLDER_SRC, // TODO: ./static/dataset/<source>/<id>_image.png
      flow: PLACEHOLDER_SRC,  // TODO: ./static/dataset/<source>/<id>_flow.png
      language: 'Placeholder instruction — replace with the real language annotation.'
    });
  }
  return entries;
}

const DATASETS = {
  source1: _placeholderEntries(6),
  source2: _placeholderEntries(6),
  source3: _placeholderEntries(6),
  source4: _placeholderEntries(6),
  source5: _placeholderEntries(6),
  source6: _placeholderEntries(6)
};

const DATASET_ORDER = ['source1', 'source2', 'source3', 'source4', 'source5', 'source6'];
const DATASET_LABELS = {
  source1: 'Source 1',
  source2: 'Source 2',
  source3: 'Source 3',
  source4: 'Source 4',
  source5: 'Source 5',
  source6: 'Source 6'
};

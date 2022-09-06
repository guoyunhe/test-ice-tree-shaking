# Test ICE Tree Shaking

Webpack mode:

| Vite output file | Vite output size | Webpack output file | Webpack output size |
| ---------------- | ---------------- | ------------------- | ------------------- |
| index.js         | 128K             | vendor.js           | 127K                |
| page1.js         | 159B             | page1.js            | 3.7K                |
| page2.js         | 151B             | page2.js            | 1.2K                |

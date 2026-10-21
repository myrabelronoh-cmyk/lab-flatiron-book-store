# Page & Pine Bookstore

A static bookstore catalog built with HTML, CSS, and browser JavaScript.

## Run the catalog

Open `index.html` in a browser, or serve the project directory locally:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Development checks

Install the project tools once with `npm install`, then run:

```sh
npm run lint
npm run test:lab
```

`lint` checks the storefront JavaScript. `test:lab` runs the separate Flatiron DOM-manipulation lab suite in `lab-flatiron-book-store/`.
For storefront changes, also load the page in a browser and check the developer-tools Console for runtime errors and the rendered catalog.

## Project layout

- `index.html`, `styles.css`, and `script.js`: Page & Pine storefront
- `lab-flatiron-book-store/`: Separate Flatiron bookstore lab, its instructions, examples, and Mocha tests

The lab directory is maintained as its own Git repository; it is intentionally excluded from the storefront repository.

## Maintenance and review

When changing the catalog, verify book data and visible content, run the checks above, and review the page at desktop and narrow viewport sizes. Review dependency updates and documentation periodically, and have another contributor review changes before merging them into a shared branch.

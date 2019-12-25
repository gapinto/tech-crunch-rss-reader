# tech-crunch-rss-reader

# Requirements
PWA Angular App that would be able to fetch RSS feeds from
TechCrunch, app should be able to display articles and browser articles by category.
Requirements of the app:

1. Users should be able to browse articles by category
2. Once the article is clicked, the article content should be opened as a reader that
contains all the html content.
3. Once user is on the reader view, user should be able to navigate back to the main
page.

## Live demo
https://gapinto.github.io/tech-crunch-rss-reader/posts

## Desktop Mode

![desktop mode](https://github.com/gapinto/tech-crunch-rss-reader/raw/master/images/desktop-mode.png)

## Mobile Mode
![mobile mode list](https://github.com/gapinto/tech-crunch-rss-reader/blob/master/images/mobile-mode-1.png)
![mobile mode list](https://github.com/gapinto/tech-crunch-rss-reader/blob/master/images/mobile-mode-2.png)

## Test coverage
![covge](https://github.com/gapinto/tech-crunch-rss-reader/raw/master/images/coverage.png)

## Development Requirements
* Install the anglar CLI
```
npm install -g @angular/cli
```
## How execute the tests?
```
ng test
```
## How excute the tests with code coverage?
```
ng test --code-coverage
```
* You can see the report inside of the genereted folder `coverage` opening the index.html on the browser. 

## How build and deploy to prod enviroment?

* Build
```
ng build --prod --base-href /tech-crunch-rss-reader/
```

* Deploy
After the build, at the first time you shoul instal the `angular-cli-ghpages` globally:
```
npm install -g angular-cli-ghpages
```
Execute this command to `ngh --dir dist/tech-crunch-rss-reader` and done! Our app is hosted at
`https://your-username.github.io/tech-crunch-rss-reader/` 

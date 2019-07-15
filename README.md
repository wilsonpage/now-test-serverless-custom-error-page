1. Depoy with `now`
2. Visit `/`
3. Observe custom error page is not rendered.
4. run `now logs DEPLOY_ID`
5. Observe following error:

```
Error: wat
  at Page (/var/task/page.js:6886:9)
  at c (/var/task/page.js:2542:501)
  at Sa (/var/task/page.js:2545:1)
  at a.module.exports.FDah.a.render (/var/task/page.js:2550:467)
  at a.module.exports.FDah.a.read (/var/task/page.js:2550:58)
  at renderToString (/var/task/page.js:2562:83)
  at render (/var/task/page.js:4592:16)
  at renderPage (/var/task/page.js:4741:20)
  at _callee2$ (/var/task/page.js:5588:24)
  at tryCatch (/var/task/page.js:8175:40)
2019-07-15T15:42:28.270Z 3cdab899-ea89-426f-b13b-4b4571b0ed36    TypeError: Cannot read property 'experimentalPrerender' of undefined
      at renderToHTML (/var/task/page.js:4620:43)
      at <anonymous>
      at process._tickDomainCallback (internal/process/next_tick.js:228:7)
```

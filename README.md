# toio-browser

[toio.js](https://github.com/toio/toio.js) for web browsers

# Usage (ESM)

```sh
npm install toio-browser
```

```javascript
import { NearestScanner } from 'toio-browser/scanner';

document.getElementById("connect").addEventListener("click", async ev => {
  const cube = await new NearestScanner().start();
  await cube.connect();
  cube.move(100, 100, 1000);
});
```

# Usage (UMD)

```html
<!DOCTYPE html>
<html>
<body>
<button id="connect">connect to cube</button>
<script src="https://snoguchi.github.io/toio-browser/toio-browser-1.0.0.js"></script>
<script>
document.getElementById("connect").addEventListener("click", async ev => {
  const cube = await new toio.scanner.NearestScanner().start();
  await cube.connect();
  cube.move(100, 100, 1000);
});
</script>
</body>
</html>

```

# See Also

[1分で始めるtoioプログラミング - Qiita
](https://qiita.com/shinsuke-noguchi/items/219d3b36ed3dd99c2ff7)
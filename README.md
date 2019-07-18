# toio-browser

[toio.js](https://github.com/toio/toio.js) for web browsers

# Usage

```html
<script src="https://snoguchi.github.io/toio-browser/toio-browser-1.0.0.js"></script>
```

# Example

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://snoguchi.github.io/toio-browser/toio-browser-1.0.0.js"></script>
</head>
<body>

<button id="connect">connect to cube</button>

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

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Multiplication Tables from 1 to 10</title>
</head>
<body>

  <script>
    for (let i = 1; i <= 10; i++) {
      console.log(`Multiplication Table for ${i}:`);
      for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
      }
    }
  </script>

</body>
</html>

<?php

require '../../../vendor/autoload.php';

use App\Role;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name =  $_POST['name'] ?? "";
	$level = (int) $_POST['level'] ?? 0;
	

  if ($name && $level) {
    Role::create($name, $level);

    echo "<p>Success!</p>";
  }
}
?>

<link href="../../assets/style.css" rel="stylesheet">

<div class="center">
  <form method="POST">
    <table>
      <tr>
      <td><label for="name">Name:</label></td>
      <td><input type="text" id="name" name="name" placeholder="Name" required></td>
    </tr>
		<tr>
      <td><label for="level">Level:</label></td>
      <td><input type="number" id="level" name="level" placeholder="Level" required></td>
    </tr>
		
    </table>
    <button type="submit">Enviar</button>
  </form>
</div>

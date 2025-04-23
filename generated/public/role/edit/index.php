<?php

require '../../../vendor/autoload.php';

use App\Role;

$id = $_GET['id'] ?? null;

if (!$id) {
  echo "<p>ID null!</p>";
  die();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name =  $_POST['name'] ?? "";
	$level = (int) $_POST['level'] ?? 0;
	
  if ($name && $level) {
    Role::edit($id, $name, $level);

    echo "<p>Success!</p>";
  }
}

$result = Role::find($id);

if (!$result) {
  echo "<p>ID invalid!</p>";
  die();
}

$name = $result->name;
$level = $result->level;

?>

<link href="../../assets/style.css" rel="stylesheet">

<div class="center">
  <form method="POST">
    <table>
      <tr>
      <td><label for="name">Name:</label></td>
      <td><input type="text" id="name" name="name" value="<?php echo $name ?>" placeholder="Name" required></td>
    </tr>
		<tr>
      <td><label for="level">Level:</label></td>
      <td><input type="number" id="level" name="level" value="<?php echo $level ?>" placeholder="Level" required></td>
    </tr>
		
    </table>
    <button type="submit">Enviar</button>
  </form>
</div>

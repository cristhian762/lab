<?php

require '../../../vendor/autoload.php';

use App\User;

$id = $_GET['id'] ?? null;

if (!$id) {
  echo "<p>ID null!</p>";
  die();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name =  $_POST['name'] ?? "";
	$age = (int) $_POST['age'] ?? 0;
	
  if ($name && $age) {
    User::edit($id, $name, $age);

    echo "<p>Success!</p>";
  }
}

$result = User::find($id);

if (!$result) {
  echo "<p>ID invalid!</p>";
  die();
}

$name = $result->name;
$age = $result->age;

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
      <td><label for="age">Age:</label></td>
      <td><input type="number" id="age" name="age" value="<?php echo $age ?>" placeholder="Age" required></td>
    </tr>
		
    </table>
    <button type="submit">Enviar</button>
  </form>
</div>

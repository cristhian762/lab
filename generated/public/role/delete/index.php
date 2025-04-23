<?php

require '../../../vendor/autoload.php';

use App\Role;

$id = $_GET['id'] ?? null;

if (!$id) {
  echo "<p>ID null!</p>";
  die();
}

$result = Role::find($id);

if (!$result) {
  echo "<p>ID invalid!</p>";
  die();
}

Role::delete($id);

echo "<p>Success!</p>";

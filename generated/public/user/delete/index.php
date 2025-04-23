<?php

require '../../../vendor/autoload.php';

use App\User;

$id = $_GET['id'] ?? null;

if (!$id) {
  echo "<p>ID null!</p>";
  die();
}

$result = User::find($id);

if (!$result) {
  echo "<p>ID invalid!</p>";
  die();
}

User::delete($id);

echo "<p>Success!</p>";

<?php

namespace App;

use PDO;

class Role
{
  public static function find(int $id)
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("SELECT * FROM roles WHERE id = ?");
    $stmt->execute([$id]);

    return $stmt->fetch(PDO::FETCH_OBJ);
  }

  public static function create(string $name, int $level): void
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("INSERT INTO roles (name, level) VALUES (?, ?)");
    $stmt->execute([$name, $level]);
  }

  public static function edit(int $id, string $name, int $level): void
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("UPDATE roles SET name = ?, level = ? WHERE id = ?");
    $stmt->execute([$name, $level, $id]);
  }

  public static function delete(int $id)
  {
    $pdo = Database::connect();
    $stmt = $pdo->prepare("DELETE FROM roles WHERE id = ?");
    $stmt->execute([$id]);
  }
}

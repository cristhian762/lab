import * as path from 'node:path';
import * as fs from 'node:fs';
import { expandToNode, toString } from 'langium/generate';
export default function endpoint(name, fields, destination) {
    console.log("---------------------");
    // console.log(generatedFilePath)
    const dest = destination + 'public';
    const generatedFilePath = `${path.join(dest, name.toLowerCase())}.php`;
    const fileNode = expandToNode `
      <?php

      require __DIR__ . '/../vendor/autoload.php';

      use App\\${name};

      if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = $_POST['name'] ?? '';
        $age = (int) ($_POST['age'] ?? 0);

        if ($name && $age) {
          User::create($name, $age);

          echo "<p>Usuário cadastrado com sucesso!</p>";
        } else {
          echo "<p>Preencha todos os campos.</p>";
        }
      }
      ?>

      <form method="POST">
        <label>Nome: <input type="text" name="name" required></label><br>
        <label>Idade: <input type="number" name="age" required></label><br>
        <button type="submit">Cadastrar</button>
      </form>
    `.appendNewLineIfNotEmpty();
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    fs.writeFileSync(generatedFilePath, toString(fileNode));
}
//# sourceMappingURL=entities.js.map
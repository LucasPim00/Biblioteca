/*
  Warnings:

  - You are about to drop the column `repoUrl` on the `Projeto` table. All the data in the column will be lost.
  - Added the required column `imagem` to the `Projeto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projeto` to the `Projeto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repo` to the `Projeto` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Projeto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "projeto" TEXT NOT NULL,
    "repo" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "criadoEm" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Projeto" ("criadoEm", "descricao", "id", "tags", "titulo") SELECT "criadoEm", "descricao", "id", "tags", "titulo" FROM "Projeto";
DROP TABLE "Projeto";
ALTER TABLE "new_Projeto" RENAME TO "Projeto";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

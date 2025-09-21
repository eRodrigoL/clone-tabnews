import database from "infra/database.js";

beforeAll(cleanDatabase);
async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("GET to /api/v1/migrations shoult return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");

  const responseBady = await response.json();

  expect(Array.isArray(responseBady)).toBe(true);
  expect(responseBady.length).toBeGreaterThan(0);
});

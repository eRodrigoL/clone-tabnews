import database from "infra/database.js";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("POST to /api/v1/migrations shoult return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response1.status).toBe(201);

  const response1Bady = await response1.json();

  expect(Array.isArray(response1Bady)).toBe(true);
  expect(response1Bady.length).toBeGreaterThan(0);

  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response2.status).toBe(200);

  const response2Bady = await response2.json();

  expect(Array.isArray(response2Bady)).toBe(true);
  expect(response2Bady.length).toBe(0);
});

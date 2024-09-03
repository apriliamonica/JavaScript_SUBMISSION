import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("Pengujian 1: hanya salah satu atau keduanya bukan number maksimum: ", (t) => {
  assert.strictEqual(sum("1", 2), 0);
  assert.strictEqual(sum(1, "2"), 0);
  assert.strictEqual(sum("1", "2"), 0);
  assert.strictEqual(sum(null, 2), 0);
  assert.strictEqual(sum(1, null), 0);
});

test("Pengujian 2: salah satu atau keduanya negatif: ", (t) => {
  assert.strictEqual(sum(-1, 2), 0);
  assert.strictEqual(sum(1, -2), 0);
});

test("Pengujian 3: kedua nilai positif: ", (t) => {
  assert.strictEqual(sum(1, 2), 3);
  assert.strictEqual(sum(2, 3), 5);
});

test("Pengujian 4: kedua nilai yang berbeda: ", (t) => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(3, 2), 5);
});

test("Pengujian 5: kedua nilai yang sama: ", (t) => {
  assert.strictEqual(sum(2, 2), 4);
  assert.strictEqual(sum(5, 5), 10);
});

test("Pengujian 6: kedua nilai 0: ", (t) => {
  assert.strictEqual(sum(0, 0), 0);
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
});

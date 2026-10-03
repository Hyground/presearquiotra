import { chromium } from "playwright";
import assert from "node:assert/strict";
import fs from "node:fs";

// Browser checks against the running development or production preview server.
const browser = await chromium.launch({
  channel: process.platform === "win32" ? "msedge" : undefined,
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const base = process.env.PREVIEW_URL || "http://127.0.0.1:5173";
fs.mkdirSync(".preview", { recursive: true });
try {
  await page.goto(base);
  await page.getByRole("heading", { level: 1 }).waitFor();
  await page.screenshot({ path: ".preview/desktop.png" });
  await page
    .locator("nav")
    .getByRole("link", { name: "Básicos", exact: true })
    .click();
  await page.waitForTimeout(800);
  assert.equal(await page.locator("nav a.active").innerText(), "Básicos");
  await page
    .locator("#basicos")
    .getByRole("button", { name: "Ver transmisión" })
    .first()
    .click();
  assert.equal(
    await page.locator(".transmission .bit-track.playing").count(),
    2,
  );
  const before = await page
    .locator(".transmission .bit")
    .first()
    .evaluate((el) => el.getBoundingClientRect().x);
  await page.waitForTimeout(250);
  const after = await page
    .locator(".transmission .bit")
    .first()
    .evaluate((el) => el.getBoundingClientRect().x);
  assert.notEqual(before, after, "Bits should move");
  await page.getByRole("tab", { name: /USB4/ }).click();
  assert.match(await page.getByRole("tabpanel").innerText(), /80 Gbps/);
  await page.getByRole("tab", { name: /USB 1.x/ }).click();
  assert.match(await page.getByRole("tabpanel").innerText(), /12 Mbps/);
  await page.getByRole("tab", { name: /USB 1.x/ }).focus();
  await page.keyboard.press("ArrowRight");
  assert.match(await page.getByRole("tabpanel").innerText(), /480 Mbps/);
  await page.getByRole("button", { name: "x16", exact: true }).click();
  assert.equal(await page.locator(".lane-visual i").count(), 16);
  await page.getByRole("button", { name: "x1", exact: true }).click();
  assert.equal(await page.locator(".lane-visual i").count(), 1);
  const tx = page.locator(".uart-device").first().locator(".tip").first();
  await tx.focus();
  assert.equal(await tx.getByRole("tooltip").isVisible(), true);
  await page.getByRole("button", { name: "Detectar dispositivos" }).click();
  assert.equal(await page.locator(".radar-device").count(), 4);
  for (const [name, expected] of [
    ["Audífonos", "Bluetooth"],
    ["Laptop a Internet", "Wi-Fi"],
    ["Smartwatch", "Bluetooth"],
    ["PC a router", "Wi-Fi"],
    ["Mouse inalámbrico", "Bluetooth"],
  ]) {
    await page.getByRole("button", { name, exact: true }).click();
    assert.match(
      await page.locator(".recommendation strong").innerText(),
      new RegExp(expected),
    );
  }
  for (const width of [1440, 1024, 768, 390, 360, 320]) {
    await page.setViewportSize({ width, height: 900 });
    await page.waitForTimeout(150);
    assert(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `Overflow at ${width}px`,
    );
  }
  await page.getByRole("button", { name: "Abrir navegación" }).click();
  await page
    .locator("nav")
    .getByRole("link", { name: "Inicio", exact: true })
    .click();
  await page.waitForTimeout(800);
  assert.equal(await page.locator("nav").isVisible(), false);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.screenshot({ path: ".preview/mobile.png", fullPage: true });
  await page.setViewportSize({ width: 1440, height: 1000 });
  for (const label of [
    "Cableados",
    "Buses",
    "Inalámbricos",
    "Acerca de",
    "Inicio",
  ]) {
    await page
      .locator("nav")
      .getByRole("link", { name: label, exact: true })
      .click();
    await page.waitForTimeout(1400);
    assert.equal(await page.locator("nav a.active").innerText(), label);
  }
  await page.emulateMedia({ reducedMotion: "reduce" });
  const animation = await page
    .locator(".hero .bit")
    .first()
    .evaluate((el) => getComputedStyle(el).animationName);
  assert.equal(animation, "none");
  await page.setViewportSize({ width: 320, height: 900 });
  assert(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    "Reduced motion mobile overflow",
  );
  assert.deepEqual(errors, [], "No runtime errors");
  console.log(
    "PASS: navigation, bits, USB tabs, PCIe lanes, tooltips, Bluetooth, all recommendations, six viewport widths, mobile menu and reduced motion.",
  );
} finally {
  await browser.close();
}

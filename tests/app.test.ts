import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('lists available input videos', async ({ page }) => {
  const inputVideoNames = await page
    .locator('[aria-label="Input videos"] li')
    .allTextContents()

  expect(inputVideoNames).toEqual(['Sintel'])
})

test('previews sintel movie as default input', async ({ page }) => {
  await expect(
    page.locator('[aria-label="Input video preview"]'),
  ).toHaveAttribute('src', /sintel-2048-surround.mp4$/)
})

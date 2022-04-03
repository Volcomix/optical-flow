import { expect, test } from '@playwright/test'

test('shows sintel movie as default input', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('video[aria-label="Input"]')).toHaveAttribute(
    'src',
    /sintel-2048-surround.mp4$/,
  )
})

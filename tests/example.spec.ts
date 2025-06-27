import { test, expect } from '@playwright/test';

test('Strona główna ma tytuł', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});

test('youTube', async ({page})=>{
  await page.goto('https://youtube.com');
  await expect(page).toHaveTitle('YouTube');
})

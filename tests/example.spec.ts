import { test, expect } from '@playwright/test';
import { SignUpPage } from './pages/signup.page';

test('test', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Brands ' }).click();
  await page.getByRole('menuitem', { name: 'test' }).click();
  await page.getByRole('link', { name: 'test By test test $100' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await page.getByRole('button', { name: 'Proceed To Checkout' }).click();
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').click();
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill(`test+${Date.now()}@mail.com`);
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').press('Tab');
  await page.getByPlaceholder('Please Enter Your Password').fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Create an account' }).click();
});


test('test codegen', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Brands ' }).click();
  await page.getByRole('menuitem', { name: 'test' }).click();
  await page.getByRole('link', { name: 'test By test test $100' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await page.getByRole('button', { name: 'Proceed To Checkout' }).click();
  await page.getByRole('button', { name: 'Create an account' }).click();
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').click();
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill(`test+${Date.now()}@mail.com`);
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').press('Tab');
  await page.getByPlaceholder('Please Enter Your First Name').fill('userr');
  await page.getByPlaceholder('Please Enter Your First Name').press('Tab');
  await page.getByPlaceholder('Please Enter Your Last Name').fill('name');
  await page.getByPlaceholder('Please Enter Your Last Name').press('Tab');
  await page.getByPlaceholder('Please Enter Your Password').fill('123123123');
  await page.getByRole('button', { name: 'Sign Up' }).click();
});

test('user can post review', async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  await page.goto('https://shopdemo-alex-hot.koyeb.app/register');
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').click();
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill(`test+${Date.now()}@mail.com`);
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').press('Tab');
  await page.getByPlaceholder('Please Enter Your First Name').fill('userr');
  await page.getByPlaceholder('Please Enter Your First Name').press('Tab');
  await page.getByPlaceholder('Please Enter Your Last Name').fill('name');
  await page.getByPlaceholder('Please Enter Your Last Name').press('Tab');
  await page.getByPlaceholder('Please Enter Your Password').fill('123123123');
  await page.getByRole('button', { name: 'Sign Up' }).click(); await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('link', { name: 'Brands ' }).click();
  await page.getByRole('menuitem', { name: 'test' }).click();
  await page.getByRole('link', { name: 'test By test test $100' }).click();
  await page.locator('.select-container').click();
await page.getByText('No', { exact: true });
  // await page.getByRole('button', { name: 'Add To Bag' }).click();
  // await page.getByRole('button', { name: 'Proceed To Checkout' }).click();
}
);
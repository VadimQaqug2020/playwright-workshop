import { AppComponent } from './appComponent';
import { Locator } from '@playwright/test';

export class SignUpPage extends AppComponent {

        private readonly emailInput: Locator = this.page.locator('main input[placeholder="Please Enter Your Email"]');
        private readonly firstNameInput: Locator = this.page.locator('input[placeholder="Please Enter Your First Name"]');
        private readonly lastNameInput: Locator = this.page.locator('input[placeholder="Please Enter Your Last Name"]');
        private readonly passwordInput: Locator = this.page.locator('input[placeholder="Please Enter Your Password"]');
        private readonly signUpButton: Locator = this.page.locator('button:has-text("Sign Up")');

        async signUpNewUser() {
            await this.page.goto('https://shopdemo-alex-hot.koyeb.app/register');
            await this.emailInput.click();
            await this.emailInput.fill(`test+${Date.now()}@mail.com`);
            await this.emailInput.press('Tab');
            await this.firstNameInput.fill('userr');
            await this.firstNameInput.press('Tab');
            await this.lastNameInput.fill('name');
            await this.lastNameInput.press('Tab');
            await this.passwordInput.fill('123123123');
            await this.signUpButton.click(); 
        }
    }
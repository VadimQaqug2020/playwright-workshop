import { AppComponent } from "./appComponent";
import { SignUpPage } from "./signup.page";

export class Application extends AppComponent {
            public readonly signUpPage = new SignUpPage(this.page);
    }
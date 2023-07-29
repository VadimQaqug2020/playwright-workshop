import { Locator } from "@playwright/test";
import { AppComponent } from "../../appComponent";

export class SearchResultsPage extends AppComponent {
    private allResults = async (): Promise<SearchResult[]> => {
        const allResults = await this.page.locator('.item-box').all();
        return allResults.map(r => new SearchResult(r));
         
    }

    async filterByPrice(price: string) {
        const results = await this.allResults();

        const filtered: SearchResult[] = [];

        for (const r of results) {
            if (await r.price() === price) {
                filtered.push(r);
            }
        }

        return filtered;
    }
}

class SearchResult extends AppComponent {
    constructor(private baseLocator: Locator) {
        super(baseLocator.page());
    }
    price() {
        return this.baseLocator.locator('.price').innerText();
    }
}
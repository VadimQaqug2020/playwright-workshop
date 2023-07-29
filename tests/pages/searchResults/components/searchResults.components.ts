import { Locator } from "@playwright/test";
import { AppComponent } from "../../appComponent";

//try to use for loop to iterate through all the results and check the price 
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

    async getAllSearchResultsInfo() {
        const results = await this.allResults();
        const allResultsInfo: string[] = [];
                    
        for (const r of results) {
            allResultsInfo.push(
                // name: await r.name(),
                // price: await r.price(),
                // description: await r.description(),
            );
        }
//create this array of objects and compare it with test data
        return allResultsInfo;
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
import HTTP from "./http";

export default class Accounts {
    constructor(private httpservice: HTTP, public config: IConfluenceAPI) {}

    public get(username: string): Promise<IObject> {
        // Replace /wiki/rest/api/ with /rest/api/3/ for user search endpoint
        const apiBase = this.config.url.replace(/\/wiki\/rest\/api\/?$/, '/rest/api/3');
        const url = new URL(`${apiBase}/user/search`);

        url.searchParams.append("query", username);
        return this.httpservice.get(url);
    }
}
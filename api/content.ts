import HTTP from "./http";

export default class Content {
    constructor(private httpservice: HTTP, public config: IConfluenceAPI) {}

    public get(pageid: number): Promise<IObject> {
        const url = new URL(`${this.config.url}/rest/api/content/${pageid}`);

        url.searchParams.append("expand", 'body.storage,version');
        return this.httpservice.get(url);
    }

    public update(data: IDocument, pageid: number): Promise<IObject> {
        const body = {
            title: data.title,
            version: {
                number: data.version.number + 1,
                message: data.message
            },
            body: {
                storage: {
                    value: data.body,
                    representation: 'storage'
                }
            },
            type: 'page'
        };

        const url = new URL(`${this.config.url}/rest/api/content/${pageid}`);
        return this.httpservice.put(url, body);
    }
}
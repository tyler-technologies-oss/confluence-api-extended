import HTTP from './http';
import Content from './content';
import Accounts from './accounts';


export default class ConfluenceAPI {
    public httpclient: HTTP;
    public content: Content;
    public accounts: Accounts;
    constructor(private config: IConfluenceAPI) {
        this.httpclient = new HTTP(this.config);
        this.content = new Content(this.httpclient, this.config);
        this.accounts = new Accounts(this.httpclient, this.config);
    }
}
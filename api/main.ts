import HTTP from './http';
import Content from './content';

export default class ConfluenceAPI {
    public httpclient: HTTP;
    public content: Content;
    
    constructor(private config: IConfluenceAPI) {
        this.httpclient = new HTTP(this.config);
        this.content = new Content(this.httpclient, this.config);
    }
}
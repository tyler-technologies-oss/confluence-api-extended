export default class HTTP {
    private headers: Headers;
  
    public constructor(public config: IConfluenceAPI) {
      this.headers = new Headers({
        Authorization: this.config.cloud
          ? "Basic " + Buffer.from(`${this.config.email}:${this.config.token}`).toString("base64")
          : "Bearer " + this.config.token,
        "Content-Type": "application/json",
        Accept: "application/json",
      });
    }
  
    private async request(
      url: URL,
      method: string,
      body?: IObject
    ): Promise<IObject> {
      const result = await fetch(url.toString(), {
        method: method,
        headers: this.headers,
        body: body ? JSON.stringify(body) : undefined,
      });

      let data: any;
      const contentType = result.headers.get("content-type");

      if (contentType && contentType.includes("application/json")) {
        data = await result.json();
      } else {
        data = await result.text(); // fallback for HTML/plaintext responses
      }

      if (!result.ok) {
        const message =
          (data && (data.error?.message || data.message)) || data || "Unknown error";
        return {
          error: `An error occurred with your request: ${result.status} - ${message}`,
        };
      }

      return data;
    }

  
    public get(url: URL): Promise<IObject> {
      return this.request(url, "GET");
    }
  
    public post(url: URL, body?: IObject): Promise<IObject> {
      return this.request(url, "POST", body);
    }
  
    public put(url: URL, body?: IObject): Promise<IObject> {
      return this.request(url, "PUT", body);
    }
  
    public delete(url: URL): Promise<IObject> {
      return this.request(url, "DELETE");
    }

    public patch(url: URL, body?: IObject): Promise<IObject> {
      return this.request(url, "PATCH", body);
    }
  }
  
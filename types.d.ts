interface IConfluenceAPI {
    token: string;
    url: string;
}

interface IResult {
  result?: object;
  error?: string;
  documentation_url?: string;
  status?: number;
}

interface IObject {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  [key: string]: any;
}

interface IDocument {
  title: string;
  version: {
    number: number;
  };
  message: string;
  body: string;
  spaceKey?: string;
  parentId?: number;
}
interface IConfluenceAPI {
  email?: string;
  token: string;
  url: string;
  cloud: boolean;
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
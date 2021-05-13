/// <reference path="lib/fetcher.interfaces.ts" />
/// <reference path="lib/fetcher.ts" />

import { FetcherNamespace } from './lib/fetcher';
import Fetcher = FetcherNamespace.Fetcher;

const c = new Fetcher();
console.log(c.fetch());

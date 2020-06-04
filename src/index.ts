import { Handler } from './somelib';
import { DeepDependency } from './test/deep/Dependency';
import lib from './lib';
import libold from './libold';

const handler = new Handler();
handler.sayMyName();
console.log({lib, libold});

const depDep = new DeepDependency('NameDep');
depDep.sayYourName();

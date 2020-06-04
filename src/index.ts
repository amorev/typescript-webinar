import { Handler } from './somelib';
import { DeepDependency } from './test/deep/Dependency';

const handler = new Handler();
handler.sayMyName();

const depDep = new DeepDependency('NameDep')
depDep.sayYourName();

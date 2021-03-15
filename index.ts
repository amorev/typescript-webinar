import { Validation } from './lib/validation/classes';
import MySystemArrayValidator = Validation.MySystemArrayValidator;

const c = new MySystemArrayValidator();
c.isValidArray([]);

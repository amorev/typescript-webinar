import dep from './dep';

module.exports = function (url: string) {
    console.log(dep);
    return Promise.resolve(dep);
};

function getArea(params){
    if(typeof params === 'array' && params.length === 2 && (params[0] >= 0 && params[1] >= 0)){
            return params[0] * params[1]
        }
    else
        return -1
}
module.export = getArea()
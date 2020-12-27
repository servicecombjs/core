var getKey = (object,value)=>{
    let targetKey = ''
    Object.keys(object).forEach((key)=>{
        if (object[key] === value) {
            targetKey = key
        }
    }
    )
    return targetKey
}

var englishObject = {
    'a': 'hello',
    'b': 'boy'
}

var chineseObject = {
    'a': '你好',
    'b': '汤姆'
}

var tables = [{
    first: 'hello',
    second: '汤姆',
    times: 56
}, {
    first: 'boy',
    second: 'hello',
    times: 56
}, {
    first: 'hello',
    second: 'boy',
    times: 56
}, {
    first: 'hello',
    second: 'hello',
    times: 56
}, {
    first: 'boy',
    second: 'boy',
    times: 56
}]

tables.forEach((table,item)=>{
    Object.keys(table).forEach((key)=>{
        let value = table[key]
        if (getKey(englishObject, value)) {
            table[key] = chineseObject[getKey(englishObject, value)]
        }
    }
    )
}
)

console.log(tables)

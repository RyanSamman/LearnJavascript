const alpha = {
    "meta": {
        "information": "Daily Prices (open, high, low, close) and Volumes",
        "symbol": "msft",
        "updated": "2020-05-22",
        "size": "Compact",
        "zone": "US/Eastern"
    },
    "data": {
        "2020-05-22T00:00:00.000Z": {
            "open": "183.1900",
            "high": "184.4600",
            "low": "182.5400",
            "close": "183.5100",
            "volume": "20826898"
        },
        "2020-05-21T00:00:00.000Z": {
            "open": "185.4000",
            "high": "186.6700",
            "low": "183.2900",
            "close": "183.4300",
            "volume": "29032741"
        }
    }
}

let { data: { ...rest } } = alpha
keys = Object.keys(rest)
console.log(rest)
console.log(new Date(keys[0]).getFullYear)
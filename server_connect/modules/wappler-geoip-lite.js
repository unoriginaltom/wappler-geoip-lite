const geoip = require('geoip-lite');

exports.geoip = function (options) {
    const ip = this.parseRequired(options.ip, 'string');
    const geo = geoip.lookup(ip);

    if (geo) {
        return {
            range: geo.range,
            country: geo.country,
            region: geo.region,
            eu: geo.eu,
            timezone: geo.timezone,
            city: geo.city,
            ll: geo.ll,
            metro: geo.metro,
            area: geo.area
        };
    } else {
        throw new Error('IP not found');
    }
};


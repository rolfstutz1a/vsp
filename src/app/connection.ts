export class Connection {

    departure: string;
    number: string;
    delay: string;
    to: string;
    platform: string;

    constructor(data: any) {
        this.departure = data.stop.departure;
        this.number = data.name;
        this.delay = data.stop.delay;
        this.to = data.to;
        this.platform = data.stop.platform;
    }
}

/*

    $(data.stationboard).each(function () {
        var prognosis, departure, delay, line = '<tr><td>';
        departure = moment(this.stop.departure);
        if (this.stop.prognosis.departure) {
            prognosis = moment(this.stop.prognosis.departure);
            delay = (prognosis.valueOf() - departure.valueOf()) / 60000;
            line += departure.format('HH:mm') + ' <strong>+' + delay + ' min</strong>';
        } else {
            line += departure.format('HH:mm');
        }
        line += '</td><td>' + this.name + '</td><td>' + this.to + '</td></tr>';
        $('#stationboard tbody').append(line);


*/



/*

{
"stop": {
"station": {
"id": "8502119",
"name": "Lenzburg",
"score": null,
"coordinate": {
"type": "WGS84",
"x": 47.39119,
"y": 8.170381
},
"distance": null
},
"arrival": null,
"arrivalTimestamp": null,
"departure": "2018-06-29T00:32:00+0200",
"departureTimestamp": 1530225120,
"delay": null,
"platform": "4",
"prognosis": {
"platform": null,
"arrival": null,
"departure": null,
"capacity1st": null,
"capacity2nd": null
},
"realtimeAvailability": null,
"location": {
"id": "8502113",
"name": null,
"score": null,
"coordinate": {
"type": "WGS84",
"x": null,
"y": null
},
"distance": null
}
},
"name": "S23 8492",
"category": "S",
"subcategory": null,
"categoryCode": null,
"number": "23",
"operator": "SBB",
"to": "Aarau",
"passList": [
{
"station": {
"id": "8502113",
"name": null,
"score": null,
"coordinate": {
"type": "WGS84",
"x": null,
"y": null
},
"distance": null
},
"arrival": null,
"arrivalTimestamp": null,
"departure": "2018-06-29T00:32:00+0200",
"departureTimestamp": 1530225120,
"delay": null,
"platform": "4",
"prognosis": {
"platform": null,
"arrival": null,
"departure": null,
"capacity1st": null,
"capacity2nd": null
},
"realtimeAvailability": null,
"location": {
"id": "8502113",
"name": null,
"score": null,
"coordinate": {
"type": "WGS84",
"x": null,
"y": null
},
"distance": null
}
},
{
"station": {
"id": "8502114",
"name": "Rupperswil",
"score": null,
"coordinate": {
"type": "WGS84",
"x": 47.403276,
"y": 8.126947
},
"distance": null
},
"arrival": "2018-06-29T00:35:00+0200",
"arrivalTimestamp": 1530225300,
"departure": "2018-06-29T00:35:00+0200",
"departureTimestamp": 1530225300,
"delay": null,
"platform": null,
"prognosis": {
"platform": null,
"arrival": null,
"departure": null,
"capacity1st": null,
"capacity2nd": null
},
"realtimeAvailability": null,
"location": {
"id": "8502114",
"name": "Rupperswil",
"score": null,
"coordinate": {
"type": "WGS84",
"x": 47.403276,
"y": 8.126947
},
"distance": null
}
},
{
"station": {
"id": "8502113",
"name": "Aarau",
"score": null,
"coordinate": {
"type": "WGS84",
"x": 47.391343,
"y": 8.05127
},
"distance": null
},
"arrival": "2018-06-29T00:40:00+0200",
"arrivalTimestamp": 1530225600,
"departure": null,
"departureTimestamp": null,
"delay": null,
"platform": null,
"prognosis": {
"platform": null,
"arrival": null,
"departure": null,
"capacity1st": null,
"capacity2nd": null
},
"realtimeAvailability": null,
"location": {
"id": "8502113",
"name": "Aarau",
"score": null,
"coordinate": {
"type": "WGS84",
"x": 47.391343,
"y": 8.05127
},
"distance": null
}
}
],
"capacity1st": null,
"capacity2nd": null
}
*/

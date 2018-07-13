const request=require('request');

const getWeather=(lat,lng,callback) => {

  request({
    url: `https://api.darksky.net/forecast/2fb7cffd4cbc10320821660c949bdd9b/${lat},${lng}`,
    json: true
  },(error,response,body)=>{

    if(!error && response.statusCode===200){
      callback(undefined,{
        temperature:body.currently.temperature,
        apparentTemperature:body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch server.')
    }

  });
};

module.exports.getWeather=getWeather;

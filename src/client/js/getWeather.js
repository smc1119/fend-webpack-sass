const getWebAPI = async (url='') => {
    console.log("::: Running getWebAPI :::");

    let weatherURL = 'https://api.openweathermap.org/data/2.5/weather?zip=75024&units=imperial&appid=f5d8b82cc955cedecf9a4674f13f79d9';

    const request = await fetch(weatherURL);

    try {
    const data = await request.json();

    console.log(data);

    return data;

    }   catch(error) {
        console.log('error ', error);
    };

}

export { getWebAPI }


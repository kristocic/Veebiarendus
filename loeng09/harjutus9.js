const cars = [
    {
        "url": "https://i.pinimg.com/1200x/5e/59/70/5e5970225b4e2d6c6b9dfcdcfbf45abe.jpg",
        "name": "BMW E39",
        "grade": 5,
    },
    {
        "url": "https://www.carscoops.com/wp-content/uploads/2018/06/audi-rs5-red-pearleffect-1.jpg",
        "name": "Audi S5",
        "grade": 5,
    },
    {
        "url": "https://assets.whichcar.com.au/image/upload/s--pYQaslly--/c_fill,f_auto,q_auto:good/t_p_4x3/v1/archive/whichcar/2019/11/04/3947/2014-volkswagen-golf-gti-LT-front-side-action.jpg",
        "name": "GOLF GTI",
        "grade": 4,
    }

];


const carList = document.getElementById('car-list');


cars.forEach(car => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = car.url;
    img.alt = car.name; 
    const carInfo = document.createElement('p');
    carInfo.textContent = `Name: ${car.name}, Grade: ${car.grade}`;

    li.appendChild(img);
    li.appendChild(carInfo); 
    carList.appendChild(li);
});
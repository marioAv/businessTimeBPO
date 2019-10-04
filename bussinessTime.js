function addBusinessTime(holiday, time, duration) {

  let dateInMs= time.getTime();
  let durationInMs = duration * 1000;

  let holidayStartMs =  holiday.start.getTime();
  let holidayEndMs = holiday.end.getTime();

  let holidayDuration = holidayEndMs - holidayStartMs;


  if(time.getDate() < holiday.start.getDate() || time.getDate() > holiday.end.getDate() ){
    console.log(new Date(dateInMs + durationInMs));
  }

  else if(dateInMs <= holidayStartMs ){
    console.log(new Date(dateInMs + holidayDuration + durationInMs));
 }

 else if(dateInMs >= holidayEndMs){
   console.log(new Date(dateInMs - holidayDuration +  durationInMs));
 }

 else if(new Date(dateInMs).getDate() + duration == holiday.start.getDate()){
   console.log(new Date(holidayStartMs +  durationInMs));
 }

 else {
   console.log(new Date(holidayEndMs +  durationInMs));
 }

}


// Christmas 2019, 9pm Dec 24th to 9pm Dec 25th
const holiday = {
  start: new Date('2019-12-24T21:00:00'),
  end: new Date('2019-12-25T21:00:00')
};


addBusinessTime(holiday, new Date('2019-12-01T00:00:00'), 60 * 60) // returns 2019-12-01T01:00:00
addBusinessTime(holiday, new Date('2019-12-24T21:00:00'), 1) // returns 2019-12-25T21:00:01
addBusinessTime(holiday, new Date('2019-12-24T20:30:00'), 60 * 60) // returns 2019-12-25T21:30:00
addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), 1) // returns 2019-12-25T21:00:01
addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), -1) // returns 2019-12-24T20:59:59
addBusinessTime(holiday, new Date('2019-12-25T21:00:30'), -60) // returns 2019-12-24T20:59:30
addBusinessTime(holiday, new Date('2019-12-25T21:00:00'), 10) // returns 2019-12-24T21:00:10
addBusinessTime(holiday, new Date('2019-12-25T21:00:00'), -10) // returns 2019-12-24T20:59:50  

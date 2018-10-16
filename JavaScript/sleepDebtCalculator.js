const getSleepHours = day => {
    let sleepHours = '';
    switch (day) {
        case 'monday':
          sleepHours = 7;
          break;
      case 'tuesday':
          sleepHours = 7;
          break;
         case 'wednesday':
          sleepHours = 7;
          break;
         case 'thursday':
          sleepHours = 7;
          break;
      case 'friday':
          sleepHours = 7;
          break;
      case 'saturday':
          sleepHours = 12;
          break;
      case 'sunday':
          sleepHours = 12;
          break;
      default:
          console.log('invalid day you entered!!!!')
          break;      
    }  
    return sleepHours;
  }
  
  console.log("getSleepHours = " , getSleepHours('tuesday'));
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') + 				                    	getSleepHours('tuesday') +
               getSleepHours('wednesday') + 				                  getSleepHours('thursday') +
           getSleepHours('friday') + 				                    	getSleepHours('saturday') +
               getSleepHours('sunday');			             
  }
  
  console.log("getActualSleepHours = ", getActualSleepHours());
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  }
  
  console.log("getIdealSleepHours = ", getIdealSleepHours());
  
  const calculateSleepDebt = () => {
    let  actualSleepHours = getActualSleepHours();
    let  idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours) {
        console.log('You are getting perfect amount of 	sleep');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You are getting '+ (actualSleepHours - idealSleepHours )+' more hours of sleep than you need');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You are getting '+ (idealSleepHours - actualSleepHours) +' less hours of sleep than you need');
  } else {
    console.log('Opps!!wrong choice');
  }
  }
  
  console.log(calculateSleepDebt());
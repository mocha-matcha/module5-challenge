// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today = dayjs();
var root = $('.container-fluid');

function getHourText(hour)
{
let text = ``;
if(hour === 0)
	{
	text = `12AM`;
	}
else if(hour < 12)
{text = hour + `AM`;}
else if(hour === 12)
{
text += hour + `PM`;
}
else
{text += (hour - 12) + `PM`;}
return text;
}

function getPastElement(hour)
{
console.log("past element append");
let element = $(`
      <div id="hour-9" class="row time-block past">
        <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
`);

element.attr('id', "hour-"+hour);
element.find('.hour').text(getHourText(hour));
return element;
}

function getCurrentElement(hour)
{
console.log('current Elment');
let element = $(`<div id="hour-10" class="row time-block present">
        <div class="col-2 col-md-1 hour text-center py-3">10AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>`); 

element.attr('id', "hour-"+hour);
element.find('.hour').text(getHourText(hour));
return element;
}

function getFutureElement(hour)
{
console.log("future");
let element = $(`<div id="hour-11" class="row time-block future">
        <div class="col-2 col-md-1 hour text-center py-3">11AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
 `);

element.attr('id', "hour-"+hour);
element.find('.hour').text(getHourText(hour));
return element;
}

function onSave()
{
console.log('save');

}

function populateUi()
{
	for(let hour = 0; hour < 24; hour++ )
	{
		if(hour < today.hour())
			{
			root.append(getPastElement(hour))
			}
		else if(hour === today.hour())
		{
		root.append(getCurrentElement(hour));
		}
		else
		{
		root.append(getFutureElement(hour));
		}

	}


}

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?



  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
	console.log('start');
	$('#currentDay').text(today.format('DD/MM/YYYY'));
	populateUi();

	$('.btn').on('click',function(event)
		{
		let pe = $(`${event.target.parentElement['innerHTML']}`);

			let selectedHour = pe.attr('id');
		console.log(selectedHour);
	console.log(pe);	
		
		});
});

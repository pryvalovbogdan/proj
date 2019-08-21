
/*Класс blinds(жалюзи)
   состояние
      _status: Boolean
      _sunLight: Number
      
   поведение
      getStatus(): String
      open(): void
      close(): void

      moreSunLight(): void
      lessSunLight(): void
      setSunLight(level: Number): void
      getSunLight(): Number
      
*/

function Blinds(sunLight){
	this._status = false;
	this._sunLight = sunLight;
	}
Blinds.prototype.open = function() {
	this._status = true;
}

Blinds.prototype.close = function() {
	this._status = false;
}
Blinds.prototype.getStatus = function() {
	return this._status ? "Opened Blinds" : "Closed Blinds";
}

Blinds.prototype.moreSunLight = function(sunLight){
	if(this._sunLight < 95 ) {
	this._sunLight += 5;
} 
}
Blinds.prototype.lessSunLight = function(sunLight){
	if(this._sunLight > 5) {
	this._sunLight -= 5;
} 
}
Blinds.prototype.setSunLight = function(sunLight){
	if(!isNaN(sunLight)&& typeof sunLight == "number" && sunLight >= 0 && sunLight <= 100){
	this._sunLight = sunLight;
	} 
}

Blinds.prototype.getSunLight = function(){
	return this._sunLight + "%";
}
var f = new Blinds(99);

/*Класс airConditioner(states)
   состояние
      _status: Boolean
      _mode: ["String"];
      currentState: Number;
      
   поведение
      getStatus(): String
      on(): void
      off(): void

      coldMode(): void
      warmMode(): void
      turboMode(): void
      nextMode(): void
      previousMode(): void
      getmodes()
*/



class AirConditioner {
		constructor() {
			this._mode = ["coldMode", "warmMode", "turboMode"];
			this._status = false;
			this._currentMode = 0;
		}
		on(){
			this._status = true;
		}
		off(){
			this._status = false;
		}

		get status(){
			return this._status ? "On" : "Off";
		}
		nextMode(){
			if(this._currentMode < 2){
		   	this._currentMode++;
		   } else {}
		}
		previousMode(){	
			if(this._currentMode > 0){
			this._currentMode--;
			} else {}
		}
		
		coldMode(){
			this._currentMode = 0;
		}
		warmMode(){
			this._currentMode = 1;
		}
		turboMode(){
			this._currentMode = 2;
		}
		
		get modes(){
			return this._mode[this._currentMode];
		}
}

let p = new AirConditioner()



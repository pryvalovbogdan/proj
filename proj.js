class Similiar {
	constructor(name){
		this._status = false;
		this._name = name;
	}
	get name() {
      return this._name;
   	}
   	set name(name) {
      this._name = name;
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


}

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
class Blinds extends Similiar{
	constructor(name, sunLight){
		super(name);
		this._sunLight = sunLight;

	}
	moreSunLight(){
		if(this._sunLight < 95){
			this._sunLight += 5;
		}
	}
	lessSunLight(){
		if(this._sunLight > 5){
			this._sunLight -= 5;
		}
	}
	set sunLight(sunLight){
		if(!isNaN(sunLight)&& typeof sunLight == "number" && sunLight >= 0 && sunLight <= 100){
	this._sunLight = sunLight;
	}
}
	get sunLight(){
		return this._sunLight + "%";
	}

}
let t = new Blinds("blinds1", 95)
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



class AirConditioner extends Similiar{
		constructor(name) {
			super(name);
			this._mode = ["coldMode", "warmMode", "turboMode"];
			this._currentMode = 0;
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

let p = new AirConditioner("cond1")


/*class Home
   state
      _address: string
      _devices: []
   behaviour
      getAddress(): string
      setAddress(string): void
      
      addDevice(device): void
      getDeviceByName(string): device
      getAllDevices(): [device]
      deleteDeviceByName(string): void
*/

class Home {
	constructor(address){
		this._address = address;
		this._devices = [];
		
	}
	set address(address){
		this._address = address;
	}
	get address(){
		return this._address;
	}

	addDevice(device){
		this._devices.push(device);
	}
	getDeviceByName(name){
		 this._devices.forEach(function(element){
				if(element.name == name){
				console.log(element)	
			}
		} )
			
			
	}
	get allDevices(){
		return this._devices;
	}
	deleteDeviceByName(name){
		this._devices.filter(function(element){
			return element != name;
		})
	}

}

let z = new Home("some")





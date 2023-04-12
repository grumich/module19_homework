/*5е Задание.
Перепишите консольное приложение из предыдущего юнита на классы.*/
class ElectricalApplianceClass {
    constructor(name,manufacturer,power,turn){
      this.name=name;
      this.manufacturer=manufacturer;
      this.power=power;
      this.turn=turn;
    }
    getText(){
      console.log(`The ${this.name} is manufacturied by ${this.manufacturer}. Power Consumption 
      of the ${this.name} is ${this.power} W. The ${this.name} is switched ${this.turn}.`)
    }
  }
  
  const iron = new ElectricalApplianceClass('Iron','Tefal','650','on');
  const lamp = new ElectricalApplianceClass('Lamp','Bork','800','Led');
  
  iron.getText();
  lamp.getText();
  
  class PersonalComputerClass extends ElectricalApplianceClass{
    constructor(name,manufacturer,power,turn,display){
      super(name,manufacturer,power,turn);
      this.name=name;
      this.display=display;
    }
    description(){
      console.log(`${super.getText()}. Has a monitor ${this.display} inshes`);
    }
  }
  
  const mac = new PersonalComputerClass('Mackintosh','Apple','2500','off','12');
  
  mac.description();
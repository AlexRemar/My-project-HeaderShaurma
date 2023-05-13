'use strict'
const buttonSnak = [...document.querySelectorAll('#buttonSnak')]
const buttonShaurma = [...document.querySelectorAll('#buttonShaurma')]
const buttonSouse = [...document.querySelectorAll('#buttonSouse')]
const buttonPotato = [...document.querySelectorAll('#buttonPotato')]
const line = [...document.querySelectorAll('.line')]
const scew = [...document.querySelectorAll('.lineScew')]
const scewFirst = [...document.querySelectorAll('.lineScewFirst')]
const container = [...document.querySelectorAll('.container')]
const buttons = [...document.querySelectorAll('#buttons')]
const text = [...document.querySelectorAll('.text')]

class Visible {
	constructor(element, element1, element2, element3){
		this.element = element;
		this.element1 = element1;
		this.element2 = element2;
		this.element3 = element3;	
	}

visibility(){
	const arr = this.element.concat(this.element1, this.element2, this.element3);
    arr.forEach(item => {
    	item.style.transition = 'all 1s ease-out';
    	item.style.opacity = '1';
	});
}

hidden(){
	const arr = this.element.concat(this.element1, this.element2, this.element3);
	arr.forEach(item => {
    	item.style.opacity  = '0';
	});
}

animation(){
	for(let el of this.element){
		el.addEventListener('mouseover', (e) => {
	el.style.transform = 'scale(1.5) translate(-20%, -20%)';
	})
  }
}

animationOff(){
	for(let el of this.element){
	el.style.removeProperty('transform');
	}
  }
}

function focus(e, b){
	e.addEventListener('mouseover', (e) => {
		b.visibility()
	});
	e.addEventListener('mouseout', (e) => {
		setTimeout(() => {
  		b.hidden()
		}, 15000);
	});
}

function animationButton(e, b){
	e.addEventListener('mouseover', (e) => {
		b.animation()
	});
	e.addEventListener('mouseout', (e) => {
		b.animationOff()
	});
}

const lineSnak = line.find(el => el.closest('#two'))
const lineScewSnak = scewFirst.find(el => el.closest('#one'))
const containerSnak = container.find(el => el.closest('#snaks'))
const allSnak = buttons.find(el => el.closest('.allSnaks'))
const textSnak = text.find(el => el.closest('#textSnak'))
const snak = new Visible(buttonSnak, lineSnak, lineScewSnak, textSnak)
focus(containerSnak, snak);
animationButton(allSnak, snak)


const lineShaurma = line.find(el => el.closest('#three'))
const lineScewShaurma = scew.find(el => el.closest('#four'))
const containerShaurma = container.find(el => el.closest('#shaurma'))
const allShaurma = buttons.find(el => el.closest('.allShaurma'))
const textShaurma = text.find(el => el.closest('#textShaurma'))
const shaurma = new Visible(buttonShaurma, lineShaurma, lineScewShaurma, textShaurma)
focus(containerShaurma, shaurma);
animationButton(allShaurma, shaurma)

const lineSouse = line.find(el => el.closest('#six'))
const lineScewSouse = scew.find(el => el.closest('#five'))
const containerSouse = container.find(el => el.closest('#souse'))
const allSouse = buttons.find(el => el.closest('.allSouse'))
const textSouse = text.find(el => el.closest('#textSouse'))
const souse = new Visible(buttonSouse, lineSouse, lineScewSouse, textSouse)
focus(containerSouse, souse);
animationButton(allSouse, souse)

const linePotato = line.find(el => el.closest('#seven'))
const lineScewPotato = scewFirst.find(el => el.closest('#eight'))
const containerPotato = container.find(el => el.closest('#potato'))
const allPotato = buttons.find(el => el.closest('.allPotato'))
const textPotato = text.find(el => el.closest('#textPotato'))
const potato = new Visible(buttonPotato, linePotato, lineScewPotato, textPotato)
focus(containerPotato, potato);
animationButton(allPotato, potato)








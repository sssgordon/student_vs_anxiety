// hero object
const hero = {
    name: 'Student',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: 'knowledge',
        damage: 2,
    },
}

//rest
function rest(person) {
    person.health = 10
    alert('You awaken feeling well rested.')
    displayStats()
    return person
}

//rest UI
document.getElementById('inn').addEventListener('click', function (event) {
    rest(hero)
})

//pick up item
function pickUpItem(person, weapon) {
    person.inventory.push(weapon)
}

//dagger UI
document.getElementById('dagger').addEventListener('click', function (event) {
    const dagger = {
        type: 'dagger',
        damage: 2
    }
    pickUpItem(hero, dagger)
    document.getElementById('dagger').remove()
})

//equip weapon
function equipWeapon(person) {
    if (!person.inventory[0]) {
        return false
    } else {
        person.weapon = person.inventory[0]
    }
}

//equip weapon UI
document.getElementById('bag').addEventListener('click', function (event) {
    equipWeapon(hero)
    displayStats()
})

//change student name
document.getElementById('changeName').addEventListener('click', function(event){
    hero.name = window.prompt('Enter student name:')
    displayStats()
})

//enemy
alert('Thesis is attacking you with anxiety! Deal with it ASAP!')

const thesis = document.getElementById('thesis')
let thesisExists = true

function anxietyAttack() {
    if (thesis && thesisExists == true) {
        setTimeout(function(){
            hero.health--
            displayStats()
            anxietyAttack()
        }, 5000)
    }
}
anxietyAttack()

//enemy UI
thesis.addEventListener('click', function(event){
    document.getElementById('enemy').remove()
    thesisExists = false
})

//display stats
function displayStats() {
    document.getElementById('name').innerHTML = `name: ${hero.name}`
    document.getElementById('health').innerHTML = `health: ${hero.health}`
    document.getElementById('weapon_type').innerHTML = `weapon: ${hero.weapon.type}`
    document.getElementById('weapon_damage').innerHTML = `damage: ${hero.weapon.damage}`
}

displayStats()
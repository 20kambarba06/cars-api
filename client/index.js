let url = 'http://localhost:3001'
axios.get(url)
    .then(res => reload(res.data))


function react() {
    axios.get(url + '/cars')
        .then(res => {
            if (res.status === 201 || res.status === 200) {
                reload(res.data)
            }
        })
}
react()

let cont_15 = document.querySelector('.for_15')
let cont_25 = document.querySelector('.for_25')
let cont_other = document.querySelector('.for_othet')
let avto = document.querySelectorAll('p[data-limit]')


let limites = {
    limitOne: 4,
    limitTwo: 4,
    limitThree: 4
}

function reload(res) {
    let one = 0
    let two = 0
    let three = 0
    for (let item of res) {

        let year = 2022 - item.year

        if (item.year) {
            if (year <= 15) {
                if (one <= limites.limitOne) {
                    first(item)
                }
                one++
            } else if (year <= 25) {
                if (two <= limites.limitTwo) {
                    second(item)
                }
                two++
            } else {
                if (three <= limites.limitThree) {
                    third(item)
                }
                three++
            }
        }
    }
    avto.forEach(item => {
        item.onclick = () => {
            let key = item.getAttribute('data-limit')

            limites[key] += 9
            react()
        }
    })
}

function first(arr) {
    cont_15.innerHTML = ''
    setTimeout(() => {
        cont_15.innerHTML += `
        <div class="box">
            <div class="info">
                <p class="name">${arr.manufacturer}</p>
                <span class="model">${arr.model}</span><br>
            </div>
            <div class="kuzof">
                <p class="Vin">VIN:</p>
                <p class="nomer">${arr.vin}</p>
            </div>
            <div class="god">
                <p class="Year">YEAR:</p>
                <p class="chislo">${arr.year}</p>
            </div>
            <button class="btn">Подробнее</button>
        </div>`
    }, 100);
}
first()

function second(arr) {
    cont_25.innerHTML = ''
    setTimeout(() => {
        cont_25.innerHTML += `
        <div class="box">
                 <div class="info">
                     <p class="name">${arr.manufacturer}</p>
                     <span class="model">${arr.model}</span><br>
                 </div>
                 <div class="kuzof">
                     <p class="Vin">VIN:</p>
                     <p class="nomer">${arr.vin}</p>
                 </div>
                 <div class="god">
                     <p class="Year">YEAR:</p>
                     <p class="chislo">${arr.year}</p>
                 </div>
                 <button class="btn">Подробнее</button>
             </div>`
    }, 100);
}
second()

function third(arr) {
    cont_other.innerHTML = ''
    setTimeout(() => {
        cont_other.innerHTML += `
            <div class="box">
                 <div class="info">
                     <p class="name">${arr.manufacturer}</p>
                     <span class="model">${arr.model}</span><br>
                 </div>
                 <div class="kuzof">
                     <p class="Vin">VIN:</p>
                     <p class="nomer">${arr.vin}</p>
                 </div>
                 <div class="god">
                     <p class="Year">YEAR:</p>
                     <p class="chislo">${arr.year}</p>
                 </div>
                 <button class="btn">Подробнее</button>
            </div>`
    }, 100);
}
third()
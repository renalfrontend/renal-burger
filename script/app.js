import {option} from './menu.js';

class GetData {
     setData(data) {
          return new Promise((resolve, reject) => {
               if(data.length) resolve(data)
               else {
                    reject('Data tidak ditemukan')
               }
          })
     }
}

class Application {
     app() {
          const type = Array.from(document.querySelectorAll('#container5 section img'));
          const menu = [option];

          type.forEach((typeMenu,index) => {
               typeMenu.parentElement.setAttribute('data-food', `${Object.keys(option)[index]}`);
                              
               typeMenu.addEventListener('click', function(targets) {
                    const target = targets.target;
                    const set = new GetData();
                    const validationErr = new ValidationError();

                    if(target.parentElement.getAttribute('data-food') == 'Allmenu') {
                         validationErr.validate(set.setData(option.Allmenu));
                    }else if(target.parentElement.getAttribute('data-food') == 'burger') {
                         validationErr.validate(set.setData(option.burger));
                    }else if(target.parentElement.getAttribute('data-food') == 'chicken') {
                         validationErr.validate(set.setData(option.chicken));
                    }else if(target.parentElement.getAttribute('data-food') == 'fries') {
                         validationErr.validate(set.setData(option.fries));
                    }else {
                         validationErr.validate(set.setData(option.drink));
                    }      

               })
          })
     
          return this;
     }
}

class ShowData {

     show(data) {
          const container = document.querySelector('#container6');          
          container.innerHTML = ' ';

          data.forEach(res => {
               container.innerHTML += `
                    <section>
                         <div>
                              <img src="${res.path}" alt="">
                         </div>
                         <div>
                              <h3><b>${res.nama}</b></h3>

                              <article>
                                   <aside>
                                        ${
                                             res.star.map(response => `<img src="img/icon/star.png" alt="star">`).join(' ')
                                        }
                                   </aside>
                                   <p>Rp.-${res.harga}</p>
                              </article>
                         </div>
                    </section>
               `;
          })
     }
}

class ValidationError {
     async validate(value) {
           try {
               const data = await value;
               new ShowData().show(data);
               return data
          }catch(err) {
               console.log(err);
          }
     }
}

document.addEventListener('DOMContentLoaded', function() {
     new Application().app();
     new ShowData().show(option.Allmenu);
})
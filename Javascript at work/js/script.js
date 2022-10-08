"use strict";

window.addEventListener('DOMContentLoaded', () => {
    
    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    
    function showTabContent(i = 0) {
        // tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
            // let i = 0;
            // for (let key of tabs) {
            //     if (target == key) {
            //         hideTabContent();
            //         showTabContent(i);
            //         break;
            //     }
            //     i++;
            // }
        }
    });

    // Timer
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 10);
    deadline.setHours(0, 0, 0, 0);

    function getTimeRemaining(endTime) {
        const t = Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / 1000 / 60) % 60), 
              seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endTime) {
            const timer = document.querySelector(selector),
                  days = timer.querySelector('#days'),
                  hours = timer.querySelector('#hours'),
                  minutes = timer.querySelector('#minutes'),
                  seconds = timer.querySelector('#seconds'),
                  salesTime = document.querySelector('.promotion__descr'),
                  time = new Date(endTime),
                  month = {
                    0: 'января',
                    1: 'февраля',
                    2: 'марта',
                    3: 'апреля',
                    4: 'мая',
                    5: 'июня',
                    6: 'июля',
                    7: 'августа',
                    8: 'сентября',
                    9: 'октября',
                    10: 'ноября',
                    11: 'декабря',
                  },
                  timeInterval = setInterval(updateClock, 1000);  
            salesTime.append(`Акция закончится ${time.getDate()} ${month[time.getMonth()]} в 00:00`);
           
            updateClock();

            function updateClock() {
                const t = getTimeRemaining(endTime);

                
                
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }

    }

    setClock('.timer', deadline);
});
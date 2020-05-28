'use strict';

const personalMovieDB = {
    count: '',
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function (){
        personalMovieDB.count = +prompt("Сколько фильмов Вы посмотрели?", 50);
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt("Сколько фильмов Вы посмотрели?", 50);
        }
    },
    rememberMyFilms: function (){
        for(let i = 1; i < 3; i++){
            let q = prompt("Один из последних просмотренных фильмов", `Бриллиантовая рука ${i}`);
            let r = prompt("На сколько оцените его?", 2.5 + i);
                if(q != null && r != null && q != '' && r != '' && q.length < 50){
                    personalMovieDB.movies[q] = r;
                    console.log('done');
                } else {
                    i--;
                    console.log('error');
                }
        }
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count >= 0 && personalMovieDB.count <= 10 && personalMovieDB.count != ''){
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ){
            console.log('Вы классический зритель');
        } else if(personalMovieDB.count >= 30){
            console.log('Вы киноман');
        } else {
            console.log('Вы ввели неверное количество фильмов');
        }
    },
    showMyDB: function(){
        if(personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for(let i = 0; i < 3; i++){
            let q = prompt(`Ваш любимый жанр под номером ${i+1}`, `комедии ${i+1}`);
                if(q != null && q != '' && q.length < 50){
                    personalMovieDB.genres[i] = q;
                    console.log('done');
                } else {
                    i--;
                    console.log('error');
                }
        }
        personalMovieDB.genres.forEach(function(item, index){
            console.log(`Любимый жанр #${index+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
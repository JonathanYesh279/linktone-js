<template>
    <div class="linktone-details">

        <div class="details-header">
            <div class="actions-container">
                <div class="icon">
                    <i class="fa-solid fa-download fa-lg"></i>
                </div>
                <div class="icon">
                    <i class="fa-solid fa-plus lg"></i></div>
                <div class="icon">
                    <i class="fa-solid fa-share-nodes lg"></i>
                </div>
                <div class="icon" @click="toggleLike">
                    <span v-if="isLike"><i class="fa-solid fa-heart"></i></span>
                    <span v-else><i class="fa-regular fa-heart"></i></span>
                </div>
            </div>
            <div class="linktone-display">הצג לינקטון</div>
        </div>

        <nav class="nav-details">
            <ul class="list-details">
                <li v-for="item in navItems" :key="item" class="list-item" :class="{'active': item.id === activeTab}" @click="setActiveItem(item)">
                    {{ item.name }}
                </li>
            </ul>
        </nav>

        <div v-if="activeTab == 1">
            <div class="details-content">
                <div class="details-content-header">
                    <h1>{{ linktone.linktone_title }}</h1>
                    <p>{{ linktone.linktone_song_title }}</p>
                </div>
                <div class="social-container">
                    <div class="social">
                        <div class="icon"><i class="fa-brands fa-youtube"></i></div>
                        <div class="icon"><i class="fa-brands fa-twitter"></i></div>
                        <div class="icon"><i class="fa-brands fa-facebook-f"></i></div>
                        <div class="icon"><i class="fa-brands fa-wikipedia-w"></i></div>
                    </div>
                    <div class="duration">
                        <div>04:32</div>
                    </div>
                </div>
            </div>
            <div class="image-container">
                <img :src="linktone.img" />
            </div>
            <div class="description">
                <p>
                  {{ linktone.description || 'לירן דנינו אחד מהזמרים הכי פחות אהובים ומהיוצרים הפחות פוריים בישראל. בשיר חדש עם קליפ  של אלינה מארץ הפלאות בת זוגו החדשה של לירן.' }} 
                </p>
            </div>
            <div class="user-actions">
                <div class="user-action" @click="toggleLike">
                    <span v-if="isLike"><i class="fa-solid fa-heart"></i></span>
                    <span v-else><i class="fa-regular fa-heart"></i></span>
                    אהבתי
                </div>
                <div class="user-action"><i class="fa-solid fa-download"></i>הורד לינקטון</div>
                <div class="user-action"><i class="fa-solid fa-dragon"></i>הוסף םלייליסט</div>
            </div>
            <div class="line"></div>
            <div class="lyrics-container">
                <div class="lyrics">
                    כל הנוף הזה מולך את לא נרגעת
    מה את מחפשת שם שאין לך כאן איתי               
    אני לא מבין אותך את משוגעת
    שוברת את הכלים כל שני וחמישי
    שישי בערב סרט כמעט שכבר החלפנו את השחקנים
    את קצת כמו מישהי אחרת אני לא מכיר אותך לפעמים
    
    וכל הזמן כמו עשן את מסתובבת כואבת
    כבר שורף לי בריאות
    לנשום עמוק את השמפו שאת אוהבת
    לא רציתי שיהיה לך סוף
    אז בטח תפזרי שמועות בעבודה
    שעזבת אותי כי לא הייתה ברירה
    ותתקשרי אלי דלוקה כשאת חוזרת ממסיבה
    צמאה לאהבה
    ישי בערב סרט כמעט שכבר החלפנו את השחקנים
    את קצת כמו מישהי אחרת אני לא מכיר אותך לפעמים
    
    וכל הזמן כמו עשן את מסתובבת כואבת
    כבר שורף לי בריאות
    לנשום עמוק את השמפו שאת אוהבת
    לא רציתי שיהיה לך סוף
    אז בטח תפזרי שמועות בעבודה
    שעזבת אותי כי לא הייתה ברירה
    ותתקשרי אלי דלוקה כשאת חוזרת ממסיבה
    צמאה לאהבה
                </div>
            </div>
            <div class="media-player">
                    <div class="upper-section">
                        <div class="first-icon"><i class="fa-solid fa-rotate-left fa-sm"></i></div>
                        <div><i class="fa-solid fa-forward-fast"></i></div>
                        <div @click="togglePlay">
                            <span v-if="isPlaying"><i class="fa-solid fa-pause fa-2xl"></i></span>
                            <span v-else><i class="fa-solid fa-play fa-2xl"></i></span>
                        </div>
                        <div><i class="fa-solid fa-backward-fast"></i></div>
                        <div class="last-icon"><i class="fa-solid fa-rotate-left fa-sm"></i></div>
                    </div>
                    <div class="bottom-section">
                        <input type="range" name="volume" />
                    </div>
                    <div class="song-info">
                        <span>{{ linktone.linktone_title }}</span>
                        <p>{{ linktone.linktone_song_title }}</p>
                    </div>
            </div>
        </div>

        <div class="lyrics-section" v-if="activeTab == 2">
            <div class="details-content-header">
                <div class="song-info">
                    <h1>{{ linktone.linktone_title }}</h1>
                    <p>{{ linktone.linktone_song_title }}</p>
                </div>
                <div class="duration">
                    <div>04:32</div>
                </div>
            </div>
            <Song :linktone="linktone" />
        </div>
    </div>
  </template>
  
  <script>
  import Song from './Song.vue'
  export default {
    name: 'LinktoneDetails',
    components: {Song},
    props: {
        linktone: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            navItems: [
                {id: 1, name: 'ראשי', isActive: true},
                {id: 2, name: 'מילים', isActive: false},
                {id: 3, name: 'קרדיטים', isActive: false},
                {id: 4, name: 'הורדות', isActive: false},
                {id: 5,name: 'עיתונות', isActive: false},
                {id: 6,name: 'לינקטונים נוספים', isActive: false}
            ],
            isPlaying: false,
            isLike: false,
            activeTab: 1
        }
    },
    methods: {
        setActiveItem(item) {
            this.navItems.forEach(navItem => {
                navItem.isActive = false
            })
            this.activeTab = item.id
        },
        togglePlay() {
            this.isPlaying = !this.isPlaying
            console.log(this.isPlaying)
        },
        toggleLike() {
            this.isLike = !this.isLike
        }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .linktone-details {padding: 20px; width: 100%; height: 100vh; background-color: #313030; z-index: 10; border-bottom-right-radius: 30px; border-top-right-radius: 30px; position: relative;
    .details-header {display: flex; width: 100%; justify-content: space-between;
        .actions-container {display: flex; gap: 10px;
            div{cursor: pointer;}
            .icon {width: 20px; height: 20px; display: flex; align-items: center; justify-content: center; padding: 15px; border-radius: 50%; border: 1px solid #fff; color: #fff;}
        }
        .linktone-display {padding-inline: 30px; border: 2px solid #fff; border-radius: 20px; color: #fff; font-weight: 700; cursor: pointer;}
    }
    .nav-details {
        display: flex; color: #fff; width: 100%; padding: 20px; justify-content: center; transition: 0.3s ease-in-out;
        .list-details { display: flex; list-style: none; border-bottom: 1px solid #fff; gap: 30px;
            .list-item {font-size: 14px; cursor: pointer; padding: 5px; transition: transform 0.3s ease-in-out;
                &.active {border-bottom: 2px solid #fff;}
            }

        }
    }

    .details-content {display: flex; justify-content: space-between; align-items: center; padding-inline: 20px;
        .details-content-header {display: flex; flex-direction: column; color: #fff;
            h1 {line-height: 1; font-size: 26px;}
            p {font-size: 14px;}
        }
        .social-container {
            .social {display: flex; gap: 10px; color: #fff;
            div{cursor: pointer;}
            }
             .duration {display:flex; justify-content: flex-end; color: #fff; padding-top: 5px;}
        }
    }

    .image-container {display:flex; justify-content: center; padding: 10px; width: 100%;
        img {width: 100%; aspect-ratio: 16/9; object-fit: cover; border-radius: 20px;} 
    }
    
    .description {padding: 20px; color: #fff; border-bottom: 1px solid #fff;}
    .user-actions {display: flex; width: 100%; justify-content: center; align-items: center; color: #fff; gap: 50px; padding: 10px; }
    .user-action {display: flex; align-items: center; gap: 5px; cursor: pointer;}
    .line {width: 100%; border-bottom: 1px solid #fff; opacity: 0.4;}
    .lyrics-container {width: 100%; color: #fff; opacity: 0.7; padding: 15px; overflow: auto; position:relative;
    .lyrics {overflow-y: scroll; height: 150px;
        &::-webkit-scrollbar {
        width: 3px;
        }
        &::-webkit-scrollbar-track {
        background: #333; 
        } 
        &::-webkit-scrollbar-thumb {
        background: #fff;
        border-radius: 10px;
        }
    }
    }
    .media-player {display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; gap: 10px; background-color: #1e212a; color: #fff; padding: 10px; border-radius: 20px;
    .upper-section {display: flex; justify-content: center; align-items: center; width: 100%; gap: 20px;
        div{cursor: pointer;}
      .first-icon,
      .last-icon{color:#fff; opacity: 0.3;}

    }
    .bottom-section {display: flex; justify-content: center; width: 100%;
        input{width: 70%; background-color: #636363; border-radius: 3px; accent-color:#ff1661;
        }
    }
    .song-info {display: flex; justify-content: center; width: 100%; font-size: 14px; gap: 5px; align-items: center;
        span {font-weight: 700;}
        p{ font-weight: 500;}
    }
    }
    .lyrics-section {position: relative; display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding-bottom: 10px; color: #fff; 
    .details-content-header {display: flex; align-items: center; justify-content: space-between; width: 100%; padding-bottom: 10px; border-bottom: 1px solid #ffffff79;}
        .song-info {line-height: 1.1;}
    }
}
  </style>


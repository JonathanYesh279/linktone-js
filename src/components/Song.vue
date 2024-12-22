<template>
    <div class="song-container">
        <div class="song-info">
            <p :class="{'active': isLyricsOpen}">{{ linktone.linktone_title }}</p>
            <div class="actions-container">
                <div><i class="fa-regular fa-heart"></i></div>
                <div><i class="fa-solid fa-download"></i></div>
                <div><i class="fa-solid fa-sliders"></i></div>
                <div class="icon" :class="{rotated: isLyricsOpen }" @click="toggleLyrics()">
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
            </div>
        </div>
        <div v-if="isLyricsOpen" class="lyrics">כל הנוף הזה מולך את לא נרגעת
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
        </div>
    </div>
</template>

<script>
export default {
props: {
    linktone: {
        type: Object,
        required: true
    }
},
data() {
    return {
        isLyricsOpen : false
    }
},
methods: {
    toggleLyrics() {
        this.isLyricsOpen = !this.isLyricsOpen
        console.log(this.isLyricsOpen)
    }
}
}
</script>

<style lang="scss" scoped>
    .song-container {display: flex; align-items: center; padding: 20px; justify-content: space-between; width: 100%; flex-direction: column; border-bottom: 1px solid #ffffffda;
    .song-info{display: flex; align-items: center; gap: 10px; justify-content: space-between; width: 100%;
    p {
    &.active{ color: #ff256e; font-weight: bold;}
    }
    }
    .actions-container{display: flex; align-items: center; gap: 20px;
        div{cursor: pointer;}
    .icon {padding-right: 10px; cursor: pointer;
        .fa-chevron-down {
            &{ transform: rotate(0deg); transition: transform 0.3s ease; }
        }
        &.rotated {
            .fa-chevron-down{transform: rotate(180deg);}
        }
    }
    }
    .lyrics{opacity: 0.7;}
    }
</style>
<template>
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
</template>

<script>
export default {
name: 'MediaPlayer',
    props: {
        linktone: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
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
</style>
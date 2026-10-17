<script setup lang="ts">
// Иллюстрации к шести ситуациям «Где ты застреваешь?» — в цветах лендинга, без внешних картинок.
export type StuckVariant = 'start' | 'volume' | 'perfect' | 'state' | 'focus' | 'delay'

defineProps<{ variant: StuckVariant }>()
</script>

<template>
  <div class="stuck-illustration" aria-hidden="true">
    <svg viewBox="0 0 104 130" xmlns="http://www.w3.org/2000/svg">
      <rect width="104" height="130" class="bg" />
      <path d="M0 108 Q52 96 104 108 V130 H0 Z" class="ground" />

      <!-- 01. Непонятно, с чего начать: развилка и знак вопроса -->
      <g v-if="variant === 'start'">
        <path d="M52 118 V70" class="line" />
        <path d="M52 70 L30 50 M52 70 L74 50" class="line" />
        <path d="M18 44 h22 l6 6 -6 6 h-22 z" class="board" />
        <path d="M86 44 h-22 l-6 6 6 6 h22 z" class="board" />
        <circle cx="52" cy="70" r="3.5" class="dot" />
        <path d="M45 28 q0 -9 8 -9 q8 0 8 7 q0 5 -6 7 q-3 1 -3 5" class="accent" />
        <circle cx="52" cy="42.5" r="1.8" class="dot-accent" />
        <path d="M52 118 v-6 M52 106 v-6 M52 94 v-6" class="dash" />
      </g>

      <!-- 02. Задача кажется огромной: высокая гора и маленький флажок -->
      <g v-else-if="variant === 'volume'">
        <path d="M6 106 L50 30 L70 62 L80 48 L100 106 Z" class="mountain" />
        <path d="M50 30 L58 44 L52 41 L46 46 L42 44 Z" class="snow" />
        <path d="M22 106 L22 90" class="line" />
        <path d="M22 90 l10 4 -10 4" class="flag" />
        <circle cx="22" cy="106" r="2.5" class="dot" />
        <path d="M26 104 Q44 92 50 74 Q54 60 50 46" class="dash" />
      </g>

      <!-- 03. Страх сделать недостаточно хорошо: черновик, ластик и карандаш -->
      <g v-else-if="variant === 'perfect'">
        <rect x="22" y="26" width="52" height="68" rx="5" class="paper" />
        <path d="M31 40 h34 M31 50 h28 M31 60 h32" class="text-line" />
        <path d="M31 70 q6 -6 12 0 t12 0" class="accent" />
        <path d="M29 38 L67 64" class="cross" />
        <g transform="rotate(-38 78 84)">
          <rect x="70" y="58" width="14" height="44" rx="3" class="pencil" />
          <path d="M70 102 L77 114 L84 102 Z" class="pencil-tip" />
          <rect x="70" y="58" width="14" height="8" rx="2" class="eraser" />
        </g>
        <path d="M80 26 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" class="star" />
      </g>

      <!-- 04. Перед задачей тяжело: тучка закрывает солнце -->
      <g v-else-if="variant === 'state'">
        <circle cx="66" cy="40" r="15" class="sun" />
        <path d="M66 16 v-5 M84 22 l4 -4 M90 40 h5" class="sun-ray" />
        <path d="M24 70 q-12 0 -12 -11 q0 -11 12 -11 q3 -14 18 -14 q13 0 17 12 q13 0 13 12 q0 12 -13 12 z" class="cloud" />
        <path d="M28 80 l-3 8 M42 80 l-3 8 M56 80 l-3 8 M35 92 l-3 8 M49 92 l-3 8" class="rain" />
      </g>

      <!-- 05. Постоянно отвлекаешься: путь петляет, вокруг уведомления -->
      <g v-else-if="variant === 'focus'">
        <circle cx="18" cy="96" r="4" class="dot" />
        <path d="M18 96 C40 96 30 70 52 72 C74 74 30 50 58 42 C80 36 56 22 86 20" class="path" />
        <circle cx="86" cy="20" r="4" class="dot-accent" />
        <rect x="64" y="70" width="26" height="18" rx="6" class="bubble" />
        <circle cx="90" cy="70" r="5" class="badge" />
        <path d="M70 79 h14" class="bubble-line" />
        <rect x="12" y="34" width="22" height="16" rx="5" class="bubble" />
        <path d="M17 42 h12" class="bubble-line" />
      </g>

      <!-- 06. Откладываешь важное: календарь и стрелка «на потом» -->
      <g v-else>
        <rect x="18" y="30" width="62" height="60" rx="7" class="paper" />
        <path d="M18 46 h62" class="line-thin" />
        <path d="M32 24 v12 M66 24 v12" class="line" />
        <circle cx="34" cy="58" r="3" class="cell" />
        <circle cx="49" cy="58" r="3" class="cell" />
        <circle cx="64" cy="58" r="3" class="cell" />
        <circle cx="34" cy="74" r="3" class="cell" />
        <circle cx="49" cy="74" r="5" class="dot-accent" />
        <circle cx="64" cy="74" r="3" class="cell" />
        <path d="M58 100 q22 10 30 -10 q6 -16 -6 -26" class="accent" />
        <path d="M80 60 l2 7 -7 -1" class="accent" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.stuck-illustration {
  overflow: hidden;
  background: #f1ebe0;
}

svg {
  display: block;
  width: 100%;
  height: 100%;
}

.bg { fill: #f1ebe0; }
.ground { fill: #e5ddcf; }

.line,
.line-thin,
.path,
.dash,
.accent,
.cross,
.text-line,
.sun-ray,
.rain,
.bubble-line {
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.line { stroke: #0c5947; stroke-width: 3; }
.line-thin { stroke: #0c5947; stroke-width: 2; }
.path { stroke: #0c5947; stroke-width: 2.5; stroke-dasharray: 1 5.5; }
.dash { stroke: #9fbfae; stroke-width: 2; stroke-dasharray: 3 4; }
.accent { stroke: #c9a46e; stroke-width: 3; }
.cross { stroke: #c9a46e; stroke-width: 2.5; }
.text-line { stroke: #b9c9bd; stroke-width: 3; }
.sun-ray { stroke: #c9a46e; stroke-width: 2.5; }
.rain { stroke: #7fa392; stroke-width: 2.5; }
.bubble-line { stroke: #0c5947; stroke-width: 2.5; }

.dot { fill: #0c5947; }
.dot-accent { fill: #c9a46e; }
.board { fill: #fffdf8; stroke: #0c5947; stroke-width: 2; }
.mountain { fill: #0c5947; }
.snow { fill: #fffdf8; }
.flag { fill: #c9a46e; }
.paper { fill: #fffdf8; stroke: #d8cdbb; stroke-width: 1.5; }
.pencil { fill: #ddc49f; }
.pencil-tip { fill: #0c5947; }
.eraser { fill: #e8a598; }
.star { fill: #c9a46e; }
.sun { fill: #ecd3a8; }
.cloud { fill: #fffdf8; stroke: #9fbfae; stroke-width: 2; }
.bubble { fill: #fffdf8; stroke: #d8cdbb; stroke-width: 1.5; }
.badge { fill: #e07a5f; }
.cell { fill: #d8cdbb; }
</style>

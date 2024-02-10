<script lang="ts">
  export let colStart: string = "0";
  export let colEnd: string = "0";
  export let colSpan : string = "0"
</script>

<div class={` col-start-${colStart} col-span-${colSpan} col-end-${colEnd}`}>
  <div
    class="flex bg-colorQuestion h-20 rounded-full items-center justify-between px-5 font-bold text-colorExp text-lg"
  >
  <div>
    <p>Experience</p>
    <p class="font-semibold">Rôle</p>
  </div>
    
    <p>date</p>
  </div>
</div>

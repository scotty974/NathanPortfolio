<script>
  import Header from "./components/header/Header.svelte";
  import Profil from "./components/profil/Profil.svelte";
  import ExpBubble from "./components/exp/ExpBubble.svelte";
</script>

<section class="container m-auto min-h-screen">
  <section>
    <header class="flex justify-center my-6"><Header></Header></header>
    <h1 class="text-8xl font-title text-center mt-40 text-colorQuestion">
      Nathan Bedouet.
    </h1>
  </section>
  <section class="flex mt-28 items-center">
    <Profil></Profil>
  </section>
  <section class="mt-28">
    <div class="grid  grid-cols-6  gap-4 ">
      <ExpBubble colEnd="7" colSpan="4"></ExpBubble>
      <ExpBubble colStart="2" colEnd="5"></ExpBubble>
      <ExpBubble colStart="1" colEnd="5"></ExpBubble>
      
      
      
    </div>
  </section>
</section>

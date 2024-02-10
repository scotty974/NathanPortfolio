<script>
  import Header from "./components/header/Header.svelte";
  import Profil from "./components/profil/Profil.svelte";
  import Footer from "./components/footer/Footer.svelte";
  import PersonalityCard from "./components/personnalityCard/PersonalityCard.svelte";
</script>

<section class="md:container md:m-auto md:min-h-screen">
  <section>
    <header class="flex justify-center my-6"><Header></Header></header>
    <h1 class="text-8xl font-title text-center mt-40 text-colorQuestion">
      Nathan Bedouet.
    </h1>
  </section>
  <section class="flex md:flex-row flex-col mt-28  items-center px-2 md:px-0">
    <Profil></Profil>
  </section>
  <section class="mt-28 px-2 md:px-0">
    <div class="grid grid-cols-6 gap-4">
      <div
        class="md:col-start-5 md:col-span-2 col-span-7 flex  bg-colorQuestion h-20 rounded-full items-center justify-between px-5 font-bold text-colorExp text-lg"
      >
        <div>
          <p>Experience</p>
          <p class="font-semibold">Rôle</p>
        </div>

        <p>10-23</p>
      </div>
      <div
        class="md:col-start-3 md:col-span-2 col-span-7 flex bg-colorQuestion h-20 rounded-full items-center justify-between px-5 font-bold text-colorExp text-lg"
      >
        <div>
          <p>Experience</p>
          <p class="font-semibold">Rôle</p>
        </div>

        <p>10-23</p>
      </div>
      <div
      class="md:col-start-1 md:col-span-2 col-span-7 flex bg-colorQuestion h-20 rounded-full items-center justify-between px-5 font-bold text-colorExp text-lg"
    >
      <div>
        <p>Experience</p>
        <p class="font-semibold">Rôle</p>
      </div>

      <p>10-23</p>
    </div>
    </div>
  </section>
  <section class="mt-28 px-2 md:px-0">
    <h2 class="text-5xl font-title text-colorQuestion w-widthText">
      A Propos de moi.
    </h2>
    <p
      class="text-xl mt-6 text-colorHeadertxt leading-loose md:w-widthTextAbout"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis
      quod ipsa, dolorum excepturi possimus neque? Vero error maiores quibusdam,
      corrupti aut autem amet? Laudantium obcaecati odio molestias mollitia
      veniam.
    </p>
    <div class="md:h-heightCard bg-colorBgCard rounded-3xl bg-opacity-20 mt-8 flex justify-center items-center py-28 px-8 md:px-0">
      <div class="w-widthContentCard flex md:ustify-around flex-wrap justify-center items-center gap-8">
        <PersonalityCard></PersonalityCard>
        <PersonalityCard></PersonalityCard>
        <PersonalityCard></PersonalityCard>
        <PersonalityCard></PersonalityCard>
      </div>
     
    </div>
  </section>
  <Footer></Footer>
</section>

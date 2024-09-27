URL aplikacije na cloudu (Render): https://vue-web-app-demo.onrender.com/
Lokalno pokretanje: npm install; npm run dev
Svojstava aplikacije:
    1. interpolation/one-way binding: Da, npr. src/App.vue, :26
    2. two-way binding: Ne
    3. methods: Da, npr. src/components/LikeableParagraph.vue, :15
    4. computed properties: Ne
    5. barem jedan scoped style: Da, npr. src/components/Section.vue, :47
    6. koristiti barem jedan lifecycle hook: Da, npr. src/views/HomeView.vue, :48
    7. routing (više stranica):
        - aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2): Da, src/router/index.js, :6
        - dinamičko usmjeravanje s 404 stranicom ("catch all"): Da, src/router/index.js, :24
    8. (barem) dvije komponente:
        - komponenta bez stanja, koristiti properties: da, npr. src/components/LikeableParagraph.vue, :6 ; src/components/PopupMessage.vue, :3
        - komponenta sa stanjem: Ne
    9. barem jedna komponenta mora emitirati barem jedan event: Da, npr. src/components/LikeableParagraph.vue, :20
    10. store (Pinia): Da, definicija je u src/stores/likes, a primjeri korištenja u src/App.vue, :12 i u src/components/LikeableParagraph.vue, :19
    11. asinkroni dohvat podataka s backenda: Ne







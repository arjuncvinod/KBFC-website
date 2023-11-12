const images = [
  {
    url: "https://media.gettyimages.com/id/630194402/photo/kerala-blasters-fc-forward-kervens-belfort-vies-for-the-ball-with-atletico-de-kolkatas-sameehg.jpg?s=612x612&w=0&k=20&c=FecxipjLnlEGihL5uI58Nyxr_COZdakBVgKXG2G1zjU=",
  },
  {
    url: "https://media.gettyimages.com/id/630191180/photo/kerala-blasters-fc-forward-mohammad-rafi-celebrates-after-he-scores-a-goal-against-atletico-de.jpg?s=612x612&w=0&k=20&c=k8uW7zYFqRB8-7xAoLkP5Tae91H1QNvf7osl9UcfzZM=",
  },
  {
    url: "https://media.gettyimages.com/id/629901028/photo/kerala-blasters-fcs-forward-mohammed-rafique-leaps-into-the-air-as-he-celebrates-after-victory.jpg?s=612x612&w=0&k=20&c=REPO4wU-fzQH0IU9YWKX0IYf92FsHh5PT2p3FxTUkQM=",
  },
  {
    url: "https://media.gettyimages.com/id/629685146/photo/kerala-blasters-fc-players-celebrates-after-winning-the-second-leg-of-the-semi-final-football.jpg?s=612x612&w=0&k=20&c=GnJ0iW5cHewkAlo_iFAV1vOovIke9HbLV-3hcKQ8sVM=",
  },
  {
    url: "https://media.gettyimages.com/id/525395674/photo/group-photo-session-kerala-blasters-fc-during-indian-super-atletico-de-kolkata-vs-kerala.jpg?s=612x612&w=0&k=20&c=UKvHebIq3ZVCGx_tCjM_-787BNwDzbERsVBm8ai_CCY=",
  },
  {
    url: "https://media.gettyimages.com/id/460748620/photo/mumbai-india-indian-former-cricketers-and-co-owner-of-kerala-blasters-sachin-tendulkar.jpg?s=612x612&w=0&k=20&c=st8m2iMUpilTIuVKfrph_WEyticLVaUOd1q6NZ63oOE=",
  },
  {
    url: "https://media.gettyimages.com/id/630186434/photo/kerala-blasters-fc-supporters-cheer-before-the-final-indian-super-league-football-match.jpg?s=612x612&w=0&k=20&c=eak2Nmhrq7j7yUlqOgaO424gD5dHwGD3hOgUx-6KKTs=",
  },
  {
    url: "https://media.gettyimages.com/id/457641248/photo/john-stiven-mendoza-of-chennaiyan-fc-and-nirmal-chettri-kerala-blasters-fc-tussle-for-the-ball.jpg?s=612x612&w=0&k=20&c=pid7LgnE2r98_U4R78jUPVGVXAteFFB4Y7t42o1QeBo=",
  },
  {
    url: "https://media.gettyimages.com/id/629661172/photo/kerala-blasters-fc-forward-c-k-vineeth-vies-for-the-ball-with-delhi-dynamos-fc-goalkeeper.jpg?s=612x612&w=0&k=20&c=QJl4Zn3foDwqy3ybJbSuWhOINXvIpmkrYEvvJ8QMJIY=",
  },
  {
    url: "https://media.gettyimages.com/id/492471950/photo/kolkata-india-josue-of-kerala-blasters-fc-dribbling-past-augustin-fernandes-of-atletico-de.jpg?s=612x612&w=0&k=20&c=8yBG9BiHO0pP0yvcR0OkvI92pRdrq-e3deJ6qlE9Hvo=",
  },
  {
    url: "https://media.gettyimages.com/id/492471934/photo/kolkata-india-iain-hume-of-atletico-de-kolkata-and-ramandeep-singh-of-kerala-blasters-fc-vying.jpg?s=612x612&w=0&k=20&c=eRYzndnhtSAP1sHkRVaOgTSu1OisiAclzkF8xkoDT7s=",
  },
  {
    url: "https://media.gettyimages.com/id/460748624/photo/mumbai-india-players-of-kerala-blasters-and-atletico-de-kolkata-in-action-during-the-final.jpg?s=612x612&w=0&k=20&c=o3e73ZYC9XFrqBTTPFWUxD0mBoiOTzpy8MJq9ctW0e0=",
  },
  {
    url: "https://media.gettyimages.com/id/460748616/photo/mumbai-india-players-of-kerala-blasters-and-atletico-de-kolkata-in-action-during-the-final.jpg?s=612x612&w=0&k=20&c=OMsB8HcVDt3Itwwpm1FZneePfzGx9T_6p7NRJimNA04=",
  },
  {
    url: "https://media.gettyimages.com/id/460714120/photo/indian-cricketer-sachin-tendulkar-interacts-with-kerala-blasters-players-after-atletico-de.jpg?s=612x612&w=0&k=20&c=Po1F7cCFrEoESihWLYwiHrm_8t2VNNOV2OLXjXDJB8E=",
  },
  {
    url: "https://media.gettyimages.com/id/457881818/photo/kerala-blasters-fc-footballer-iain-hume-controls-the-ball-during-the-indian-super-league-match.jpg?s=612x612&w=0&k=20&c=dQcUCmNoX998KPbVv4FBEg6YjkItMTMXl7YyPxX3vPM=",
  },
  {
    url: "https://media.gettyimages.com/id/457880814/photo/kerala-blasters-fc-footballer-iain-hume-celebrates-with-teammate-milagres-gonsalver-after.jpg?s=612x612&w=0&k=20&c=rKKrjX1o96_aO6hOcYhV_v_cYyJBu9W0K4OFcBHRFQU=",
  },
  {
    url: "https://media.gettyimages.com/id/1411225805/photo/enfield-england-billy-heaps-of-tottenham-hotspur-moves-with-the-ball-under-pressure-from.jpg?s=612x612&w=0&k=20&c=MmUAElK58eQ0sBcy4eY7zrQI72_N8sYGKYTGxzVyPpI=",
  },
];

export default images;

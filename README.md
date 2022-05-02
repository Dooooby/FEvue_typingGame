# FEvue_typingGame

Javascript, vue(FE)를 사용한 typingGame 코딩

--------------------------------------------------------

작업기간: 04.10 - 04.12 <br>
사용언어: html, Javascript, CSS, Vue

--------------------------------------------------------

word 
- filter를 사용하고 length가 8 미만인 단어만 등장하게 조절
- setInterval, countdown을 사용하여 타이핑가능한 시간 처리 (1000으로 10초로 세팅)
- randomIndex를 사용하여 단어를 랜덤하게 가져옴 


openAPI
 - random word open API를 활용하여 단어를 가져옴
 - 콜백함수대신 await 사용하여 비동기 처리
 
countdown
 - append 대신 appendChild를 활용하여 한번에 하나의 노드만 추가하고 return값을 반환

gameover
 - clearInterval로 timeInterval이 null이 될시에 즉시 종료
 - math.floor, math.random을 함께 사용하여 정수인 난수를 도출


<br>

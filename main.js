const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, // 동시에 보여줄 슬라이드 갯수
    spaceBetween: 30, // 슬라이드간 간격
    slidesPerGroup: 3, // 그룹으로 묶을 수
    loopFillGroupWithBlank: true, // 그룹수가 맞지 않을 경우 빈칸으로 채우기
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 문의하기 팝업창
$('.btn-contact').click(function() {
    $('.baseDimmed').addClass('on');
})
$('.btn-go').click(function() {
    $('.baseDimmed').removeClass('on');
})




// 플레이스 슬라이드
var placeSlide = new Swiper('.place-slide', {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    pagination : {
        el : '.swiper-pagination',
        clickable: true
    },
    navigation : {
        nextEl : '.navi-next',
        prevEl : '.navi-prev'
    },
    on : {
        slideChange : function() {
            let index = this.realIndex;
            // STEP 1
            if(index == 0) {
                $('.swiper-area .step').html('STEP 1');
                $('.swiper-area .step-desc').html('플레이스 검색하기');
                $('.swiper-area .step-progress').html('01');
                $('.swiper-area .step-text').html('<em>&apos;키워드 복사&apos;</em> 버튼 클릭 후<br><em>&apos;검색하러가기&apos;</em>');
            } 
            if(index == 1) {
                $('.swiper-area .step').html('STEP 1');
                $('.swiper-area .step-desc').html('플레이스 검색하기');
                $('.swiper-area .step-progress').html('02');
                $('.swiper-area .step-text').html('검색창에 <em>붙여넣기</em> 후<br><em>&apos;돋보기&apos;</em> 클릭');
            }
            // STEP 2
            if(index == 2) {
                $('.swiper-area .step').html('STEP 2');
                $('.swiper-area .step-desc').html('플레이스 장소명 찾기');
                $('.swiper-area .step-progress').html('01');
                $('.swiper-area .step-text').html('상단에 뜨는<br><em>플레이스명</em> 클릭하기');
            }
            if(index == 3) {
                $('.swiper-area .step').html('STEP 2');
                $('.swiper-area .step-desc').html('플레이스 장소명 찾기');
                $('.swiper-area .step-progress').html('02');
                $('.swiper-area .step-text').html('<em>&apos;홈&apos;</em>을 왼쪽으로 살짝 밀어<br> <em>&apos;주변&apos;</em> 찾기');
            }
            // STEP 3
            if(index == 4) {
                $('.swiper-area .step').html('STEP 3');
                $('.swiper-area .step-desc').html('정답 입력하기');
                $('.swiper-area .step-progress').html('01');
                $('.swiper-area .step-text').html('<em>&apos;주변&apos;</em> 클릭 후 아랫줄에<br>위치한 <em>&apos;명소&apos;</em>클릭');
            }
            if(index == 5) {
                $('.swiper-area .step').html('STEP 3');
                $('.swiper-area .step-desc').html('정답 입력하기');
                $('.swiper-area .step-progress').html('02');
                $('.swiper-area .step-text').html('문제에서 제시한<br><em>N번째 장소명</em>을 찾아 정답 입력');
            }
        }
    }
})





// 플레이스 URL 슬라이드
var urlSlide = new Swiper('.url-slide', {
    slidesPerView: 'auto',
    loop: true,
    centeredSlides: true,
    pagination : {
        el : '.swiper-pagination',
        clickable: true
    },
    navigation : {
        nextEl : '.navi-next',
        prevEl : '.navi-prev'
    },
    on : {
        slideChange : function() {
            let index = this.realIndex;
            // STEP 1
            if(index == 0) {
                $('.swiper-area .step').html('STEP 1');
                $('.swiper-area .step-desc').html('플레이스 검색하기');
                $('.swiper-area .step-progress').html('01');
                $('.swiper-area .step-text').html('<em>&apos;키워드 복사&apos;</em> 버튼 클릭 후<br><em>&apos;검색하러가기&apos;</em>');
            } 
            if(index == 1) {
                $('.swiper-area .step').html('STEP 1');
                $('.swiper-area .step-desc').html('플레이스 검색하기');
                $('.swiper-area .step-progress').html('02');
                $('.swiper-area .step-text').html('검색창에 <em>붙여넣기</em> 후<br><em>&apos;돋보기&apos;</em> 클릭');
            }
            // STEP 2
            if(index == 2) {
                $('.swiper-area .step').html('STEP 2');
                $('.swiper-area .step-desc').html('플레이스 저장하기');
                $('.swiper-area .step-progress').html('01');
                $('.swiper-area .step-text').html('상단에 뜨는<br><em>플레이스명</em> 클릭하기');
            }
            if(index == 3) {
                $('.swiper-area .step').html('STEP 2');
                $('.swiper-area .step-desc').html('플레이스 저장하기');
                $('.swiper-area .step-progress').html('02');
                $('.swiper-area .step-text').html('<em>&apos;주변&apos; <i class="xi-arrow-right"></i> &apos;지도&apos; <i class="xi-arrow-right"></i> &apos;리뷰&apos;</em><br> 순서로 클릭하기');
            }
            // STEP 3
            if(index == 4) {
                $('.swiper-area .step').html('STEP 3');
                $('.swiper-area .step-desc').html('정답 입력하기');
                $('.swiper-area .step-progress').html('01');
                $('.swiper-area .step-text').html('화면 상/하단의 주소창을 눌러<br><em>URL 복사하기</em>');
            }
            if(index == 5) {
                $('.swiper-area .step').html('STEP 3');
                $('.swiper-area .step-desc').html('정답 입력하기');
                $('.swiper-area .step-progress').html('02');
                $('.swiper-area .step-text').html('복사된 URL을 붙여 넣어<br><em>정답 입력</em>');
            }
        }
    }
})





// 홈페이지퀴즈 슬라이드
var quizSlide = new Swiper('.quiz-slide', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    pagination : {
        el : '.swiper-pagination',
        clickable: true
    },
    navigation : {
        nextEl : '.navi-next',
        prevEl : '.navi-prev'
    },
    on : {
        slideChange : function() {
            let index = this.realIndex;
            // STEP 1
            if(index == 0) {
                $('.swiper-area .step').html('STEP 1');
                $('.swiper-area .step-desc').html('홈페이지 검색');
                $('.swiper-area .step-progress').html('01');
                $('.swiper-area .step-text').html('<em>&apos;키워드 복사&apos;</em> 버튼 클릭 후<br><em>&apos;검색하러가기&apos;</em>');
            } 
            if(index == 1) {
                $('.swiper-area .step').html('STEP 1');
                $('.swiper-area .step-desc').html('홈페이지 검색');
                $('.swiper-area .step-progress').html('02');
                $('.swiper-area .step-text').html('검색창에 <em>붙여넣기</em> 후<br><em>&apos;돋보기&apos;</em> 클릭');
            }
            // STEP 2
            if(index == 2) {
                $('.swiper-area .step').html('STEP 2');
                $('.swiper-area .step-desc').html('홈페이지 방문');
                $('.swiper-area .step-progress').html('01');
                $('.swiper-area .step-text').html('<em>홈페이지 방문</em>해서<br> 정답 찾기');
            }
            if(index == 3) {
                $('.swiper-area .step').html('STEP 2');
                $('.swiper-area .step-desc').html('홈페이지 방문');
                $('.swiper-area .step-progress').html('02');
                $('.swiper-area .step-text').html('<em>홈페이지 방문</em>해서<br> 정답 찾기');
            }
            // STEP 3
            if(index == 4) {
                $('.swiper-area .step').html('STEP 3');
                $('.swiper-area .step-desc').html('정답 입력하기');
                $('.swiper-area .step-progress').html('01');
                $('.swiper-area .step-text').html('<em>정답 입력</em>하기');
            }
        }
    }
})

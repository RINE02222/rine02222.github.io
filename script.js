// 페이지 전환
function showSection(sectionId) { // showSection 함수 실행 / html에서 지정해준 값을 받아 sectionId로 지정
    const sections = document.querySelectorAll('.section'); // 모든 section을 선택해 sections로 선언

    sections.forEach(section => { // 모든 섹션에 active를 제거(화면에 비표시) / forEach 반복문 
        section.classList.remove('active'); 
    });

    const targetSection = document.getElementById(sectionId); // 받은(누른) sectionId(페이지)를 targetSection로 선언
    if (targetSection) { // targetSection에 유효한 값이 있을 시
        targetSection.classList.add('active'); // 클래스 뒤에 active 추가(화면에 표시)
    }
}

// 라이트박스
document.addEventListener('click', (e) => { // 사이트를 클릭할 시 이벤트(e, 매개변수) 실행
    const gridItem = e.target.closest('.grid-item'); // 가장 가까운 grid-item 조상 요소를 선택해 gridItem로 선언
    const lightBox = document.getElementById('lightbox'); // lightbox id를 가진 요소를 lightBox로 선언
    const lightBoxImg = document.getElementById('lightbox-img'); // 이하 동문

    if (gridItem) { // gridItem에 유효한 값이 있을 시(=이미지를 클릭했을 시) / 배경은 gridItem 값이 null이기 떄문에 인식하지 못 함, 코드 실행 안 됨
        const img = gridItem.querySelector('img'); // gridItem 중 img가 붙은 요소를 찾아 img로 선언
        if (img) {
            lightBoxImg.src = img.src; // 갤러리의 이미지(img)와 라이트박스에 띄워지는 이미지(lightBoxImg)를 일치시킴
            lightBox.classList.add('active'); // 클래스 뒤에 active 추가(화면에 표시)
        }
    }

    // 닫기
    if (e.target.classList.contains('lightbox-close')) { // 닫기 버튼을 클릭할 시
        lightBox.classList.remove('active'); // 라이트박스 종료
    }
});
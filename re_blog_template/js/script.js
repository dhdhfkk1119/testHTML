
// 페이지 로드가 끝난 후 실행 header 팝업 뛰우기
document.addEventListener("DOMContentLoaded", () => {

    // 팝업 요소 및 버튼들 가져오기
    const popup = document.querySelector(".popup-container");
    const popupGear = document.querySelector(".header-gear");
    const cancelPopup = document.querySelector(".popup-cancle");
    const blogChangTitle = document.querySelector(".changTitle");
    const changeTitleBtn = document.querySelector(".popup-okey");
    const blogTitle = document.querySelector(".header-title");
    const instaValue = document.querySelector('.instaValue');
    const instaLink = document.getElementById("insta");
    const youtubeValue = document.querySelector('.youtubeValue');
    const youtubeLink = document.getElementById("youtube");
    const upFile = document.querySelector(".bg-select-btn");     // <input type="file">
    const fileName = document.querySelector(".file-input");      // 파일 이름 표시할 div


    // 페이지 로드시에 이미지 등로 버튼 눌러서 이미지 넣으면 해당 이미지를 div에 추가해주기
    if (upFile && fileName) {
        upFile.addEventListener("change", () => {
            if (upFile.files.length > 0) {
                fileName.textContent = upFile.files[0].name;     // 파일 이름 표시
            } else {
                fileName.textContent = "선택된 파일 없음";
            }
        });
    }

    // 페이지 로드시에 popup gear을 클릭하면 팝업 창이 열린다
    popupGear.addEventListener("click", () => {
        popup.style.display = "block";
    });

    // 팝업창 캔슬하기
    cancelPopup.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // 블로그 제목 URL, YouTube, Instagram 링크 변경
    changeTitleBtn?.addEventListener("click", () => {
        const title = blogChangTitle?.value.trim();
        const insta = instaValue?.value.trim();
        const youtube = youtubeValue?.value.trim();

        // 이름 입력시, URL, YouTube 링크 변경시 해당 이름 및 주소로 변경됨
        if (!title) {
            alert("블로그 제목이 비어있습니다. 입력해주시기 바랍니다.");
            return;
        }

        blogTitle.innerHTML = title;
        if (insta) instaLink?.setAttribute("href", insta);
        if (youtube) youtubeLink?.setAttribute("href", youtube);

        popup.style.display = "none";
    });


});

// 페이지 로드시 사이드 팝업 띄우기
document.addEventListener("DOMContentLoaded", () => {

    // 팝업 요소 및 버튼들 가져오기
    const popup = document.querySelector(".side-bar-layout");
    const popupGear = document.querySelector(".side-gear ");
    const cancelPopup = document.querySelector(".side-cancle");
    const sideOkey = document.querySelector(".side-okey");
    const addBtn = document.querySelector(".side-category-add-btn");
    const deleteCategory = document.querySelectorAll(".delete-category");

    // add 클릭시 div 추가 
    const category = document.querySelector(".side-category-border");
    // 페이지 로드시에 사이드 바 기얼를 클릭하면 팝업 창이 열린다
    popupGear.addEventListener("click", () => {
        popup.style.display = "block";
    });

    // 팝업창 캔슬하기 닫기
    cancelPopup.addEventListener("click", () => {
        popup.style.display = "none";
    });
    sideOkey.addEventListener("click",() => {
        popup.style.display = "none";
    });
    
    // 카테고리 div 형식으로 추가
    addBtn.addEventListener("click", () => {
        category.innerHTML += `
                    <div class="side-category-list">
                        <input type="text" value="">
                        <span><i class="fa-solid fa-circle-minus"></i></span>
                    </div>`;
    });

    // 각 카테고리 삭제
    deleteCategory.forEach(button => {
        button.addEventListener("click", () => {
            // 버튼의 부모 요소인 .side-category-list 삭제
            const categoryItem = button.closest(".side-category-list");
            categoryItem.remove();
        });
    });

});


// 페이지 로드시 댓글 삭제
document.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = document.querySelectorAll('.comment-delete-btn');
    // 각 delete 버튼을 클릭하면 한에 해당하는 comment-right div 
    // 안에있는 password input에 class를 추가해준다
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const parent = this.closest('.comment-right');
            const passwordInput = parent.querySelector('.comment-passwordInp');
            passwordInput.classList.toggle('active');
            // 해당 클래스 클릭시 active 라는 클래스를 추가해준다
        });
    });
});
